class Item {
    producto;
    cantidad;

    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }


    promociones = (cantidad) => {
        if(cantidad<3){
            return 1.00
        }else if (cantidad>=3 && cantidad <5){
            alert("Felicitaciones, tienes un descuento de 10%");
            return 0.90
        }else if (cantidad>=5 && cantidad <10){
            alert("Felicitaciones, tienes un descuento de 15%");
            return 0.85
        }else if (cantidad>=10){
            alert("Felicitaciones, tienes un descuento de 20%");
            return 0.80
        }

    }
}
    
