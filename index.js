const readline = require('readline');

const tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTask() {
  rl.question('Ingrese el indicador de la tarea: ', (indicator) => {
    rl.question('Ingrese la descripción de la tarea: ', (description) => {
      tasks.push({
        indicator,
        description,
        completed: false
      });
      console.log('Tarea agregada correctamente.');
      showMenu();
    });
  });
}

function deleteTask() {
  rl.question('Ingrese el indicador de la tarea a eliminar: ', (indicator) => {
    const index = tasks.findIndex(task => task.indicator === indicator);
    if (index !== -1) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada correctamente.');
    } else {
      console.log('No se encontró la tarea con el indicador especificado.');
    }
    showMenu();
  });
}

function completeTask() {
  rl.question('Ingrese el indicador de la tarea a completar: ', (indicator) => {
    const task = tasks.find(task => task.indicator === indicator);
    if (task) {
      task.completed = true;
      console.log('Tarea completada correctamente.');
    } else {
      console.log('No se encontró la tarea con el indicador especificado.');
    }
    showMenu();
  });
}

function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach(task => {
    console.log(`Indicador: ${task.indicator}`);
    console.log(`Descripción: ${task.description}`);
    console.log(`Estado: ${task.completed ? 'Completada' : 'No completada'}`);
    console.log('------------------------');
  });
  showMenu();
}

function showMenu() {
  console.log('Seleccione una opción:');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  rl.question('Opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        showTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida. Por favor, seleccione una opción válida.');
        showMenu();
        break;
    }
  });
}

showMenu();
