class Cliente {
    nombreapellido;
    numero;
    direccion;
    distrito;
    historial;

    constructor(nombreapellido, numero, direccion, distrito, historial) {
        this.nombreapellido = nombreapellido;
        this.numero = numero;
        this.direccion = direccion;
        this.distrito = distrito;
        this.historial = historial;

    }

    RefreshHistorial = (pedido) => {
        this.historial = this.historial + pedido;
    }
}