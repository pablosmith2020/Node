// 
function UsuarioFunction(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    this.getFullName = () => `${this.nombre} ${this.apellido}`;
    this.addMascotas = (nombre) => this.mascotas.push(nombre);
    this.getMascotas = () => this.mascotas.length;
    this.addBooks = (nombre, autor) => libros.push({
        nombre,
        autor
    })
    this.getBooks = () => this.libros.map(e => e.nombre);
}

class UsuarioClass {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName = () => `${this.nombre} ${this.apellido}`;

    addMascotas = (nombre) => this.mascotas.push(nombre);
    getMascotas = () => this.mascotas.length;
    addBooks = (nombre, autor) => libros.push({
        nombre,
        autor
    });
    getBooks = () => this.libros.map(e => e.nombre);


}

// Datos
let libros = [{
        nombre: 'libro-1',
        autor: 'autor-1',
    },
    {
        nombre: 'libro-2',
        autor: 'autor-2',
    },
]
let mascotas = ['Perro', 'Gato', 'Tortuga']
let Usuario1 = new UsuarioFunction('Pablo', 'Smith', libros, mascotas)

// Carga de Datos nuevos Metodos solicitados
console.log('Funcion Constructora ')
Usuario1.addMascotas('Pajaro')
Usuario1.addBooks('Libro-3', 'Autor-3')

// Visualizacion del Resultado con clase
console.log(Usuario1.getFullName())
console.log(Usuario1.getMascotas())
console.log(Usuario1.getBooks())

console.log('Funcion de Clases ')
// Visualizacion del Resultado con clase
let Usuario2= new UsuarioClass('Pablo', 'Smith', libros, mascotas)
console.log(Usuario2.getFullName())
console.log(Usuario2.getMascotas())
console.log(Usuario2.getBooks())