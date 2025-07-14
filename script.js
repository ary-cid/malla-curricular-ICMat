const ramos = [
  { id: "imu", nombre: "Introducción a la Matemática Universitaria", creditos: 6, requisitos: [] },
  { id: "iqu", nombre: "Introducción a la Química Universitaria", creditos: 3, requisitos: [] },
  { id: "ifu", nombre: "Introducción a la Física Universitaria", creditos: 3, requisitos: [] },
  { id: "a1", nombre: "Álgebra I", creditos: 3, requisitos: ["imu"] },
  { id: "c1", nombre: "Cálculo I", creditos: 3, requisitos: ["imu"] },
  { id: "q1", nombre: "Química General I", creditos: 3, requisitos: ["iqu"] },
  { id: "f1", nombre: "Física I", creditos: 3, requisitos: ["ifu"] },
  { id: "a2", nombre: "Álgebra II", creditos: 3, requisitos: ["a1"] },
  { id: "c2", nombre: "Cálculo II", creditos: 3, requisitos: ["c1"] },
  { id: "q2", nombre: "Química General II", creditos: 3, requisitos: ["q1"] },
  { id: "f2", nombre: "Física II", creditos: 3, requisitos: ["f1"] },
  { id: "c3", nombre: "Cálculo III", creditos: 5, requisitos: ["a1", "a2", "c2"] },
  { id: "edo", nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 4, requisitos: ["a2", "c2"] },
  { id: "est", nombre: "Estadística", creditos: 4, requisitos: ["a1", "c2"] },
  { id: "cp", nombre: "Computación y Programación", creditos: 3, requisitos: ["imu", "iqu", "ifu", "a1", "c1", "q1", "f1", "a2", "c2", "q2", "f2"] },
  { id: "qai", nombre: "Química Analítica e Instrumental", creditos: 4, requisitos: ["q2"] },
  { id: "cc", nombre: "Complemento al Cálculo", creditos: 4, requisitos: ["c3"] },
  { id: "mec", nombre: "Mecánica", creditos: 4, requisitos: ["f2", "c3"] },
  { id: "cn", nombre: "Cálculo Numérico", creditos: 4, requisitos: ["c3"] },
  { id: "dac", nombre: "Dibujo Asistido por Computador", creditos: 3, requisitos: ["cp"] },
  { id: "iim", nombre: "Introducción a la Ingeniería de Materiales", creditos: 2, requisitos: [] },
  { id: "qm", nombre: "Química de Materiales", creditos: 3, requisitos: ["q2"] },
  { id: "cmat", nombre: "Ciencia de Materiales", creditos: 4, requisitos: ["qm"] },
  { id: "mf", nombre: "Mecánica de Fluidos", creditos: 4, requisitos: ["mec"] },
  { id: "emi", nombre: "Electromagnetismo Ingenieril", creditos: 4, requisitos: ["f2", "c3", "edo"] },
  { id: "tdm", nombre: "Termodinámica de Materiales", creditos: 4, requisitos: ["qm"] },
  { id: "ing", nombre: "Inglés Técnico", creditos: 3, requisitos: [] },
  { id: "mfis", nombre: "Metalurgia Física", creditos: 4, requisitos: ["cmat"] },
  { id: "mm", nombre: "Mecánica de Materiales", creditos: 4, requisitos: [] },
  { id: "tc", nombre: "Transferencia de Calor", creditos: 4, requisitos: ["mf"] },
  { id: "lid", nombre: "Liderazgo y Competencias Emprendedoras", creditos: 3, requisitos: [] },
  { id: "conv", nombre: "Inglés Conversacional", creditos: 3, requisitos: ["ing"] },
  { id: "tf", nombre: "Transformaciones de Fases", creditos: 4, requisitos: ["mfis"] },
  { id: "fdp", nombre: "Fundamentos de la Deformación Plástica", creditos: 4, requisitos: ["mfis", "mm"] },
  { id: "mfnf", nombre: "Metalurgia Ferrosa y No Ferrosa", creditos: 4, requisitos: ["mfis"] },
  { id: "eco", nombre: "Economía", creditos: 4, requisitos: [] },
  { id: "cme", nombre: "Circuitos y Máquinas Eléctricas", creditos: 4, requisitos: ["emi"] },
  { id: "fm", nombre: "Fusión de Metales", creditos: 4, requisitos: ["tf"] },
  { id: "pm", nombre: "Pulvimetalurgia", creditos: 3, requisitos: ["tf"] },
  { id: "carac", nombre: "Caracterización de Materiales", creditos: 4, requisitos: ["fdp"] },
  { id: "ge", nombre: "Gestión de Empresas", creditos: 4, requisitos: ["eco"] },
  { id: "corr", nombre: "Corrosión", creditos: 4, requisitos: ["tdm", "mfis"] },
  { id: "vi", nombre: "Visitas Industriales", creditos: 1, requisitos: [] },
  { id: "af", nombre: "Análisis de Fallas", creditos: 3, requisitos: ["carac"] },
  { id: "cmet", nombre: "Conformado de Metales", creditos: 4, requisitos: ["fdp", "carac"] },
  { id: "prot", nombre: "Protección de Materiales", creditos: 3, requisitos: ["corr"] },
  { id: "fep", nombre: "Formulación y Evaluación de Proyectos", creditos: 4, requisitos: ["eco"] },
  { id: "cpcc", nombre: "Conformado de Plásticos, Cerámicos y Materiales Compuestos", creditos: 3, requisitos: ["carac"] },
  { id: "e1", nombre: "Electiva 1", creditos: 3, requisitos: [] },
  { id: "sm", nombre: "Selección de Materiales", creditos: 3, requisitos: ["carac"] },
  { id: "rec", nombre: "Recubrimientos y Nanotecnologías", creditos: 3, requisitos: ["fm", "carac"] },
  { id: "lsma", nombre: "Legislación, Seguridad y Medio Ambiente", creditos: 3, requisitos: [] },
  { id: "proj", nombre: "Proyecto Ingeniería de Materiales", creditos: 4, requisitos: ["fep"] },
  { id: "cgc", nombre: "Control y Gestión de Calidad", creditos: 3, requisitos: ["est"] },
  { id: "e2", nombre: "Electiva 2", creditos: 3, requisitos: [] },
  { id: "mem", nombre: "Memoria de Título", creditos: 18, requisitos: ["proj"] }
];

let creditosAprobados = 0;

const estructura = {
  "Primer Año": {
    "Trimestre 1": ["imu", "iqu", "ifu"],
    "Trimestre 2": ["a1", "c1", "q1", "f1"],
    "Trimestre 3": ["a2", "c2", "q2", "f2"]
  },
  "Segundo Año": {
    "Semestre 3": ["c3", "edo", "est", "cp", "qai"],
    "Semestre 4": ["cc", "mec", "cn", "dac", "iim", "qm"]
  },
  "Tercer Año": {
    "Semestre 5": ["cmat", "mf", "emi", "tdm", "ing"],
    "Semestre 6": ["mfis", "mm", "tc", "lid", "conv"]
  },
  "Cuarto Año": {
    "Semestre 7": ["tf", "fdp", "mfnf", "eco", "cme"],
    "Semestre 8": ["fm", "pm", "carac", "ge", "corr", "vi"]
  },
  "Quinto Año": {
    "Semestre 9": ["af", "cmet", "prot", "fep", "cpcc", "e1"],
    "Semestre 10": ["sm", "rec", "lsma", "proj", "cgc", "e2"]
  },
  "Sexto Año": {
    "Semestre 11": ["mem"]
  }
};

function crearMalla() {
  const contenedor = document.getElementById("malla-container");

  for (const [anio, periodos] of Object.entries(estructura)) {
    const contenedorAnio = document.createElement("div");
    contenedorAnio.classList.add("anio");

    const tituloAnio = document.createElement("h2");
    tituloAnio.innerText = anio;
    contenedorAnio.appendChild(tituloAnio);

    for (const [periodo, ids] of Object.entries(periodos)) {
      const bloque = document.createElement("div");
      bloque.classList.add("bloque-periodo");

      const tituloPeriodo = document.createElement("h3");
      tituloPeriodo.innerText = periodo;
      bloque.appendChild(tituloPeriodo);

      const grid = document.createElement("div");
      grid.classList.add("malla");

      ids.forEach(id => {
        const ramo = ramos.find(r => r.id === id);
        if (!ramo) return;
        const div = document.createElement("div");
        div.classList.add("ramo", "bloqueado");
        div.id = ramo.id;
        div.innerText = ramo.nombre;
        grid.appendChild(div);
      });

      bloque.appendChild(grid);
      contenedorAnio.appendChild(bloque);
    }

    contenedor.appendChild(contenedorAnio);
  }

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

    if (requisitosAprobados) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });

  document.getElementById("creditos-contador").innerText = `Créditos aprobados: ${creditosAprobados}`;
}

document.addEventListener("DOMContentLoaded", () => {
  crearMalla();

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ramo") && !e.target.classList.contains("bloqueado")) {
      const div = e.target;
      const ramo = ramos.find(r => r.id === div.id);

      if (div.classList.contains("aprobado")) {
        div.classList.remove("aprobado");
        creditosAprobados -= ramo.creditos;
      } else {
        div.classList.add("aprobado");
        creditosAprobados += ramo.creditos;
      }

      actualizarMalla();
    }
  });
});
