const malla = [
  {
    año: "1° AÑO",
    periodos: [
      {
        titulo: "Trimestre 1",
        ramos: [
          { nombre: "Introducción a la Matemática Universitaria", creditos: 5 },
          { nombre: "Introducción a la Química Universitaria", creditos: 5 },
          { nombre: "Introducción a la Física Universitaria", creditos: 5 }
        ]
      },
      {
        titulo: "Trimestre 2",
        ramos: [
          { nombre: "Álgebra I", creditos: 6 },
          { nombre: "Cálculo I", creditos: 6 },
          { nombre: "Química General I", creditos: 6 },
          { nombre: "Física I", creditos: 6 }
        ]
      },
      {
        titulo: "Trimestre 3",
        ramos: [
          { nombre: "Álgebra II", creditos: 6 },
          { nombre: "Cálculo II", creditos: 6 },
          { nombre: "Química General II", creditos: 6 },
          { nombre: "Física II", creditos: 6 }
        ]
      }
    ]
  },
  {
    año: "2° AÑO",
    periodos: [
      {
        titulo: "Semestre 3",
        ramos: [
          { nombre: "Cálculo III", creditos: 6 },
          { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 6 },
          { nombre: "Estadística", creditos: 5 },
          { nombre: "Computación y Programación", creditos: 5 },
          { nombre: "Química Analítica e Instrumental", creditos: 6 }
        ]
      },
      {
        titulo: "Semestre 4",
        ramos: [
          { nombre: "Complemento al Cálculo", creditos: 5 },
          { nombre: "Mecánica", creditos: 6 },
          { nombre: "Cálculo Numérico", creditos: 5 },
          { nombre: "Dibujo Asistido por Computador", creditos: 4 },
          { nombre: "Introducción a la Ingeniería de Materiales", creditos: 5 },
          { nombre: "Química de Materiales", creditos: 5 }
        ]
      }
    ]
  },
  {
    año: "3° AÑO",
    periodos: [
      {
        titulo: "Semestre 5",
        ramos: [
          { nombre: "Ciencia de Materiales", creditos: 6 },
          { nombre: "Mecánica de Fluidos", creditos: 6 },
          { nombre: "Electromagnetismo Ingenieril", creditos: 6 },
          { nombre: "Termodinámica de Materiales", creditos: 6 },
          { nombre: "Inglés Técnico", creditos: 4 }
        ]
      },
      {
        titulo: "Semestre 6",
        ramos: [
          { nombre: "Metalurgia Física", creditos: 6 },
          { nombre: "Mecánica de Materiales", creditos: 6 },
          { nombre: "Transferencia de Calor", creditos: 5 },
          { nombre: "Liderazgo y Competencias Emprendedoras", creditos: 3 },
          { nombre: "Inglés Conversacional", creditos: 4 }
        ]
      }
    ]
  },
  {
    año: "4° AÑO",
    periodos: [
      {
        titulo: "Semestre 7",
        ramos: [
          { nombre: "Transformaciones de Fases", creditos: 6 },
          { nombre: "Fundamentos de la Deformación Plástica", creditos: 6 },
          { nombre: "Metalurgia Ferrosa y No Ferrosa", creditos: 6 },
          { nombre: "Economía", creditos: 4 },
          { nombre: "Circuitos y Máquinas Eléctricas", creditos: 5 }
        ]
      },
      {
        titulo: "Semestre 8",
        ramos: [
          { nombre: "Fusión de Metales", creditos: 6 },
          { nombre: "Pulvimetalurgia", creditos: 5 },
          { nombre: "Caracterización de Materiales", creditos: 6 },
          { nombre: "Gestión de Empresas", creditos: 4 },
          { nombre: "Corrosión", creditos: 5 },
          { nombre: "Visitas Industriales", creditos: 2 }
        ]
      }
    ]
  },
  {
    año: "5° AÑO",
    periodos: [
      {
        titulo: "Semestre 9",
        ramos: [
          { nombre: "Análisis de Fallas", creditos: 5 },
          { nombre: "Conformado de Metales", creditos: 6 },
          { nombre: "Protección de Materiales", creditos: 5 },
          { nombre: "Formulación y Evaluación de Proyectos", creditos: 5 },
          { nombre: "Conformado de Plásticos, Cerámicos y Materiales Compuestos", creditos: 4 },
          { nombre: "Electiva 1", creditos: 4 }
        ]
      },
      {
        titulo: "Semestre 10",
        ramos: [
          { nombre: "Selección de Materiales", creditos: 4 },
          { nombre: "Recubrimientos y Nanotecnologías", creditos: 5 },
          { nombre: "Legislación, Seguridad y Medio Ambiente", creditos: 4 },
          { nombre: "Proyecto Ingeniería de Materiales", creditos: 6 },
          { nombre: "Control y Gestión de Calidad", creditos: 4 },
          { nombre: "Electiva 2", creditos: 4 }
        ]
      }
    ]
  },
  {
    año: "6° AÑO",
    periodos: [
      {
        titulo: "Semestre 11",
        ramos: [
          { nombre: "Memoria de Título", creditos: 18 }
        ]
      }
    ]
  }
];

const contenedor = document.getElementById("malla-container");
let creditosAprobados = 0;

function actualizarContador() {
  document.getElementById("creditos-contador").textContent = `Créditos aprobados: ${creditosAprobados}`;
}

function crearMalla() {
  malla.forEach((añoObj) => {
    const añoContainer = document.createElement("div");
    añoContainer.classList.add("año-container");

    const añoTitulo = document.createElement("h2");
    añoTitulo.classList.add("año-titulo");
    añoTitulo.textContent = añoObj.año;
    añoContainer.appendChild(añoTitulo);

    const trimestreWrapper = document.createElement("div");
    trimestreWrapper.classList.add("trimestre-container");

    añoObj.periodos.forEach((periodo) => {
      const trimestreBox = document.createElement("div");
      trimestreBox.classList.add("trimestre");

      const titulo = document.createElement("h3");
      titulo.textContent = periodo.titulo;
      trimestreBox.appendChild(titulo);

      periodo.ramos.forEach((ramo) => {
        const divRamo = document.createElement("div");
        divRamo.classList.add("ramo");
        divRamo.textContent = ramo.nombre;
        divRamo.dataset.creditos = ramo.creditos;

        divRamo.addEventListener("click", () => {
          if (divRamo.classList.contains("aprobado")) {
            divRamo.classList.remove("aprobado");
            creditosAprobados -= parseInt(ramo.creditos);
          } else {
            divRamo.classList.add("aprobado");
            creditosAprobados += parseInt(ramo.creditos);
          }
          actualizarContador();
        });

        trimestreBox.appendChild(divRamo);
      });

      trimestreWrapper.appendChild(trimestreBox);
    });

    añoContainer.appendChild(trimestreWrapper);
    contenedor.appendChild(añoContainer);
  });
}

crearMalla();
actualizarContador();
