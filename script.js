const ramos = [
  { nombre: "Introducción a la Matemática Universitaria", creditos: 6, id: "intro-matematica", prerrequisitos: [], abre: ["algebra1", "calculo1"] },
  { nombre: "Introducción a la Química Universitaria", creditos: 3, id: "intro-quimica", prerrequisitos: [], abre: ["quimica1"] },
  { nombre: "Introducción a la Física Universitaria", creditos: 3, id: "intro-fisica", prerrequisitos: [], abre: ["fisica1"] },
  { nombre: "Álgebra I", creditos: 3, id: "algebra1", prerrequisitos: ["intro-matematica"], abre: ["algebra2", "calculo3", "estadistica"] },
  { nombre: "Cálculo I", creditos: 3, id: "calculo1", prerrequisitos: ["intro-matematica"], abre: ["calculo2"] },
  { nombre: "Química General I", creditos: 3, id: "quimica1", prerrequisitos: ["intro-quimica"], abre: ["quimica2"] },
  { nombre: "Física I", creditos: 3, id: "fisica1", prerrequisitos: ["intro-fisica"], abre: ["fisica2"] },
  { nombre: "Álgebra II", creditos: 3, id: "algebra2", prerrequisitos: ["algebra1"], abre: ["calculo3", "edo"] },
  { nombre: "Cálculo II", creditos: 3, id: "calculo2", prerrequisitos: ["calculo1"], abre: ["calculo3", "edo", "estadistica"] },
  { nombre: "Química General II", creditos: 3, id: "quimica2", prerrequisitos: ["quimica1"], abre: ["quimica-analitica", "quimica-materiales"] },
  { nombre: "Física II", creditos: 3, id: "fisica2", prerrequisitos: ["fisica1"], abre: ["mecanica", "electromagnetismo"] },
  { nombre: "Cálculo III", creditos: 5, id: "calculo3", prerrequisitos: ["calculo2", "algebra1", "algebra2"], abre: ["complemento-calculo", "mecanica", "calculo-numerico", "electromagnetismo"] },
  { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 4, id: "edo", prerrequisitos: ["calculo2", "algebra2"], abre: ["electromagnetismo"] },
  { nombre: "Estadística", creditos: 4, id: "estadistica", prerrequisitos: ["algebra1", "calculo2"], abre: ["control-calidad"] },
  { nombre: "Computación y Programación", creditos: 3, id: "computacion", prerrequisitos: ["intro-matematica", "intro-quimica", "intro-fisica", "algebra1", "calculo1", "quimica1", "fisica1", "algebra2", "calculo2", "quimica2", "fisica2"], abre: ["dibujo"] },
  { nombre: "Química Analítica e Instrumental", creditos: 4, id: "quimica-analitica", prerrequisitos: ["quimica2"], abre: [] },
  { nombre: "Complemento al Cálculo", creditos: 4, id: "complemento-calculo", prerrequisitos: ["calculo3"], abre: [] },
  { nombre: "Mecánica", creditos: 4, id: "mecanica", prerrequisitos: ["fisica2", "calculo3"], abre: ["mecanica-fluidos", "mecanica-materiales"] },
  { nombre: "Cálculo Numérico", creditos: 4, id: "calculo-numerico", prerrequisitos: ["calculo3"], abre: [] },
  { nombre: "Dibujo Asistido por Computador", creditos: 3, id: "dibujo", prerrequisitos: ["computacion"], abre: [] },
  { nombre: "Introducción a la Ingeniería de Materiales", creditos: 2, id: "intro-materiales", prerrequisitos: [], abre: [] },
  { nombre: "Química de Materiales", creditos: 3, id: "quimica-materiales", prerrequisitos: ["quimica2"], abre: ["ciencia-materiales", "termodinamica"] },
  { nombre: "Ciencia de Materiales", creditos: 4, id: "ciencia-materiales", prerrequisitos: ["quimica-materiales"], abre: ["metalurgia-fisica"] },
  { nombre: "Mecánica de Fluidos", creditos: 4, id: "mecanica-fluidos", prerrequisitos: ["mecanica"], abre: ["transferencia-calor"] },
  { nombre: "Electromagnetismo Ingenieril", creditos: 4, id: "electromagnetismo", prerrequisitos: ["fisica2", "calculo3", "edo"], abre: ["circuitos"] },
  { nombre: "Termodinámica de Materiales", creditos: 4, id: "termodinamica", prerrequisitos: ["quimica-materiales"], abre: ["corrosion"] },
  { nombre: "Inglés Técnico", creditos: 3, id: "ingles1", prerrequisitos: [], abre: ["ingles2"] },
  { nombre: "Metalurgia Física", creditos: 4, id: "metalurgia-fisica", prerrequisitos: ["ciencia-materiales"], abre: ["martensita", "plasticidad", "ferrosos", "corrosion"] },
  { nombre: "Circuitos y Máquinas Eléctricas", creditos: 4, id: "circuitos", prerrequisitos: ["electromagnetismo"], abre: [] },
  { nombre: "Transferencia de Calor", creditos: 4, id: "transferencia-calor", prerrequisitos: ["mecanica-fluidos"], abre: [] },
  { nombre: "Martensita", creditos: 4, id: "martensita", prerrequisitos: ["metalurgia-fisica"], abre: ["fusion", "pulvimetalurgia"] },
  { nombre: "Fundamentos de la Deformación Plástica", creditos: 4, id: "plasticidad", prerrequisitos: ["metalurgia-fisica"], abre: ["caracterizacion", "conformado-metales"] },
  { nombre: "Metalurgia Ferrosa y No Ferrosa", creditos: 4, id: "ferrosos", prerrequisitos: ["metalurgia-fisica"], abre: [] },
  { nombre: "Corrosión", creditos: 4, id: "corrosion", prerrequisitos: ["termodinamica", "metalurgia-fisica"], abre: ["proteccion"] },
  { nombre: "Fusión de Metales", creditos: 4, id: "fusion", prerrequisitos: ["martensita"], abre: ["recubrimientos"] },
  { nombre: "Pulvimetalurgia", creditos: 3, id: "pulvimetalurgia", prerrequisitos: ["martensita"], abre: [] },
  { nombre: "Caracterización de Materiales", creditos: 4, id: "caracterizacion", prerrequisitos: ["plasticidad"], abre: ["fallas", "conformado-compuestos", "seleccion", "recubrimientos"] },
  { nombre: "Protección de Materiales", creditos: 3, id: "proteccion", prerrequisitos: ["corrosion"], abre: [] }
];

let aprobados = new Set();

function renderRamos() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";
  ramos.forEach((ramo) => {
    const boton = document.createElement("button");
    boton.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;
    boton.id = ramo.id;
    boton.className = "ramo lila";

    boton.addEventListener("click", () => toggleRamo(ramo, boton));
    container.appendChild(boton);
  });
  actualizarDesbloqueos();
}

function toggleRamo(ramo, boton) {
  if (aprobados.has(ramo.id)) {
    aprobados.delete(ramo.id);
    boton.className = "ramo lila";
  } else {
    aprobados.add(ramo.id);
    boton.className = "ramo orquidea";
  }
  actualizarDesbloqueos();
  actualizarContador();
}

function actualizarDesbloqueos() {
  ramos.forEach((ramo) => {
    if (!aprobados.has(ramo.id)) {
      const desbloqueado = ramo.prerrequisitos.every((id) => aprobados.has(id));
      const boton = document.getElementById(ramo.id);
      if (desbloqueado && !boton.classList.contains("orquidea")) {
        boton.className = "ramo morado";
      } else if (!aprobados.has(ramo.id)) {
        boton.className = "ramo lila";
      }
    }
  });
}

function actualizarContador() {
  let suma = 0;
  ramos.forEach((r) => {
    if (aprobados.has(r.id)) suma += r.creditos;
  });
  document.getElementById("creditos-contador").textContent = `Créditos aprobados: ${suma}`;
}

window.onload = renderRamos;
