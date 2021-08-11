const express = require("express");
const moment = require("moment");
const fs = require("fs");

let fecha1 = moment([2021, 8, 21]);
let fecha2 = moment([2018, 2, 10]);
let resultado = fecha1.diff(fecha2, "days");

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = express();
const server = app.listen(8080, () => {});

app.get("/items", (req, res) => {
  fs.promises
    .readFile("./productos.txt")
    .then((data) => data.toString("utf-8"))
    .then((datos) => {
      res.json(JSON.parse(datos));
    });
});

app.get("/item-random", (req, res) => {
  fs.promises
    .readFile("./productos.txt")
    .then((data) => data.toString("utf-8"))
    .then((datos) => {
      const json = JSON.parse(datos);

      res.json({ item: json[random(0, json.length - 1)] });
    });
});

app.get("/visitas", (req, res) => {
  let json = {};
  let datos = {};

  if (fs.existsSync("./visitas.txt")) {
    fs.promises
      .readFile("./visitas.txt")
      .then((data) => {
        // Sumo la nueva visita
        json = JSON.parse(data.toString("utf-8"));
        json.cantidad_visitas = json.cantidad_visitas + 1;

        fs.promises
          .writeFile("./visitas.txt", JSON.stringify(json, null, "\t"))
          .then((_) => {});
        console.log(json);
      })
      .catch((err) => {
        throw new Error(err);
      });
  } else {
    // En caso que no exista creo el archivo con el valor en 1

    fs.promises.writeFile(
      "./visitas.txt",
      JSON.stringify({ cantidad_visitas: 1 })
    );

    console.log("Archivo NO Existe, se creo un Nuevo Archivo.....");
  }

  fs.promises
    .readFile("./visitas.txt")
    .then((data) => data.toString("utf-8"))
    .then((datos) => {
      res.json(JSON.parse(datos));
    });
});
