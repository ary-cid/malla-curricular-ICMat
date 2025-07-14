const mallaContainer = document.getElementById("malla-container");
const creditosContador = document.getElementById("creditos-contador");

const malla = [
  {
    año: "1° AÑO",
    periodos: [
      {
        nombre: "Trimestre 1",
        ramos: [
          { nombre: "Introducción a la Matemática Universitaria", creditos: 5, codigo: "MAT001", prerrequisitos: [] },
          { nombre: "Introducción a la Química Universitaria", creditos: 5, codigo: "QUI001", prerrequisitos: [] },
          { nombre: "Introducción a la Física Universitaria", creditos: 5, codigo: "FIS001", prerrequisitos: [] }
        ]
      },
      {
        nombre: "Trimestre 2",
        ramos: [
          { nombre: "Álgebra I", creditos: 6, codigo: "MAT101", prerrequisitos: ["MAT001"] },
          { nombre: "Cálculo I", creditos: 6, codigo: "MAT102", prerrequisitos: ["MAT001"] },
          { nombre: "Química General I", creditos: 6, codigo: "QUI101", prerrequisitos: ["QUI001"] },
          { nombre: "Física I", creditos: 6, codigo: "FIS101", prerrequisitos: ["FIS001", "MAT001"] }
        ]
      },
      {
        nombre: "Trimestre 3",
        ramos: [
          { nombre: "Álgebra II", creditos: 6, codigo: "MAT201", prerrequisitos: ["MAT101"] },
          { nombre: "Cálculo II", creditos: 6, codigo: "MAT202", prerrequisitos: ["MAT102"] },
          { nombre: "Química General II", creditos: 6, codigo: "QUI201", prerrequisitos: ["QUI101"] },
          { nombre: "Física II", creditos: 6, codigo: "FIS201", prerrequisitos: ["FIS101"] }
        ]
      }
    ]
  },
  {
    año: "2° AÑO",
    periodos: [
      {
        nombre: "Semestre 3",
        ramos: [
          { nombre: "Cálculo III", creditos: 6, codigo: "MAT301", prerrequisitos: ["MAT202"] },
          { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 6, codigo: "MAT302", prerrequisitos: ["MAT202"] },
          { nombre: "Estadística", creditos: 6, codigo: "MAT303", prerrequisitos: ["MAT101"] },
          { nombre: "Computación y Programación", creditos: 6, codigo: "INF301", prerrequisitos: [] },
          { nombre: "Química Analítica e Instrumental", creditos: 6, codigo: "QUI301", prerrequisitos: ["QUI201"] }
        ]
      },
      {
        nombre: "Semestre 4",
        ramos: [
          { nombre: "Complemento al Cálculo", creditos: 6, codigo: "MAT401", prerrequisitos: ["MAT301"] },
          { nombre: "Mecánica", creditos: 6, codigo: "FIS401", prerrequisitos: ["FIS201"] },
          { nombre: "Cálculo Numérico", creditos: 6, codigo: "MAT402", prerrequisitos: ["MAT301"] },
          { nombre: "Dibujo Asistido por Computador", creditos: 6, codigo: "INF302", prerrequisitos: ["INF301"] },
          { nombre: "Introducción a la Ingeniería de Materiales", creditos: 6, codigo: "MAT403", prerrequisitos: ["QUI201"] },
          { nombre: "Química de Materiales", creditos: 6, codigo: "QUI302", prerrequisitos: ["QUI201"] }
        ]
      }
    ]
  }
];

// Mapa para rastrear ramos
const botonesPorCodigo = new Map();
let creditos = 0;

function actualizarCreditos() {
  creditosContador.textContent = `Créditos aprobados: ${creditos}`;
}

function crearRamo(ramo) {
  const boton = document.createElement("button");
  boton.classList.add("ramo");
  boton.textContent = ramo.nombre;
  boton.disabled = ramo.prerrequisitos.length > 0;
  boton.dataset.codigo = ramo.codigo;
  botonesPorCodigo.set(ramo.codigo, { boton, datos: ramo });

  boton.addEventListener("click", () => {
    if (boton.classList.contains("aprobado")) return;

    boton.classList.add("aprobado");
    creditos += ramo.creditos;
    actualizarCreditos();

    for (const [codigo, { boton: b, datos }] of botonesPorCodigo) {
      if (datos.prerrequisitos.includes(ramo.codigo)) {
        const requisitos = datos.prerrequisitos;
        const aprobados = requisitos.every(r => botonesPorCodigo.get(r)?.boton.classList.contains("aprobado"));
        if (aprobados) {
          b.disabled = false;
          b.classList.add("desbloqueado");
        }
      }
    }
  });

  return boton;
}

function renderizarMalla() {
  malla.forEach(bloque => {
    const bloqueAño = document.createElement("div");
    bloqueAño.className = "year-block";

    const tituloAño = document.createElement("div");
    tituloAño.className = "year-title";
    tituloAño.textContent = bloque.año;
    bloqueAño.appendChild(tituloAño);

    const contenedorPeriodos = document.createElement("div");
    contenedorPeriodos.className = "period-container";

    bloque.periodos.forEach(periodo => {
      const periodoDiv = document.createElement("div");
      periodoDiv.className = "period-block";

      const tituloPeriodo = document.createElement("div");
      tituloPeriodo.className = "period-title";
      tituloPeriodo.textContent = periodo.nombre;
      periodoDiv.appendChild(tituloPeriodo);

      periodo.ramos.forEach(ramo => {
        const boton = crearRamo(ramo);
        periodoDiv.appendChild(boton);
      });

      contenedorPeriodos.appendChild(periodoDiv);
    });

    bloqueAño.appendChild(contenedorPeriodos);
    mallaContainer.appendChild(bloqueAño);
  });
}

renderizarMalla();
actualizarCreditos();
