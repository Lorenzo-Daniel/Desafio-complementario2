const productosSeleccionados = [];

const productos = [
    {nombre: "Producto -1", precio: 150 },
    {nombre: "Producto -2", precio: 180 },
    {nombre: "Producto -3", precio: 120 },
    {nombre: "Producto -4", precio: 1600 },
    {nombre: "Producto -5", precio: 450 },
    {nombre: "Producto -6", precio: 600 },
    {nombre: "Producto -7", precio: 80 }
];

class Producto {
    constructor(objeto) {
        this.nombre = objeto.nombre;
        this.precio = objeto.precio;
        this.iva = 21;
    }

    aplicarIva() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}