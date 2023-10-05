class Producto {
    nombre;
    contenido;
    marca;
    precio;
    stock;

    constructor(nombre, contenido, marca, precio, stock) {
        this.nombre = nombre;
        this.contenido = contenido;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;

    }

    compra = (cantidad) => {
        this.stock = this.stock - cantidad;
    }

    validacionstock = (cantidad) => {
        if (this.stock < cantidad) {
            alert(`Solo contamos con ${this.stock} unidades`);
            return true 
        }
    }        

}


