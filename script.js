const malla = [
  {
    titulo: "Primer Año – Trimestre 1",
    ramos: [
      { nombre: "Introducción a la Matemática Universitaria", creditos: 4 },
      { nombre: "Introducción a la Química Universitaria", creditos: 4 },
      { nombre: "Introducción a la Física Universitaria", creditos: 4 }
    ]
  },
  {
    titulo: "Primer Año – Trimestre 2",
    ramos: [
      { nombre: "Álgebra I", creditos: 5 },
      { nombre: "Cálculo I", creditos: 5 },
      { nombre: "Química General I", creditos: 5 },
      { nombre: "Física I", creditos: 5 }
    ]
  },
  {
    titulo: "Primer Año – Trimestre 3",
    ramos: [
      { nombre: "Álgebra II", creditos: 5 },
      { nombre: "Cálculo II", creditos: 5 },
      { nombre: "Química General II", creditos: 5 },
      { nombre: "Física II", creditos: 5 }
    ]
  },
  {
    titulo: "Segundo Año – Semestre 3",
    ramos: [
      { nombre: "Cálculo III", creditos: 5 },
      { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 5 },
      { nombre: "Estadística", creditos: 4 },
      { nombre: "Computación y Programación", creditos: 4 },
      { nombre: "Química Analítica e Instrumental", creditos: 5 }
    ]
  },
  {
    titulo: "Segundo Año – Semestre 4",
    ramos: [
      { nombre: "Complemento al Cálculo", creditos: 5 },
      { nombre: "Mecánica", creditos: 5 },
      { nombre: "Cálculo Numérico", creditos: 5 },
      { nombre: "Dibujo Asistido por Computador", creditos: 4 },
      { nombre: "Introducción a la Ingeniería de Materiales", creditos: 4 },
      { nombre: "Química de Materiales", creditos: 5 }
    ]
  }
];

let creditosAprobados = 0;

function crearMalla() {
  const container = document.getElementById('malla-container');
  malla.forEach(columna => {
    const columnaDiv = document.createElement('div');
    columnaDiv.className = 'malla-columna';

    const titulo = document.createElement('h2');
    titulo.textContent = columna.titulo;
    columnaDiv.appendChild(titulo);

    columna.ramos.forEach(ramo => {
      const ramoDiv = document.createElement('div');
      ramoDiv.className = 'ramo';
      ramoDiv.textContent = ramo.nombre;
      ramoDiv.dataset.creditos = ramo.creditos;

      ramoDiv.addEventListener('click', () => {
        if (ramoDiv.classList.contains('aprobado')) {
          ramoDiv.classList.remove('aprobado');
          creditosAprobados -= parseInt(ramoDiv.dataset.creditos);
        } else {
          ramoDiv.classList.add('aprobado');
          creditosAprobados += parseInt(ramoDiv.dataset.creditos);
        }
        actualizarCreditos();
      });

      columnaDiv.appendChild(ramoDiv);
    });

    container.appendChild(columnaDiv);
  });
}

function actualizarCreditos() {
  const contador = document.getElementById('creditos-contador');
  contador.textContent = `Créditos aprobados: ${creditosAprobados}`;
}

document.addEventListener('DOMContentLoaded', crearMalla);
