const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile("db/data.json", data, err => {
    if (err) {
      throw new Error("No se pudo guardar");
    } else {
      console.log("Lista guardada");
    }
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (e) {
    listadoPorHacer = [];
  }
};

const crear = descripcion => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actualizar = (desc, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === desc);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = desc => {
  cargarDB();
  let tam = listadoPorHacer.length;
  let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== desc);
  if(listadoPorHacer !== nuevoListado) {
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
