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
document.getElementById('addButton').addEventListener('click', () => {
    // Obtenemos el valor ingresado por el usuario

    // Verificamos si el campo no está vacío
        // Agregamos la tarea al DOM y la guardamos en el localStorage
        // Limpiamos el campo de entrada después de agregar la tarea
});

// Llamamos a esta función cuando la página se carga para inicializar la lista con tareas guardadas
loadTasksFromLocalStorage();