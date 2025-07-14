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
  { id: "iim", nombre: "Introducción a la Ingeniería de Materiales", creditos: 2, requisitos: [], creditosRequeridos: 45 },
  { id: "qm", nombre: "Química de Materiales", creditos: 3, requisitos: ["q2"] },
  { id: "cm", nombre: "Ciencia de Materiales", creditos: 4, requisitos: ["qm"] },
  { id: "mf", nombre: "Mecánica de Fluidos", creditos: 4, requisitos: ["mec"] },
  { id: "emi", nombre: "Electromagnetismo Ingenieril", creditos: 4, requisitos: ["f2", "c3", "edo"] },
  { id: "tdm", nombre: "Termodinámica de Materiales", creditos: 4, requisitos: ["qm"] },
  { id: "ing", nombre: "Inglés Técnico", creditos: 3, requisitos: [], creditosRequeridos: 60 },
  { id: "mfis", nombre: "Metalurgia Física", creditos: 4, requisitos: ["cm"] },
  { id: "mm", nombre: "Mecanismo de Materiales", creditos: 4, requisitos: [] },
  { id: "tc", nombre: "Transferencia de Calor", creditos: 4, requisitos: ["mf"] },
  { id: "lid", nombre: "Liderazgo y Emprendimiento", creditos: 3, requisitos: [], creditosRequeridos: 70 },
  { id: "conv", nombre: "Inglés Conversacional", creditos: 3, requisitos: ["ing"] },
  // ... puedes continuar el resto aquí de igual forma
];

let creditosAprobados = 0;

function crearMalla() {
  const contenedor = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.id = ramo.id;
    div.innerText = ramo.nombre;
    div.classList.add("bloqueado");
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

      if (!div.classList.contains("aprobado")) {
        div.classList.add("aprobado");
        const ramo = ramos.find(r => r.id === div.id);
        creditosAprobados += ramo.creditos;
      } else {
        div.classList.remove("aprobado");
        const ramo = ramos.find(r => r.id === div.id);
        creditosAprobados -= ramo.creditos;
      }
      actualizarMalla();
    });
  });
});
