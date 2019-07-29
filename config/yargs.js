// requires
const opts = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "Descripción de una tarea por hacer"
  }
};

const opts2 = {
  completado: {
    alias: "c",
    default: true,
    desc: "Cambiar el estatus de la tarea"
  }
};

const argv = require("yargs")
  .command("crear", "Crear un elemento por hacer", opts)
  .command("actualizar", "Actualiza el estado de una tarea", {
    ...opts,
    ...opts2
  })
  .command("borrar", "Borrar un elemento por hacer", opts)
  .help().argv;

module.exports = {
  argv
};
