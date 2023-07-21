const BOTON = document.getElementById("guess-button")
const ASIGNATURA = document.getElementById("materia")
const PUNTAJE = document.getElementById("puntuaciones") 
const GRID = document.getElementById("grid"); 

window.addEventListener('load',()=>{
    const DATOS = JSON.parse(localStorage.getItem("puntuacion") || "[]")
    for (const dato of DATOS) {
        generarRow(dato.materia,dato.puntuacion)
    }
})
BOTON.addEventListener("click", ()=>{    
    let materia = ASIGNATURA.value 
    let puntuacion = PUNTAJE.value
    if (materia && puntuacion){
        const STORAGE= JSON.parse(localStorage.getItem("puntuacion") || "[]")
        STORAGE.push({materia,puntuacion})
        localStorage.setItem("puntuacion",JSON.stringify(STORAGE))
        generarRow (materia, puntuacion)

        ASIGNATURA.value=''
        PUNTAJE.value=''
    }
}) 

function  generarRow (materia, puntuacion){
    const ROW = document.createElement("div")
    ROW.classList.add("row")
    //generar row
    const P = document.createElement('span')
    P.innerHTML = materia 
    const P1 = document.createElement('span')
    P1.innerHTML = puntuacion
    ROW.appendChild(P)
    ROW.appendChild(P1)
    GRID.appendChild(ROW)
}