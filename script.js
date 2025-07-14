const ramos = [
  // Primer año - Trimestre 1
  { id: "imu", nombre: "Introducción a la Matemática Universitaria", creditos: 6, requisitos: [] },
  { id: "iqu", nombre: "Introducción a la Química Universitaria", creditos: 3, requisitos: [] },
  { id: "ifu", nombre: "Introducción a la Física Universitaria", creditos: 3, requisitos: [] },

  // Trimestre 2
  { id: "a1", nombre: "Álgebra I", creditos: 3, requisitos: ["imu"] },
  { id: "c1", nombre: "Cálculo I", creditos: 3, requisitos: ["imu"] },
  { id: "q1", nombre: "Química General I", creditos: 3, requisitos: ["iqu"] },
  { id: "f1", nombre: "Física I", creditos: 3, requisitos: ["ifu"] },

  // Trimestre 3
  { id: "a2", nombre: "Álgebra II", creditos: 3, requisitos: ["a1"] },
  { id: "c2", nombre: "Cálculo II", creditos: 3, requisitos: ["c1"] },
  { id: "q2", nombre: "Química General II", creditos: 3, requisitos: ["q1"] },
  { id: "f2", nombre: "Física II", creditos: 3, requisitos: ["f1"] },

  // Segundo año - Semestre 3
  { id: "c3", nombre: "Cálculo III", creditos: 5, requisitos: ["a1", "a2", "c2"] },
  { id: "edo", nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 4, requisitos: ["a2", "c2"] },
  { id: "est", nombre: "Estadística", creditos: 4, requisitos: ["a1", "c2"] },
  { id: "cp", nombre: "Computación y Programación", creditos: 3, requisitos: ["imu", "iqu", "ifu", "a1", "c1", "q1", "f1", "a2", "c2", "q2", "f2"] },
  { id: "qai", nombre: "Química Analítica e Instrumental", creditos: 4, requisitos: ["q2"] },

  // Semestre 4
  { id: "cc", nombre: "Complemento al Cálculo", creditos: 4, requisitos: ["c3"] },
  { id: "mec", nombre: "Mecánica", creditos: 4, requisitos: ["f2", "c3"] },
  { id: "cn", nombre: "Cálculo Numérico", creditos: 4, requisitos: ["c3"] },
  { id: "dac", nombre: "Dibujo Asistido por Computador", creditos: 3, requisitos: ["cp"] },
  { id: "iim", nombre: "Introducción a la Ingeniería de Materiales", creditos: 2, requisitos: [], creditosRequeridos: 45 },
  { id: "qm", nombre: "Química de Materiales", creditos: 3, requisitos: ["q2"] },

  // Tercer año - Semestre 5
  { id: "cmat", nombre: "Ciencia de Materiales", creditos: 4, requisitos: ["qm"] },
  { id: "mf", nombre: "Mecánica de Fluidos", creditos: 4, requisitos: ["mec"] },
  { id: "emi", nombre: "Electromagnetismo Ingenieril", creditos: 4, requisitos: ["f2", "c3", "edo"] },
  { id: "tdm", nombre: "Termodinámica de Materiales", creditos: 4, requisitos: ["qm"] },
  { id: "ing", nombre: "Inglés Técnico", creditos: 3, requisitos: [], creditosRequeridos: 60 },

  // Semestre 6
  { id: "mfis", nombre: "Metalurgia Física", creditos: 4, requisitos: ["cmat"] },
  { id: "mm", nombre: "Mecanismo de Materiales", creditos: 4, requisitos: [] },
  { id: "tc", nombre: "Transferencia de Calor", creditos: 4, requisitos: ["mf"] },
  { id: "lid", nombre: "Liderazgo y Competencias Emprendedoras", creditos: 3, requisitos: [], creditosRequeridos: 70 },
  { id: "conv", nombre: "Inglés Conversacional", creditos: 3, requisitos: ["ing"] },

  // Cuarto año - Semestre 7
  { id: "tf", nombre: "Transformaciones de Fases", creditos: 4, requisitos: ["mfis"] },
  { id: "fdp", nombre: "Fundamentos de la Deformación Plástica", creditos: 4, requisitos: ["mfis", "mm"] },
  { id: "mfnf", nombre: "Metalurgia Ferrosa y No Ferrosa", creditos: 4, requisitos: ["mfis"] },
  { id: "eco", nombre: "Economía", creditos: 4, requisitos: [], creditosRequeridos: 80 },
  { id: "cme", nombre: "Circuitos y Máquinas Eléctricas", creditos: 4, requisitos: ["emi"] },

  // Semestre 8
  { id: "fm", nombre: "Fusión de Metales", creditos: 4, requisitos: ["tf"] },
  { id: "pm", nombre: "Pulvimetalurgia", creditos: 3, requisitos: ["tf"] },
  { id: "carac", nombre: "Caracterización de Materiales", creditos: 4, requisitos: ["fdp"] },
  { id: "ge", nombre: "Gestión de Empresas", creditos: 4, requisitos: ["eco"] },
  { id: "corr", nombre: "Corrosión", creditos: 4, requisitos: ["tdm", "mfis"] },
  { id: "vi", nombre: "Visitas Industriales", creditos: 1, requisitos: [], creditosRequeridos: 100 },

  // Quinto año - Semestre 9
  { id: "af", nombre: "Análisis de Fallas", creditos: 3, requisitos: ["carac"] },
  { id: "cmet", nombre: "Conformado de Metales", creditos: 4, requisitos: ["fdp", "carac"] },
  { id: "prot", nombre: "Protección de Materiales", creditos: 3, requisitos: ["corr"] },
  { id: "fep", nombre: "Formulación y Evaluación de Proyectos", creditos: 4, requisitos: ["eco"], creditosRequeridos: 150 },
  { id: "cpcc", nombre: "Conformado de Plásticos, Cerámicos y Materiales Compuestos", creditos: 3, requisitos: ["carac"] },
  { id: "e1", nombre: "Electiva 1", creditos: 3, requisitos: [] },

  // Semestre 10
  { id: "sm", nombre: "Selección de Materiales", creditos: 3, requisitos: ["carac"] },
  { id: "rec", nombre: "Recubrimientos y Nanotecnologías", creditos: 3, requisitos: ["fm", "carac"] },
  { id: "lsma", nombre: "Legislación, Seguridad y Medio Ambiente", creditos: 3, requisitos: [], creditosRequeridos: 120 },
  { id: "proj", nombre: "Proyecto Ingeniería de Materiales", creditos: 4, requisitos: ["fep"], creditosRequeridos: 150 },
  { id: "cgc", nombre: "Control y Gestión de Calidad", creditos: 3, requisitos: ["est"], creditosRequeridos: 150 },
  { id: "e2", nombre: "Electiva 2", creditos: 3, requisitos: [] },

  // Sexto año - Semestre 11
  { id: "mem", nombre: "Memoria de Título", creditos: 18, requisitos: ["proj"] }
];

let creditosAprobados = 0;

function crearMalla() {
  const contenedor = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo", "bloqueado");
    div.id = ramo.id;
    div.innerText = ramo.nombre;
    contenedor.appendChild(div);
  });
  actualizarMalla();
}

function actualizarMalla() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    const aprobado = div.classList.contains("aprobado");
    if (aprobado) return;

    const requisitosAprobados = ramo.requisitos.every(req => {
      const reqDiv = document.getElementById(req);
      return reqDiv && reqDiv.classList.contains("aprobado");
    });

    const cumpleCreditos = ramo.creditosRequeridos ? creditosAprobados >= ramo.creditosRequeridos : true;

    if (requisitosAprobados && cumpleCreditos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  crearMalla();

  document.querySelectorAll(".ramo").forEach(div => {
    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;

      const ramo = ramos.find(r => r.id === div.id);
      const yaAprobado = div.classList.contains("aprobado");

      if (!yaAprobado) {
        div.classList.add("aprobado");
        creditosAprobados += ramo.creditos;
      } else {
        div.classList.remove("aprobado");
        creditosAprobados -= ramo.creditos;
      }

      actualizarMalla();
    });
  });
});
