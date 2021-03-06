    const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripci[on de la tarea por hacer'
    };

    const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    };

    // Importamos el yargs
    const argv = require('yargs')
        .command('crear', 'Mostrar todas las tareas por hacer', {
            descripcion
        })
        .command('actualizar', 'Actualiza el estado completado de una tarea.', {
            descripcion,
            completado
        })
        .command('borrar', 'Borra una tarea.', {
            descripcion
        })
        .help()
        .argv;

    module.exports = {
        argv
    }