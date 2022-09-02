
//funciones
function tareasActivas(tareaOn, tarea) {
    if (tareaOn == true) {
        alert('tarea activa')
    }
    else {
        alert('no entra')
    }
}
function menosContador() {
    if (indexNum < 1) {
        indexNum == 0;
    }
    else {
        h3Task.textContent = `${indexNum -= 1} tasks remaining`
    }
}
function eliminarButton(sect) {
    let eliminar = sect.parentNode.parentNode
    eliminar.getAttribute("dataId");
    eliminar.remove()
    menosContador();
}

function imprimirHtml(nombreTarea) {
    //section3
    const section = document.getElementById("section-3");
    // div comtendor 
    const divContainer = document.createElement("div");
    divContainer.className = "hola"
    //div contendor check y tarea 
    const divContainerTareaDiv = document.createElement("div");
    divContainerTareaDiv.className = "div-contai-tarea-div"

    // input tipo check 
    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox"
    inputCheck.className = "input-checkBox";

    inputCheck.addEventListener("change", (e) => {
        let gr = inputCheck.checked;
        if (gr) {
            menosContador()
            divContainer.style = "display: none;"
        }
        if (gr == false) {
            h3Task.textContent = `${indexNum += 1} tasks remaining`
        }

    }, false)

    //h3 tarea
    let h3Tarea = document.createElement("h3");
    h3Tarea.className = "h3Tarea";
    h3Tarea.textContent = nombreTarea;


    // div contenedor de los botones 
    const divContainerBotones = document.createElement("div");
    divContainerBotones.className = "uwu";

    //boton edit y delete
    let botonEdit = document.createElement("button");
    botonEdit.textContent = "Edit";
    botonEdit.className = "button-edit";
    botonEdit.id = "editar"
    //complete
    let botonTareaCompl = document.getElementById("tarea-completada")
    botonTareaCompl.addEventListener('click', (e => {
        divContainer.style = "display: block;"
    }))
   


    let butonDelete = document.createElement("button");
    butonDelete.textContent = "Delete";
    butonDelete.className = "button-delete";
    butonDelete.addEventListener('click', (e) => {
        eliminarButton(butonDelete);
    })


    //inserciones 
    section.insertAdjacentElement("beforeend", divContainer);
    divContainer.insertAdjacentElement("beforeend", divContainerTareaDiv);
    divContainerTareaDiv.insertAdjacentElement("afterbegin", h3Tarea);
    divContainerTareaDiv.insertAdjacentElement("afterbegin", inputCheck);
    divContainer.insertAdjacentElement("beforeend", divContainerBotones);
    divContainerBotones.insertAdjacentElement("afterbegin", butonDelete);
    divContainerBotones.insertAdjacentElement("afterbegin", botonEdit);

}



let formulario = document.getElementById("formulario");
let h3Task = document.getElementById("h3-Task");
let indexNum = 0;


formulario.addEventListener("submit", envio);
function envio(e) {
    h3Task.textContent = `${indexNum += 1} tasks remaining`
    let tarea = document.getElementById("tarea").value;
    formulario.reset();
    e.preventDefault();
    imprimirHtml(tarea);
}

// formulario.addEventListener('click', (e)=>{
//     e.preventDefault();
// })