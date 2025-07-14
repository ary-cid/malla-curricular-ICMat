const ramos = [
  {
    anio: "1° AÑO",
    periodos: [
      {
        nombre: "Trimestre 1",
        ramos: [
          { nombre: "Introducción a la Matemática Universitaria", creditos: 6, abre: ["Algebra I", "Cálculo I"] },
          { nombre: "Introducción a la Química Universitaria", creditos: 3, abre: ["Química General I"] },
          { nombre: "Introducción a la Física Universitaria", creditos: 3, abre: ["Física I"] }
        ]
      },
      {
        nombre: "Trimestre 2",
        ramos: [
          { nombre: "Algebra I", creditos: 3, abre: ["Algebra II", "Cálculo III", "Estadística"] },
          { nombre: "Cálculo I", creditos: 3, abre: ["Cálculo II"] },
          { nombre: "Química General I", creditos: 3, abre: ["Química General II"] },
          { nombre: "Física I", creditos: 3, abre: ["Física II"] }
        ]
      },
      {
        nombre: "Trimestre 3",
        ramos: [
          { nombre: "Algebra II", creditos: 3, abre: ["Cálculo III", "Ecuaciones Diferenciales Ordinarias"] },
          { nombre: "Cálculo II", creditos: 3, abre: ["Cálculo III", "Ecuaciones Diferenciales Ordinarias", "Estadística"] },
          { nombre: "Química General II", creditos: 3, abre: ["Química Analítica e Instrumental", "Química de Materiales"] },
          { nombre: "Física II", creditos: 3, abre: ["Mecánica", "Electromagnetismo Ingenieril"] }
        ]
      }
    ]
  }
  // Aquí irán los siguientes años...
];

let creditosAprobados = 0;
const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla-container");
  ramos.forEach(anio => {
    const bloqueAnio = document.createElement("div");
    bloqueAnio.classList.add("bloque-anio");

    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = anio.anio;
    bloqueAnio.appendChild(tituloAnio);

    anio.periodos.forEach(periodo => {
      const bloquePeriodo = document.createElement("div");
      bloquePeriodo.classList.add("bloque-periodo");

      const tituloPeriodo = document.createElement("h3");
      tituloPeriodo.textContent = periodo.nombre;
      bloquePeriodo.appendChild(tituloPeriodo);

      periodo.ramos.forEach(ramo => {
        const btn = document.createElement("button");
        btn.textContent = `${ramo.nombre} (${ramo.creditos} cr.)`;
        btn.classList.add("ramo", "no-aprobado");
        btn.dataset.nombre = ramo.nombre;
        btn.dataset.creditos = ramo.creditos;

        btn.addEventListener("click", () => toggleRamo(btn, ramo));
        bloquePeriodo.appendChild(btn);
      });

      bloqueAnio.appendChild(bloquePeriodo);
    });

    container.appendChild(bloqueAnio);
  });
}

function toggleRamo(boton, ramo) {
  const nombre = ramo.nombre;
  const creditos = parseInt(ramo.creditos);

  if (aprobados.has(nombre)) {
    aprobados.delete(nombre);
    creditosAprobados -= creditos;
    boton.classList.remove("aprobado");
    boton.classList.add("no-aprobado");

    if (ramo.abre) {
      ramo.abre.forEach(nombreAbierto => {
        document.querySelectorAll(`[data-nombre='${nombreAbierto}']`).forEach(btn => {
          if (!aprobados.has(nombreAbierto)) {
            btn.classList.remove("desbloqueado");
            btn.classList.add("no-aprobado");
          }
        });
      });
    }

  } else {
    aprobados.add(nombre);
    creditosAprobados += creditos;
    boton.classList.remove("no-aprobado");
    boton.classList.add("aprobado");

    if (ramo.abre) {
      ramo.abre.forEach(nombreAbierto => {
        document.querySelectorAll(`[data-nombre='${nombreAbierto}']`).forEach(btn => {
          if (!aprobados.has(nombreAbierto)) {
            btn.classList.remove("no-aprobado");
            btn.classList.add("desbloqueado");
          }
        });
      });
    }
  }

  actualizarContador();
}

function actualizarContador() {
  document.getElementById("creditos-contador").textContent = `Créditos aprobados: ${creditosAprobados}`;
}

crearMalla();
