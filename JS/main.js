
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

//ARRAYS
let carrito = [];
let productos = [];
let ProductosPromociones =[];

// BASE DE DATOS DE PRODUCTOS
productos.push(new Producto("Ron", 750, "El abuelo", 32.00, 24));
productos.push(new Producto("Ron", 750, "Zacapa 12 años", 42.00, 20));
productos.push(new Producto("Ron", 750, "Flor de caña", 34.00, 22));
productos.push(new Producto("Ron", 750, "Zacapa XO", 60.00, 30));
productos.push(new Producto("Ron", 1750, "Flor de caña", 62.00, 18));
productos.push(new Producto("Ron", 1750, "Barcelo", 82.00, 14));
productos.push(new Producto("Whisky", 1000, "JW Red label", 22.00, 24));
productos.push(new Producto("Whisky", 750, "JW Black label", 22.00, 24));
productos.push(new Producto("Whisky", 750, "JW Double Black", 22.00, 24));
productos.push(new Producto("Whisky", 750, "JW Gold label", 22.00, 24));
productos.push(new Producto("Pisco", 750, "SQ Quebranta", 22.00, 24));
productos.push(new Producto("Pisco", 2000, "SQ Quebranta", 22.00, 24));
productos.push(new Producto("Pisco", 750, "Cuatro Gallos", 22.00, 24));
productos.push(new Producto("Pisco", 750, "Intipalka", 22.00, 24));
productos.push(new Producto("Vino", 750, "Tabernero Blanco", 18.00, 32));
productos.push(new Producto("Vino", 750, "Tabernero Rosé", 22.00, 32));
productos.push(new Producto("Vino", 750, "Tabernero Malbec", 24.00, 32));
productos.push(new Producto("Vino", 1500, "Tabernero Borgoña", 24.00, 32));
productos.push(new Producto("Gin", 700, "Beefeater", 62.00, 18));
productos.push(new Producto("Gin", 700, "Beefeater pink", 72.00, 12));
productos.push(new Producto("Gin", 700, "Beefeater orange", 68.00, 22));
productos.push(new Producto("Bebida", 375, "Red Bull", 22.00, 50));
productos.push(new Producto("Bebida", 375, "Red Bull Light", 22.00, 50));
productos.push(new Producto("Bebida", 1500, "Schweppes", 22.00, 52));
productos.push(new Producto("Bebida", 1500, "Schweppes Citrus", 22.00, 52));
productos.push(new Producto("Bebida", 500, "Coca Cola", 22.00, 78));
productos.push(new Producto("Bebida", 500, "Coca Cola Zero", 22.00, 72))
productos.push(new Producto("Bebida", 2500, "Coca Cola", 22.00, 45));
productos.push(new Producto("Bebida", 1500, "Coca Cola Zero", 22.00, 28));
productos.push(new Producto("Bebida", 2500, "Coca Cola Zero", 22.00, 39));
productos.push(new Producto("Hielo", 3000, "Bells", 15.00, 24));
productos.push(new Producto("Hielo", 3000, "Artisan", 6.00, 24));
productos.push(new Producto("Hielo", 1800, "Bells Cokctail", 10.00, 24));


localStorage.setItem("Productos",JSON.stringify(productos));

// BASE DE DATOS PROMOCIONES

ProductosPromociones.push(new Producto("Ron", 750, "El abuelo", 32.00, 24));
ProductosPromociones.push(new Producto("Ron", 750, "Zacapa 12 años", 42.00, 20));
ProductosPromociones.push(new Producto("Ron", 750, "Flor de caña", 34.00, 22));
ProductosPromociones.push(new Producto("Ron", 750, "Zacapa XO", 60.00, 30));
ProductosPromociones.push(new Producto("Ron", 1750, "Flor de caña", 62.00, 18));
ProductosPromociones.push(new Producto("Ron", 1750, "Barcelo", 82.00, 14));
ProductosPromociones.push(new Producto("Whisky", 1000, "JW Red label", 22.00, 24));
ProductosPromociones.push(new Producto("Whisky", 750, "Red bull 6pack", 22.00, 24));
ProductosPromociones.push(new Producto("Whisky", 750, "Red bull Light 6pack", 22.00, 24));


localStorage.setItem("Promociones",JSON.stringify(ProductosPromociones));

// BASE DE DATOS DE PRODUCTOS POR FILTRO

let ProductoRon = productos.filter((el) => { return el.nombre == "Ron" });
let ProductoWhisky = productos.filter((el) => { return el.nombre == "Whisky" });
let ProductoPisco = productos.filter((el) => { return el.nombre == "Pisco" });
let ProductoVino = productos.filter((el) => { return el.nombre == "Vino" });
let ProductoGin = productos.filter((el) => { return el.nombre == "Gin" });
let ProductoBebidas = productos.filter((el) => { return el.nombre == "Bebida" || el.nombre == "Hielo" });

document.addEventListener('DOMContentLoaded', () => {ListaProductos(productos,0)} );

let productoscard= document.querySelector(`#main__listproducts`);

// FUNCIONES 

function ListaProductos(array,j){
    productoscard.innerHTML="";
    array.forEach((el,index) =>{
        (el.contenido >= 1000)?
            TextoLista = `${el.nombre} ${el.marca} ${(el.contenido / 1000).toFixed(2)}Lt \n`:
            TextoLista = `${el.nombre} ${el.marca} ${el.contenido}ml \n`;
                productoscard.innerHTML = productoscard.innerHTML +`
    <div class="card m-2 productos__card" style="width: 18rem;">
    <img src="./IMG/imagen${index+j}.webp" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${TextoLista}</h5>
        <p class="card-text">Precio: <span>$${el.precio}.00<span/></p>
        <button type="button" class="btn-add-cart btn btn-outline-secondary mx-5 px-5">Agregar</button>
      </div>
    </div>
    `
    });  
}
 





// FILTRO POR NAV DROPDOWN SEGUN CATEGORIA
const  FiltroProducto1 = document.querySelector(`#nav__list--all`);
const  FiltroProducto2 = document.querySelector(`#nav__list--ron`);
const  FiltroProducto3 = document.querySelector(`#nav__list--whisky`);
const  FiltroProducto4 = document.querySelector(`#nav__list--pisco`);
const  FiltroProducto5 = document.querySelector(`#nav__list--vino`);
const  FiltroProducto6 = document.querySelector(`#nav__list--gin`);
const  FiltroProducto7 = document.querySelector(`#nav__list--bebidas`);
const  FiltroProducto8 = document.querySelector(`#nav__list--promociones`);


FiltroProducto1.addEventListener('click',()=>{ListaProductos(productos,0)});
FiltroProducto2.addEventListener('click',()=>{ListaProductos(ProductoRon,0)});
FiltroProducto3.addEventListener('click',()=>{ListaProductos(ProductoWhisky,6)})
FiltroProducto4.addEventListener('click',()=>{ListaProductos(ProductoPisco,10)});
FiltroProducto5.addEventListener('click',()=>{ListaProductos(ProductoVino,14)});
FiltroProducto6.addEventListener('click',()=>{ListaProductos(ProductoGin,18)});
FiltroProducto7.addEventListener('click',()=>{ListaProductos(ProductoBebidas,21)});

// FILTRO POR NAV PROMOCIONES
FiltroProducto8.addEventListener('click',()=>{ListaProductos(ProductosPromociones,33)});  

// FILTRO POR INPUT TEXT EVENTO KEYUP
document.addEventListener('keyup', e =>{
    
    if(e.target.matches(`#nav__search`)){
        document.querySelectorAll(`.productos__card`).forEach((el) =>{
            el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?el.classList.remove("filtro")
            :el.classList.add("filtro")
            })
    }   
    })

// NUEVO PLAN PILOTO
const btnCart = document.querySelector('.cart__icon')
const containerCartProducts = document.querySelector('.cart__content')
const CartTotal =document.querySelector(`.cart__total`);
const cartInfo =document.querySelector(`.cart__product`);
const rowProduct =document.querySelector(`.cart__list`);
const productList = document.querySelector(`#main__listproducts`);
const ContainerCarrito = document.querySelector(`.cart__list`);

let ValorTotal = document.querySelector(`.total-pagar`);
let countProducts = document.querySelector(`#cart__countproducts`);
let AllProducts =[];

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('cart__content--hidden')
})



if(AllProducts.length==0){
    CartTotal.innerHTML=`
<h3>El carrito esta vacio</h3>
<span class="total-pagar"></span>
`;
        };


productList.addEventListener(`click`, e => {
 if(e.target.classList.contains(`btn-add-cart`)){
    const item = e.target.parentElement;
    const infocarrito ={
        cantidad: 1,
        nombre: item.querySelector(`h5`).textContent,
        precio: item.querySelector(`span`).textContent,
    };

    const duplicate = AllProducts.some(item => item.nombre ===infocarrito.nombre);


    if(duplicate){
        const products =AllProducts.map(item => {
            if(item.nombre ===infocarrito.nombre){
                item.cantidad++;
                return item;
            }else{
                return item;
            }
        });
       AllProducts=[...products];
    }else{
        AllProducts=[...AllProducts,infocarrito];
    }
    ContainerCarrito.innerHTML="";
    ShowHTML();
    
    
 }
}
)

rowProduct.addEventListener('click',e =>{
    if(e.target.classList.contains('icon-close')){
        const item = e.target.parentElement;
        const title = item.querySelector('p').textContent;
        AllProducts=AllProducts.filter(el=>
            el.nombre !== title);

            console.log(AllProducts);
            ShowHTML();
    }
});










const ShowHTML = () => {
    if(AllProducts.length==0){
        CartTotal.innerHTML=`
    <h3>El carrito esta vacio</h3>
`;
countProducts.innerText =0;
ContainerCarrito.innerHTML=``;
           }else{
            let total = 0;
            let TotalCantidad = 0;
            ContainerCarrito.innerHTML=``;
            
            
            AllProducts.forEach(e => {
                ContainerCarrito.innerHTML =  ContainerCarrito.innerHTML +`
                <div class="cart__product">
                                            <div class="info-cart-product">
                                                <span class="cantidad-producto-carrito">${e.cantidad}</span>
                                                <p class="titulo-producto-carrito">${e.nombre}</p>
                                                <span class="precio-producto-carrito">${e.precio}</span>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="icon-close"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </div>
                `;
                total = total+parseInt(e.precio.slice(1)*e.cantidad);
                TotalCantidad = TotalCantidad + e.cantidad;
        
        
        })
        CartTotal.innerHTML=`
        <h3>Total:</h3>
        <span class="total-pagar">$${total.toFixed(2)}</span>
        <button id="btn-add-cart" type="button" class="btn-add-cart btn btn-outline-secondary mx-5 px-4"><a href="./PAGES/Pago.html">Pagar</a></button>
        `;
        // ValorTotal.innerText= `$${total.toFixed(2)}`;
        countProducts.innerText = TotalCantidad;
           };
}

