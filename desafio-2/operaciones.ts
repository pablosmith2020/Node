export class Sumar {
    private result: number = 0;
    private val1: number = 0;
    private val2: number = 0;
  
    constructor(num1: number, num2: number) {
      this.val1 = num1;
      this.val2 = num2;
    }
  
    public Resultado() {
      this.result = this.val1 + this.val2;
      return this.result;
    }
  }
  export class Restar {
    private result: number = 0;
    private val1: number = 0;
    private val2: number = 0;
  
    constructor(num1: number, num2: number) {
      this.val1 = num1;
      this.val2 = num2;
    }
  
    public Resultado() {
      this.result = this.val1 - this.val2;
      return this.result;
    }
  }
  
