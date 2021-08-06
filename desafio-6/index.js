const { Console } = require("console");
const fs = require("fs");

class Archivo {
  constructor(file) {
    this.file = file;
  }

  saveProduct(prod) {
    // Verifico que exista el archivo
    if (fs.existsSync(this.file)) {
      fs.promises
        .readFile(this.file)
        .then((data) => {
          // Calculo el nuevo ID del Producto y lo agrego al Array de Objetos
          const json = JSON.parse(data.toString("utf-8"));
          json.push({ ...producto, id: json.length + 1 });

          fs.promises
            .writeFile(this.file, JSON.stringify(json, null, "\t"))
            .then((_) => {
              console.log("Agregado con Exito ....");
            });
          //console.log(json);
        })
        .catch((er) => {
          throw new Error(err);
        });
    } else {
      // En caso que no exista creo el archivo con un Array vacio
      // Genero el primer ID del primer producto que creo

      fs.promises.writeFile(
        this.file,
        JSON.stringify([{ ...producto, id: 0 }])
      );

      console.log("Archivo NO Existe, se creo un Nuevo Archivo.....");
    }
  }

  async saveProductAsync(prod) {
    try {
      const data = await fs.promises.readFile(this.file);
      const json = JSON.parse(data.toString("utf-8"));
      json.push({ ...producto, id: json.length + 1 });
      try {
        await fs.promises.writeFile(
          this.file,
          JSON.stringify(json, null, "\t")
        );
      } catch (err) {
        throw new Error(err);
      }
      //console.log(json);
    } catch (error) {
      console.log([]);
      try {
        await fs.promises.writeFile(
          this.file,
          JSON.stringify([{ ...producto, id: 0 }])
        );
      } catch (err) {
        throw new Error(err);
      }

      console.log("Archivo NO Existe, se creo un Nuevo Archivo.....");
    }
  }
  // Metodod Guardar solicitado en el Desafio
  readFile(file) {
    try {
      fs.promises.readFile(file, "utf-8");
      const productos = require("./productos.json");
      console.log(productos);
    } catch (error) {
      console.log("No se puede Leer el Archivo ya que no existe!!");
    }
  }

  // Metodod  solicitado en el Desafio - Borra el Archivo
  deletFile(file) {
    fs.unlink(file, (error) => {
      if (error) {
        console.log("Error al Eliminar el Archivo o es Inexistente");
      } else {
        console.log("Archivo Eliminado");
      }
    });
  }
}

const file = new Archivo("./productos.json");
const producto = {
  id: 0,
  title: "Fideos",
  price: 56.7,
  thumbnail: "URL1",
};

// Metodod  solicitado en el Desafio - Guarda la Informacion-
file.saveProductAsync(producto);

// Metodod  solicitado en el Desafio - ELimina cuando acumula 10 Objetos dentro de array
if (fs.existsSync("./productos.json") === true) {
  file.readFile("./productos.json");

  const data = fs.readFileSync("./productos.json");
  const json = JSON.parse(data.toString("utf-8"));

  if (json.length === 10) {
    try {
      file.deletFile("./productos.json");
      console.log("Se elimino el Archivo por llegar a 10 Objetos del Aray");
    } catch (error) {
      throw new Error(err);
      console.log("No se pudo Borrar el Archivo por el siguiente error: ", err);
    }
  }
} else {
  console.log("No se puede Leer el Archivo ya que no existe!!");
}
