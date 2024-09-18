// Al cargar la página, queremos verificar si ya hay tareas guardadas en el localStorage
// Si es así, las cargamos en la lista. Esta función inicializa nuestra lista de tareas.
function loadTasksFromLocalStorage() {
    // Intentamos obtener las tareas guardadas como un string JSON
    
    // Recorremos las tareas cargadas y las agregamos visualmente al <ul>
}

// Esta función añade la tarea al DOM, es decir, la muestra en la lista de tareas en pantalla
function addTaskToDOM(taskText) {
    // Creamos un nuevo elemento <li> que contendrá el texto de la tarea

    // Agregamos un botón de "eliminar" a cada tarea, para que el usuario pueda borrarla
        // Al hacer clic en "eliminar", quitamos la tarea del DOM y del localStorage
        // Elimina la tarea de la interfaz

    // Agregamos el botón de eliminar al <li> de la tarea

    // Finalmente, agregamos la tarea a la lista visual en el <ul>
}

// Esta función se encarga de guardar las tareas en el localStorage
function saveTaskToLocalStorage(taskText) {
    // Obtenemos las tareas guardadas en localStorage o creamos un array vacío si no hay tareas
    
    // Añadimos la nueva tarea al array
    
    // Guardamos el array actualizado en el localStorage
}

// Esta función borra una tarea específica del localStorage
function removeTask(taskText) {
    // Cargamos las tareas del localStorage

    // Filtramos el array para remover la tarea que coincide con el texto proporcionado

    // Guardamos el array actualizado sin la tarea eliminada
}

// Manejamos el clic del botón de agregar tarea

document.getElementById('addButton').addEventListener('click', (e) => {
    // Obtenemos el valor ingresado por el usuario
    const inputValor = document.getElementById("taskInput").value; // toma el valor de el input y lo almacena en una constante

    // Verificamos si el campo no está vacío
    if ( inputValor == '' || inputValor == ' '){ 
        console.log('Esta vacio o tiene un espacio');
        return;
    }
    // Agregamos la tarea al DOM y la guardamos en el localStorage
        //Agregar tarea al DOM
        // li
        const nuevoItemList = document.createElement('li');


        // Evento para eliminar la tarea/* 
        nuevoItemList.addEventListener('click', function(e){ // Al hacer click en la tarea se elimina.
        nuevoItemList.classList.toggle('completada')
        }) 

        nuevoItemList.textContent = inputValor;

        const lista = document.getElementById('taskList'); 
        lista.appendChild(nuevoItemList);

        //Guardar en LocalStorage

    // Limpiamos el campo de entrada después de agregar la tarea
    document.getElementById("taskInput").value = '' 
});

//Boton para remover tareas

document.getElementById('removeButton').addEventListener('click',(e) =>{
    const lista = document.getElementById('taskList').childNodes; 
    for (let i = lista.length -1; i >= 0 ; i--) { //Se recorre al revez porque con los NodoList se van actualizando a medidas que se borra
        console.log(lista[i].classList);
        if ( lista[i].className == 'completada'){
            lista[i].remove();
        }
        
    }

});

// Llamamos a esta función cuando la página se carga para inicializar la lista con tareas guardadas
loadTasksFromLocalStorage();