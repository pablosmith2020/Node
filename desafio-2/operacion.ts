async function Desafio2(operation: string, value1: number, value2: number) {
    switch (operation) {
      case "sumar":
        let { Sumar } = await import("./operaciones");
        let calcularSuma = new Sumar(value1, value2);
        return calcularSuma.Resultado();
        break;
  
      case "restar":
        let { Restar } = await import("./operaciones");
        let calcularResta = new Restar(value1, value2);
        return calcularResta.Resultado();
        break;
  
        break;
  
      default:
        break;
    }
  
  }
  
  Desafio2("sumar", 2, 7).then((e) =>
    console.log(`El resultado de la Suma es:  ${e}`)
  ).catch((e)=> console.log("Error Calculando la Suma"));
  
  
  Desafio2("restar", 2, 7).then((e) =>
    console.log(`El resultado de la Suma es:  ${e}`)
  ).catch((e)=> console.log("Error Calculando la Suma"));
  