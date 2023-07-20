const BOTON = document.getElementById("guess-button")
const ASIGNATURA = document.getElementById("materia")
const PUNTAJE = document.getElementById("puntuaciones") 
const GRID = document.getElementById("grid"); 

BOTON.addEventListener("click", ()=>{
    const ROW = document.createElement("div")
    let materia = ASIGNATURA.value 
    let puntuacion = PUNTAJE.value
    console.log(materia,puntuacion)
    const P = document.createElement('span')
    P.innerHTML = `${materia} ` 
    const P1 = document.createElement('span')
    P1.innerHTML = puntuacion
    ROW.appendChild(P)
    ROW.appendChild(P1)
    GRID.appendChild(ROW)
}) 
