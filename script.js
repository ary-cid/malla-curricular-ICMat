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
];

const estructura = {
  "1° AÑO": {
    "Trimestre 1": ["imu", "iqu", "ifu"],
    "Trimestre 2": ["a1", "c1", "q1", "f1"],
    "Trimestre 3": ["a2", "c2", "q2", "f2"]
  },
  "2° AÑO": {
    "Semestre 1": ["c3", "edo", "est", "cp", "qai"]
  }
};

let creditosAprobados = 0;

function crearMalla() {
  const contenedor = document.getElementById("malla-container");

  for (const [anio, periodos] of Object.entries(estructura)) {
    const bloque = document.createElement("div");
    bloque.classList.add("bloque-anio");

    const titulo = document.createElement("h2");
    titulo.textContent = anio;
    bloque.appendChild(titulo);

    const filaPeriodos = document.createElement("div");
    filaPeriodos.classList.add("periodo");

    for (const [nombrePeriodo, ids] of Object.entries(periodos)) {
      const columna = document.createElement("div");
      columna.classList.add("column");

      const subtitulo = document.createElement("h3");
      subtitulo.textContent = nombrePeriodo;
      columna.appendChild(subtitulo);

      ids.forEach(id => {
        const ramo = ramos.find(r => r.id === id);
        if (!ramo) return;
        const div = document.createElement("div");
        div.classList.add("ramo", "bloqueado");
        div.id = ramo.id;
        div.textContent = ramo.nombre;
        columna.appendChild(div);
      });

      filaPeriodos.appendChild(columna);
    }

    bloque.appendChild(filaPeriodos);
    contenedor.appendChild(bloque);
  }

  actualizarMalla();
}

function actualizarMalla() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    const aprobado = div.classList.contains("aprobado");

    const requisitosAprobados = ramo.requisitos.every(req => {
      const reqDiv = document.getElementById(req);
      return reqDiv && reqDiv.classList.contains("aprobado");
    });

    if (requisitosAprobados) {
      div.classList.remove("bloqueado");
    } else if (!aprobado) {
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
