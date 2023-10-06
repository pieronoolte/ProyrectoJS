
// VARIABLES
//VARIABLES GENERALES
var cliente = {};
let TextoLista = "";
let TextoMedios = "";
let TiempoEntrega;
let llegada;
let promocion = 0.00;
let ListaCategoria;
//PROMT
let nombre;
let numero;
let direccion;
let distrito;
let MediosDePago;
let TextoCambio;
let categoria;
let cantidad;
//CONFIRM
let PermisoDatos;
let productoConsulta;
let ConfirmacionDatos;
let ConfirmacionMonto;
let OtroProducto;
//ACUMULADORES
let j = 1;
let suma = 0;
let descuento = 0;
//ARRAYS
let carrito = [];
let productos = [];
let clientes = [];

// BASE DE DATOS DE PRODUCTOS
productos.push(new Producto("Ron", 750, "El abuelo", 32.00, 24));
productos.push(new Producto("Ron", 750, "Zacapa", 42.00, 20));
productos.push(new Producto("Ron", 750, "Flor de caña", 34.00, 22));
productos.push(new Producto("Ron", 1000, "Zacapa", 60.00, 30));
productos.push(new Producto("Ron", 1500, "Flor de caña", 62.00, 18));
productos.push(new Producto("Ron", 2000, "Barcelo", 82.00, 14));
productos.push(new Producto("Whisky", 750, "JW Red label", 22.00, 24));
productos.push(new Producto("Whisky", 750, "JW Black label", 22.00, 24));
productos.push(new Producto("Whisky", 750, "JW Double Black", 22.00, 24));
productos.push(new Producto("Whisky", 750, "JW Blue label", 22.00, 24));
productos.push(new Producto("Pisco", 1000, "Quebranta", 22.00, 24));
productos.push(new Producto("Pisco", 1000, "Quebranta", 22.00, 24));
productos.push(new Producto("Pisco", 1000, "Quebranta", 22.00, 24));
productos.push(new Producto("Pisco", 1000, "Quebranta", 22.00, 24));
productos.push(new Producto("Vino", 750, "Tabernero Tinto", 18.00, 32));
productos.push(new Producto("Vino", 750, "Tabernero Rosé", 22.00, 32));
productos.push(new Producto("Vino", 750, "Tabernero Malbec", 24.00, 32));
productos.push(new Producto("Vino", 750, "Tabernero Carmenere", 24.00, 32));
productos.push(new Producto("Gin", 700, "Beefeater", 62.00, 18));
productos.push(new Producto("Gin", 700, "Beefeater pink", 72.00, 12));
productos.push(new Producto("Gin", 700, "Beefeater London", 68.00, 22));
productos.push(new Producto("Bebida", 375, "Red Bull", 22.00, 50));
productos.push(new Producto("Bebida", 1500, "Schweppes", 22.00, 52));
productos.push(new Producto("Bebida", 3000, "Schweppes", 22.00, 52));
productos.push(new Producto("Bebida", 475, "Coca Cola", 22.00, 78));
productos.push(new Producto("Bebida", 475, "Coca Cola Zero", 22.00, 72))
productos.push(new Producto("Bebida", 3000, "Coca Cola", 22.00, 45));
productos.push(new Producto("Bebida", 1500, "Coca Cola", 22.00, 28));
productos.push(new Producto("Bebida", 3000, "Coca Cola Zero", 22.00, 39));
productos.push(new Producto("Hielo", 5000, "High air", 15.00, 24));
productos.push(new Producto("Hielo", 3000, "High air", 6.00, 24));
productos.push(new Producto("Hielo", 1000, "High air", 10.00, 24));


localStorage.setItem("Productos",JSON.stringify(productos));


// BASE DE DATOS DE PRODUCTOS POR FILTRO

let ProductoRon = productos.filter((el) => { return el.nombre == "Ron" });
let ProductoWhisky = productos.filter((el) => { return el.nombre == "Whisky" });
let ProductoPisco = productos.filter((el) => { return el.nombre == "Pisco" });
let ProductoVino = productos.filter((el) => { return el.nombre == "Vino" });
let ProductoGin = productos.filter((el) => { return el.nombre == "Gin" });
let ProductoBebidas = productos.filter((el) => { return el.nombre == "Bebida" || el.nombre == "Hielo" });


//BASE DE DATOS CLIENTES
clientes.push(new Cliente("Juan Matias", "903453342", "Calle Vargas 550", "Santa Isabel", 3));
clientes.push(new Cliente("Pedro Olarte", "903999342", "Av Proceres 120", "Santa Lucia", 1));
clientes.push(new Cliente("Maria Palacios", "902254875", "Calle Belaunde 123", "Esmeralda", 1));
clientes.push(new Cliente("Jose Hurtado", "902541157", "Calle Mallorca 180", "Baldelomar", 2));
clientes.push(new Cliente("Joaquin Milano", "925485742", "Calle Lucia 130", "Surco", 1));
clientes.push(new Cliente("Berenice Alameda", "955487521", "Calle 2 230", "Santa Isidro", 1));
clientes.push(new Cliente("Pedro Vallejo", "900153342", "Calle 1 230", "Santa Beatriz", 2));
clientes.push(new Cliente("Maria Pia Muñoz", "903887342", "Calle Madrid 234", "Santa Isabel", 1));

localStorage.setItem("Clientes",JSON.stringify(clientes));

const productoscard= document.querySelector(`#productos`);
productos.forEach((el,index) =>{
    if (el.contenido >= 1000) {
                    TextoLista = `${el.nombre} ${el.marca} ${(el.contenido / 1000).toFixed(2)}Lt \n`;
                   
                } else {
                    TextoLista = `${el.nombre} ${el.marca} ${el.contenido}ml \n`;
                
                }

productoscard.innerHTML = productoscard.innerHTML +`
<div class="productos__card">
        <h2>${TextoLista}</h2>
        <img src="#" alt="#">
        <h3>Precio: ${el.precio}</h3>
        <button>Agregar</button>
    </div>
`
});













// // FUNCIONES

// function NuevoCliente(cliente, array) {
//     for (const el of array) {
//         if (el.nombreapellido == nombre && el.numero == numero && el.direccion == direccion && el.distrito == distrito) {
//             j++;
//         }
//         // SE VALIDA DUPLICADO DE CLIENTES
//     }
//     if (j == 1) {
//         clientes.push(new Cliente(nombre, numero, direccion, distrito, 0));
//         alert("Felicitaciones!!" + "\n" + "Esta es tu primera compra, tienes un cupon de $20.00");
//         descuento = 20;
//         return true
//     }
// }

// function FechaEntrega() {
//     TiempoEntrega = Math.round(40 + 3 * (Math.random() * 12 - 6)); //TIEMPO ALEATORIO CON DISTR. ESTADISTICA NORMAL(40,3) MINUTOS
//     llegada = new Date()
//     if ((llegada.getMinutes() + TiempoEntrega) > 60) {
//         return (llegada.getHours() + 1) + ":" + (llegada.getMinutes() + TiempoEntrega - 60).toString().padStart(2, '0');
//     } else {
//         return llegada.getHours() + ":" + (llegada.getMinutes() + TiempoEntrega);
//     }
// }

// function DesarrolloTexto(item) {
//     TextoLista = ""
//     switch (item) {
//         case ConfirmacionDatos:
//             nombre = prompt("Ingresar su Nombre");
//             numero = prompt("Ingresar su Numero");
//             direccion = prompt("Ingresar su Dirección");
//             distrito = prompt("Ingresar su Distrito");
//             cliente = { nombre: nombre, numero: numero, direccion: direccion, distrito: distrito };
//             TextoLista = `Sus datos son correctos?\nNombre: ${cliente.nombre}\nNumero: ${cliente.numero}\nDireccion: ${cliente.direccion}\nDistrito: ${cliente.distrito}\nSi la respuesta es 'SI' Coloque 'Aceptar'`;
//             ConfirmacionDatos = confirm(TextoLista);
//             break;
//         case ListaCategoria:
//             TextoLista = "Tenemos las siguiente categorias:" + "\n" +
//                 "1: Ron" + "\n" +
//                 "2: Whisky" + "\n" +
//                 "3: Pisco" + "\n" +
//                 "4: Vino" + "\n" +
//                 "5: Gin" + "\n" +
//                 "6: Bebidas" + "\n" +
//                 "7: Todos los productos" + "\n"
//             categoria = +prompt(TextoLista);
//             break;
//         case carrito:
//             for (const el of carrito) {
//                 if (el.producto.contenido >= 1000) {
//                     TextoLista = TextoLista + `|Producto: ${el.producto.marca} ${(el.producto.contenido / 1000).toFixed(2)}Lt |Cantidad: ${el.cantidad}|Subtotal: $ ${(el.producto.precio * el.cantidad).toFixed(2)} \n`;
//                 } else {
//                     TextoLista = TextoLista + `|Producto: ${el.producto.marca} ${el.producto.contenido}ml |Cantidad: ${el.cantidad} |Subtotal: $ ${(el.producto.precio * el.cantidad).toFixed(2)} \n`;
//                 }
//             }
//             break;
//         case MediosDePago:
//             if (MediosDePago == 1) {
//                 TextoMedios = " darle cambio.";
//                 TextoCambio = +prompt("Con cuanto efectivo cancela?");
//                 ValidadorDatos(TextoCambio);
//             } else if (MediosDePago == 2) {
//                 TextoMedios = " cargar POS.";
//             } else {
//                 TextoMedios = " darle cambio y cargue POS.";
//                 TextoCambio = +prompt("Con cuanto efectivo cancela?");
//                 ValidadorDatos(TextoCambio);
//             }
            
//             TextoLista = "Le avisaremos al repartidor para" + TextoMedios + `\nHora de Llegada: ${FechaEntrega()}. \nRecuerda estar pediente de tu celular. \nCuando llegue el Repartidor, te llamará. \n\n Gracias por su compra! Estamos a tu servicio 24 horas`;
//             alert(TextoLista);
//             break;
//     }
// }

// function ValidadorDatos(item, array) {
//     switch (item) {
//         case PermisoDatos:
//             while (PermisoDatos == false) {
//                 PermisoDatos = confirm("Por favor colocar la opción 'Aceptar' para cotinuar con la compra");
//             }
//             break;
//         case ConfirmacionDatos:
//             while (ConfirmacionDatos == false) {
//                 alert("Por favor ingrese nuevamente sus datos");
//                 DesarrolloTexto(ConfirmacionDatos);
//             }
//             break;
//         case ListaCategoria:
//             while (categoria > 7 || isNaN(categoria) || categoria <= 0 || categoria % 1 != 0) {
//                 alert(`Ingrese la categoria adecuada \n *Ingresar un numero entero del 1 al 7`);
//                 DesarrolloTexto(ListaCategoria);
//             }
//             break;
//         case MediosDePago:
//             while (isNaN(MediosDePago)  || MediosDePago <=0 || MediosDePago % 1 != 0 || MediosDePago > 3) {
//                 alert("Ingrese una opción valida")
//                 MediosDePago = +prompt("Medios de pago: " + "\n" +
//                     "Opcion 1: Efectivo" + "\n" +
//                     "Opcion 2: Transferencia" + "\n" +
//                     "Opcion 3: Ambos");
//             }
//             break;
//         case productoConsulta:
//             while (productoConsulta > array.length || isNaN(productoConsulta) || productoConsulta <= 0 || productoConsulta % 1 != 0) {
//                 alert(`Ingrese la cantidad adecuada \n *Ingresar un numero entero del 1 al ${array.length}`);
//                 productoConsulta = parseInt(prompt(`${TextoLista} Que producto desea? \n *Elegir un producto según su número`));
//             }
//             break;
//         case cantidad:
//             while (isNaN(cantidad) || cantidad <= 0 || cantidad % 1 != 0 || array[productoConsulta - 1].validacionstock(cantidad) == true) {
//                 cantidad = parseInt(prompt(`Ingrese la cantidad \n *Ingresar un numero entero del 1 al ${array[productoConsulta - 1].stock}`));
//             }
//             break;
//         case TextoCambio:
//             while (isNaN(TextoCambio) || TextoCambio <= 0 ) {
//                 TextoCambio = +prompt("Con cuanto efectivo cancela?");
//              }
//             break;
//     }
// }


// // FUNCIONES DE ORDER SUPERIOR -- FILTRO DE PRODUCTOS

// function EleccionDeProducto(array) {
//     TextoLista = "";
//     j = 1;
//     for (const el of array) {
//         if (el.contenido >= 1000) {
//             TextoLista = TextoLista + `${j}: ${el.nombre} ${el.marca} ${(el.contenido / 1000).toFixed(2)}Lt \n`;
//             j++;
//         } else {
//             TextoLista = TextoLista + `${j}: ${el.nombre} ${el.marca} ${el.contenido}ml \n`;
//             j++;
//         }
//     }

//     productoConsulta = +prompt(`${TextoLista} Que producto desea? \n *Elegir un producto según su número`);
//     ValidadorDatos(productoConsulta, array);

//     if (array[productoConsulta - 1].contenido >= 1000) {
//         alert(`El precio del ${array[productoConsulta - 1].nombre} ${array[productoConsulta - 1].marca} ${(array[productoConsulta - 1].contenido / 1000).toFixed(2)}Lt es de ${array[productoConsulta - 1].precio}`);
//     } else {
//         alert(`El precio del ${array[productoConsulta - 1].nombre} ${array[productoConsulta - 1].marca} ${array[productoConsulta - 1].contenido}ml es de ${array[productoConsulta - 1].precio}`);
//     }
//     console.log(array[productoConsulta - 1]);
//     cantidad = +prompt("Ingrese la cantidad");

//     // SE VALIDA NO EXCEDERSE DEL STOCK
//     array[productoConsulta - 1].validacionstock(cantidad);
//     ValidadorDatos(cantidad, array);

//     // SE VALIDA ACTUALIZACION DEL STOCK DEL PRODUCTO

//     array[productoConsulta - 1].compra(cantidad);
//     console.log(array[productoConsulta - 1]);


//     carrito.push(new Item(array[productoConsulta - 1], cantidad));
//     // SE VALIDA PROMOCION POR CANTIDAD DEL PRODUCTO
//     promocion = carrito[carrito.length - 1].promociones(cantidad);
//     console.log(promocion);



//     if (NuevoCliente(cliente, clientes) == true) {
//         descuento = descuento + array[productoConsulta - 1].precio * cantidad * (1 - promocion) + 20;
//     } else {
//         descuento = descuento + array[productoConsulta - 1].precio * cantidad * (1 - promocion);
//     }
//     suma = suma + array[productoConsulta - 1].precio * cantidad - descuento;
// }

// function FiltroProducto(categoria) {
//     switch (categoria) {
//         case 1:
//             EleccionDeProducto(ProductoRon);
//             break;
//         case 2:
//             EleccionDeProducto(ProductoWhisky);
//             break;
//         case 3:
//             EleccionDeProducto(ProductoPisco);
//             break;
//         case 4:
//             EleccionDeProducto(ProductoVino);
//             break;
//         case 5:
//             EleccionDeProducto(ProductoGin);
//             break;
//         case 6:
//             EleccionDeProducto(ProductoBebidas);
//             break;
//         case 7:
//             EleccionDeProducto(productos);
//             break;
//     }
// }



// //BIENVENIDA
// PermisoDatos = confirm("Hola! Bienvenido ALL DAY/ ALL NIGHT" + "\n" +
//     "Queremos darte un excelente servicio" + "\n" +
//     "Para llevarte tu pedido lo más rapido" + "\n" +
//     "Necesitamos tu datos");
// ValidadorDatos(PermisoDatos);

// // INGRESO DE DATOS
// DesarrolloTexto(ConfirmacionDatos);
// ValidadorDatos(ConfirmacionDatos);
// alert("Gracias, los datos se ingresaron exitosamente");
// // SE VALIDA SI ES NUEVO CLIENTE
// NuevoCliente(cliente, clientes);

// // ELECCION DE PRODUCTOS
// do {
//     DesarrolloTexto(ListaCategoria);
//     ValidadorDatos(ListaCategoria);
//     FiltroProducto(categoria);
//     OtroProducto = confirm("Desea llevar otro producto?  Si la respuesta es 'SI' Coloque 'Aceptar'")

// } while (OtroProducto == true);

// // FACTURA DEL PEDIDO
// // SE VALIDA ACTUALIZACION DE HISTORIAL DEL CLIENTE
// clientes[clientes.length - 1].RefreshHistorial(1)
// console.log(clientes[clientes.length - 1]);

// DesarrolloTexto(carrito);
// alert(`FACTURA DEL PEDIDO \n${TextoLista} \n|Descuento: $ ${descuento.toFixed(2)} \n|Total: $ ${suma.toFixed(2)}`);

// // ELECCION MEDIO DE PAGO
// MediosDePago = +prompt("Medios de pago: " + "\n" +
//     "Opcion 1: Efectivo" + "\n" +
//     "Opcion 2: Transferencia" + "\n" +
//     "Opcion 3: Ambos");
// ValidadorDatos(MediosDePago);
// DesarrolloTexto(MediosDePago);




