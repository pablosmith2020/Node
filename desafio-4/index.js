let cadena = document.querySelector("#inp1");
let visualizar = document.querySelector("#label1");

// Declaro el Observador
const { Observable, fromEvent, throwError, of } = rxjs;
const { filter, map, mergeMap, retry } = rxjs.operators;

// Declaro el Evento para utilizar en el Observable
const observable = fromEvent(inp1, "keyup").pipe(
  mergeMap((e) => {
    if (e.target.value == "error") {
      return throwError("Ingreso Error por Teclado");
    } else if (e.target.value == "complete") {
      return throwError("Ingreso Complete por Teclado");
    } else {
      visualizar.innerHTML = e.target.value.split("").reverse().join("");
      return '';
    }

    //  SetTimeOut manipulo el tiempo de respuesta
    const interval = setTimeout(() => {
      observable.complete();
      console.log("Finalizo la Suscripcion");
      cadena.disabled = true;
      cadena.innerHTML = "";
      visualizar.innerHTML = "";
      observable.complete();
    }, 2000); //30000

    return clearInterval.unsubscribe()
  })
);

//Declaro el Observable para soncumir al  Observador
observable.subscribe({
  error(err) {
    console.log(err);
  },
});
