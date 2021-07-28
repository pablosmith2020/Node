const finalizar = (mensaje) => {
  console.log(`Finalizo la  ${mensaje}`);
};
//--------------------------------------------------------------------
// Funcion  con LLamada Recurrente------------------------------------
function MostrarLetras1(texto, i, time, callback) {
  //Valido el parametro opcional time
  if (typeof time === "undefined" || time === null) {
    time = 1000;
  }

  if (texto.length == i) {
    finalizar(
      `Finalizo Funcion Llamada Recurrente, cantindad de Palabras ${texto.length}`
    );
    return;
  }

  setTimeout(() => {
    console.log(texto[i]);
    MostrarLetras1(texto, i + 1, callback);
  }, time);
}

//--------------------------------------------------------------------
// Funcion con Promesa------------------------------------------------

const Promesa = (time) =>
  new Promise((resolv, reject) => {
    setTimeout(() => {
      resolv();
    }, 1000);
  });

async function MostrarLetras2(texto, time, callback) {
  //Valido el parametro opcional time
  if (typeof time === "undefined" || time === null) {
    time = 1000;
    console.log("Entre2");
  }

  for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
    await Promesa(time);
  }
  callback(
    `Finalizo Funcion Async Wait, cantindad de Palabras ${texto.length}`
  );
}
//--------------------------------------------------------------------
// Funcion con SetInterval----------------------------------------------

function MostrarLetras3(texto, time, callback) {
  //Valido el parametro opcional time
  if (typeof time === "undefined" || time === null) {
    time = 1000;
  }
  let i = 0;
  let int = setInterval(() => {
    if (texto.length == i) {
      callback(
        `Finalizo Funcion SetIntervalt, cantindad de Palabras ${texto.length}`
      );
      clearInterval(int);
    } else {
      console.log(texto[i]);
      i++;
    }
  }, time);
}

//Ejecutar cada una de las funciones  seteando el tercer parametro  
// en Null o ingresando un valor en milisegundos
//

/*
// Ejecucion 1 de Funciones
MostrarLetras1("pablo", 0,  null, function (e) {
  console.log(e);
});
*/
/*
//Ejecucion 2 de Promesas
MostrarLetras2("pablo", null, finalizar);
*/

MostrarLetras3("Pablo",1000, finalizar)

