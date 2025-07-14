const malla = {
  "1° AÑO": {
    "Trimestre 1": [
      { nombre: "Introducción a la Matemática Universitaria", creditos: 6, abre: ["Algebra I", "Cálculo I"] },
      { nombre: "Introducción a la Química Universitaria", creditos: 3, abre: ["Química General I"] },
      { nombre: "Introducción a la Física Universitaria", creditos: 3, abre: ["Física I"] }
    ],
    "Trimestre 2": [
      { nombre: "Algebra I", creditos: 3, abre: ["Algebra II", "Cálculo III", "Estadística"] },
      { nombre: "Cálculo I", creditos: 3, abre: ["Cálculo II"] },
      { nombre: "Química General I", creditos: 3, abre: ["Química General II"] },
      { nombre: "Física I", creditos: 3, abre: ["Física II"] }
    ],
    "Trimestre 3": [
      { nombre: "Algebra II", creditos: 3, abre: ["Cálculo III", "Ecuaciones Diferenciales Ordinarias"] },
      { nombre: "Cálculo II", creditos: 3, abre: ["Cálculo III", "Ecuaciones Diferenciales Ordinarias", "Estadística"] },
      { nombre: "Química General II", creditos: 3, abre: ["Química Analítica e Instrumental", "Química de Materiales"] },
      { nombre: "Física II", creditos: 3, abre: ["Mecánica", "Electromagnetismo Ingenieril"] }
    ]
  },
  "2° AÑO": {
    "Semestre 3": [
      { nombre: "Calculo III", creditos: 5, abre: ["Complemento al Cálculo", "Mecánica", "Cálculo Numérico", "Electromagnetismo Ingenieril"] },
      { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 4, abre: ["Electromagnetismo Ingenieril"] },
      { nombre: "Estadística", creditos: 4, abre: ["Control y Gestión de Calidad"] },
      { nombre: "Computación y Programación", creditos: 3, abre: ["Dibujo Asistido por Computador"] },
      { nombre: "Química Analítica e Instrumental", creditos: 4 }
    ],
    "Semestre 4": [
      { nombre: "Complemento al Cálculo", creditos: 4 },
      { nombre: "Mecánica", creditos: 4, abre: ["Mecánica de Fluidos", "Mecánica de Materiales"] },
      { nombre: "Cálculo Numérico", creditos: 4 },
      { nombre: "Dibujo Asistido por Computador", creditos: 3 },
      { nombre: "Introducción a la Ingeniería de Materiales", creditos: 2 },
      { nombre: "Química de Materiales", creditos: 3, abre: ["Ciencia de Materiales", "Termodinámica de Materiales"] }
    ]
  },
  "3° AÑO": {
    "Semestre 5": [
      { nombre: "Ciencia de Materiales", creditos: 4, abre: ["Metalurgia Física"] },
      { nombre: "Mecánica de Fluidos", creditos: 4, abre: ["Transferencia de Calor"] },
      { nombre: "Electromagnetismo Ingenieril", creditos: 4, abre: ["Circuitos y Maquinas Eléctricas"] },
      { nombre: "Termodinámica de Materiales", creditos: 4, abre: ["Corrosión"] },
      { nombre: "Inglés Técnico", creditos: 3, abre: ["Inglés Conversacional"] }
    ],
    "Semestre 6": [
      { nombre: "Metalurgia Física", creditos: 4, abre: ["Transformaciones de Fases", "Fundamentos de la Deformación Plástica", "Metalurgia Ferrosa y No Ferrosa", "Corrosión"] },
      { nombre: "Mecánica de Materiales", creditos: 4, abre: ["Fundamentos de la Deformación Plástica"] },
      { nombre: "Transferencia de Calor", creditos: 4 },
      { nombre: "Liderazgo y Competencias Emprendedoras", creditos: 3 },
      { nombre: "Inglés Conversacional", creditos: 3 }
    ]
  },
  "4° AÑO": {
    "Semestre 7": [
      { nombre: "Transformaciones de Fases", creditos: 4, abre: ["Fusión de Metales", "Pulvimetalurgia"] },
      { nombre: "Fundamentos de la Deformación Plástica", creditos: 4, abre: ["Caracterización de Materiales", "Conformado de Metales"] },
      { nombre: "Metalurgia Ferrosa y No Ferrosa", creditos: 4 },
      { nombre: "Economía", creditos: 4, abre: ["Gestión de Empresas", "Formulación y Evaluación de Proyectos"] },
      { nombre: "Circuitos y Maquinas Eléctricas", creditos: 4 }
    ],
    "Semestre 8": [
      { nombre: "Fusión de Metales", creditos: 4, abre: ["Recubrimientos y Nanotecnologías"] },
      { nombre: "Pulvimetalurgia", creditos: 3 },
      { nombre: "Caracterización de Materiales", creditos: 4, abre: ["Análisis de Fallas", "Conformado de Plásticos, Cerámicos y Materiales Compuestos", "Selección de Materiales", "Recubrimientos y Nanotecnologías"] },
      { nombre: "Gestión de Empresas", creditos: 4 },
      { nombre: "Corrosión", creditos: 4, abre: ["Protección de Materiales"] },
      { nombre: "Visitas Industriales", creditos: 1 }
    ]
  },
  "5° AÑO": {
    "Semestre 9": [
      { nombre: "Análisis de Fallas", creditos: 3 },
      { nombre: "Conformado de Metales", creditos: 4 },
      { nombre: "Protección de Materiales", creditos: 3 },
      { nombre: "Formulación y Evaluación de Proyectos", creditos: 4, abre: ["Proyecto Ingeniería de Materiales"] },
      { nombre: "Conformado de Plásticos, Cerámicos y Materiales Compuestos", creditos: 3 },
      { nombre: "Electiva 1", creditos: 3 }
    ],
    "Semestre 10": [
      { nombre: "Selección de Materiales", creditos: 3 },
      { nombre: "Recubrimientos y Nanotecnologías", creditos: 3 },
      { nombre: "Legislación, Seguridad y Medio Ambiente", creditos: 3 },
      { nombre: "Proyecto Ingeniería de Materiales", creditos: 4 },
      { nombre: "Control y Gestión de Calidad", creditos: 3 },
      { nombre: "Electiva 2", creditos: 3 }
    ]
  },
  "6° AÑO": {
    "Semestre 11": [
      { nombre: "Memoria de Título", creditos: 18 }
    ]
  }
};

// FUNCIONALIDAD

const contenedor = document.getElementById("malla-container");
const contador = document.getElementById("creditos-contador");
let creditosAprobados = 0;
const estados = {}; // estado actual de cada ramo

function actualizarCreditos() {
  let suma = 0;
  for (const ramo in estados) {
    if (estados[ramo] === "aprobado") {
      const data = encontrarRamo(ramo);
      if (data) suma += data.creditos;
    }
  }
  contador.textContent = `Créditos aprobados: ${suma}`;
}

function encontrarRamo(nombre) {
  for (const año in malla) {
    for (const periodo in malla[año]) {
      for (const ramo of malla[año][periodo]) {
        if (ramo.nombre === nombre) return ramo;
      }
    }
  }
  return null;
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = `${ramo.nombre} (${ramo.creditos})`;
  div.dataset.nombre = ramo.nombre;
  div.dataset.estado = "inicial";
  estados[ramo.nombre] = "inicial";
  return div;
}

function desbloquearRamos() {
  for (const ramo in estados) {
    if (estados[ramo] === "inicial") {
      const data = encontrarRamo(ramo);
      if (!data || !data.abre) continue;
      let desbloqueado = false;
      for (const prereq in estados) {
        const prereqData = encontrarRamo(prereq);
        if (prereqData && prereqData.abre?.includes(ramo) && estados[prereq] === "aprobado") {
          desbloqueado = true;
        }
      }
      if (desbloqueado) {
        const div = document.querySelector(`.ramo[data-nombre=\"${ramo}\"]`);
        if (div && div.dataset.estado === \"inicial\") div.dataset.estado = \"desbloqueado\";
      }
    }
  }
}

function renderMalla() {
  contenedor.innerHTML = \"\";
  for (const año in malla) {
    const bloqueAño = document.createElement(\"div\");
    bloqueAño.className = \"bloque-año\";
    const tituloAño = document.createElement(\"h2\");
    tituloAño.textContent = año;
    bloqueAño.appendChild(tituloAño);

    const periodos = document.createElement(\"div\");
    periodos.className = \"periodos\";

    for (const periodo in malla[año]) {
      const columna = document.createElement(\"div\");
      columna.className = \"columna\";
      const titulo = document.createElement(\"h3\");
      titulo.textContent = periodo;
      columna.appendChild(titulo);
      malla[año][periodo].forEach(ramo => {
        const div = crearRamo(ramo);
        columna.appendChild(div);
      });
      periodos.appendChild(columna);
    }

    bloqueAño.appendChild(periodos);
    contenedor.appendChild(bloqueAño);
  }

  document.querySelectorAll(\".ramo\").forEach(div => {
    div.addEventListener(\"click\", () => {
      const estado = div.dataset.estado;
      const nombre = div.dataset.nombre;

      if (estado === \"aprobado\") {
        div.dataset.estado = \"inicial\";
        estados[nombre] = \"inicial\";
      } else {
        div.dataset.estado = \"aprobado\";
        estados[nombre] = \"aprobado\";
      }

      desbloquearRamos();
      actualizarCreditos();
    });
  });
}

renderMalla();
