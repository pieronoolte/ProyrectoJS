// VARIABLES DOM
const BtnCart = document.querySelector('.cart__icon')
const CartContent = document.querySelector('.cart__content')
const CartTotal = document.querySelector(`.cart__total`);
const rowProduct = document.querySelector(`.cart__list`);
const productList = document.querySelector(`#main__listproducts`);
const ContainerCarrito = document.querySelector(`.cart__list`);
let productoscard = document.querySelector(`#main__listproducts`);
let countProducts = document.querySelector(`#cart__countproducts`);


// VARIABLES GENERALES
let TextoLista = "";
let NewItem = {};

//ARRAYS
let productos = [];
let ProductosPromociones = [];
let AllProducts = [];
let Cart = [];

// BADE DE DATOS PRODUCTOS
// productos.push(new Producto("Ron", 750, "El abuelo", 32.00, 24));
// productos.push(new Producto("Ron", 750, "Zacapa 12 años", 42.00, 20));
// productos.push(new Producto("Ron", 750, "Flor de caña", 34.00, 22));
// productos.push(new Producto("Ron", 750, "Zacapa XO", 60.00, 30));
// productos.push(new Producto("Ron", 1750, "Flor de caña", 62.00, 18));
// productos.push(new Producto("Ron", 1750, "Barcelo", 82.00, 14));
// productos.push(new Producto("Whisky", 1000, "JW Red label", 22.00, 24));
// productos.push(new Producto("Whisky", 750, "JW Black label", 22.00, 24));
// productos.push(new Producto("Whisky", 750, "JW Double Black", 22.00, 24));
// productos.push(new Producto("Whisky", 750, "JW Gold label", 22.00, 24));
// productos.push(new Producto("Pisco", 750, "SQ Quebranta", 22.00, 24));
// productos.push(new Producto("Pisco", 2000, "SQ Quebranta", 22.00, 24));
// productos.push(new Producto("Pisco", 750, "Cuatro Gallos", 22.00, 24));
// productos.push(new Producto("Pisco", 750, "Intipalka", 22.00, 24));
// productos.push(new Producto("Vino", 750, "Tabernero Blanco", 18.00, 32));
// productos.push(new Producto("Vino", 750, "Tabernero Rosé", 22.00, 32));
// productos.push(new Producto("Vino", 750, "Tabernero Malbec", 24.00, 32));
// productos.push(new Producto("Vino", 1500, "Tabernero Borgoña", 24.00, 32));
// productos.push(new Producto("Gin", 700, "Beefeater", 62.00, 18));
// productos.push(new Producto("Gin", 700, "Beefeater pink", 72.00, 12));
// productos.push(new Producto("Gin", 700, "Beefeater orange", 68.00, 22));
// productos.push(new Producto("Bebida", 375, "Red Bull", 22.00, 50));
// productos.push(new Producto("Bebida", 375, "Red Bull Light", 22.00, 50));
// productos.push(new Producto("Bebida", 1500, "Schweppes", 22.00, 52));
// productos.push(new Producto("Bebida", 1500, "Schweppes Citrus", 22.00, 52));
// productos.push(new Producto("Bebida", 500, "Coca Cola", 22.00, 78));
// productos.push(new Producto("Bebida", 500, "Coca Cola Zero", 22.00, 72))
// productos.push(new Producto("Bebida", 2500, "Coca Cola", 22.00, 45));
// productos.push(new Producto("Bebida", 1500, "Coca Cola Zero", 22.00, 28));
// productos.push(new Producto("Bebida", 2500, "Coca Cola Zero", 22.00, 39));
// productos.push(new Producto("Hielo", 3000, "Bells", 15.00, 24));
// productos.push(new Producto("Hielo", 3000, "Artisan", 6.00, 24));
// productos.push(new Producto("Hielo", 1800, "Bells Cokctail", 10.00, 24));


// localStorage.setItem("Productos", JSON.stringify(productos));

// // BASE DE DATOS PROMOCIONES
// ProductosPromociones.push(new Producto("Bebida", 500, "Coca Cola 6unid", 42.00, 20));
// ProductosPromociones.push(new Producto("Bebida", 3000, "Coca Cola 2unid", 42.00, 20));
// ProductosPromociones.push(new Producto("Vino", 750, "Tabernero Borgoña 2unid", 34.00, 22));
// ProductosPromociones.push(new Producto("Pisco", 750, "Cuatro Gallos 2unid", 60.00, 30));
// ProductosPromociones.push(new Producto("Whisky", 750, "JW Black label 2unid", 62.00, 18));
// ProductosPromociones.push(new Producto("Whisky", 750, "JW Black label + 6unid Pilsen", 82.00, 14));
// ProductosPromociones.push(new Producto("Whisky", 750, "JW Red label + Schweppes", 22.00, 24));
// ProductosPromociones.push(new Producto("Bebida", 1500, "Red bull 6unid", 22.00, 24));
// ProductosPromociones.push(new Producto("Bebida", 1500, "Red bull Light 6unid", 22.00, 24));

// localStorage.setItem("Promociones", JSON.stringify(ProductosPromociones));

// FUNCION FETCH PARA BASE DE DATOS
async function TraerDatos(json,array){
    fetch(json)
  .then((response) =>{
    if(response.ok){
        return response.json();
    }
    console.log("Hola");
  })
  .then((lista) => {
    array=lista;
    return array;
  })
//   if(array == productos){
//     localStorage.setItem("Productos", JSON.stringify(productos));
//   }else{
//     localStorage.setItem("Promociones", JSON.stringify(ProductosPromociones));
//   }
}
document.addEventListener('DOMContentLoaded', () => {ListaProductos(TraerDatos("JSON/productos.json",productos),0) });




// document.addEventListener('DOMContentLoaded', () => {ListaProductos(productos, 0) });
async function FilterProductos (categoria) {
   const response = await TraerDatos("JSON/productos.json",productos);
   response.filter((el) => { return el.nombre == categoria });
   return response;
}


// BASE DE DATOS DE PRODUCTOS POR FILTRO
let ProductoRon = FilterProductos("Ron");
let ProductoWhisky = FilterProductos("Whisky");
let ProductoPisco = FilterProductos("Pisco");
let ProductoVino = FilterProductos("Vino");
let ProductoGin = FilterProductos("Gin");
let ProductoBebidas = FilterProductos("Bebida").concat(FilterProductos("Hielo"));



// FUNCION TEXTOLISTA
function Textolista(el) {
    (el.contenido >= 1000)
        ? TextoLista = `${el.nombre} ${el.marca} ${(el.contenido / 1000).toFixed(2)}Lt`
        : TextoLista = `${el.nombre} ${el.marca} ${el.contenido}ml`;
    return TextoLista
}
// FUNCION NUEVO ITEM
async function ItemNew(array, object) {
    await array;
    array.forEach((el) => {
        if (object.nombre == Textolista(el)) {
            NewItem = new Item(el, object.cantidad);
        }
    })
}
// FUNCION PARA DESGLOSAR LOS PRODUCTOS EN HTML
async function ListaProductos(array, j) {
    await array;
    productoscard.innerHTML = "";
    array.forEach((el, index) => {
        Textolista(el);
        productoscard.innerHTML = productoscard.innerHTML + `
        <div class="card m-2 productos__card" style="width: 18rem;">
            <img src="./IMG/imagen${index + j}.webp" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${TextoLista}</h5>
                <p class="card-text">Precio: <span>$${el.precio}.00<span/></p>
                <button type="button" class="btn-add-cart btn btn-outline-secondary mx-5 px-5">Agregar</button>
            </div>
        </div>
        `;
    });
}

// FUNCION VERIFICACION LENGTH
if (AllProducts.length == 0) {
    CartTotal.innerHTML = `
    <h3>El carrito esta vacio</h3>
    <span class="total-pagar"></span>
    `;
};

// FUNCION SHOWCART
const ShowCart = () => {
    if (AllProducts.length == 0) {
        CartTotal.innerHTML = `
        <h3>El carrito esta vacio</h3>
        `;
        countProducts.innerText = 0;
        ContainerCarrito.innerHTML = ``;
    } else {
        let Total = 0;
        let TotalCantidad = 0;
        ContainerCarrito.innerHTML = ``;
        AllProducts.forEach(e => {
            ContainerCarrito.innerHTML = ContainerCarrito.innerHTML + `
                <div class="cart__product">
                    <div class="cartproduct__info">
                        <span class="cartproduct__quantity">${e.cantidad}</span>
                        <p class="cartproduct__title">${e.nombre}</p>
                        <span class="cartproduct__price">${e.precio}</span>
                    </div>


                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="cartproduct__icon">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
                `;
            Total = Total + parseInt(e.precio.slice(1) * e.cantidad);
            TotalCantidad = TotalCantidad + e.cantidad;
        })

        CartTotal.innerHTML = `
        <h3>Total:</h3>
        <span class="pay__total">$${Total.toFixed(2)}</span>
        <button id="pay__btn" type="button" class="btn-add-cart btn btn-outline-secondary mx-5 px-4"><a href="PAGES/Pago.html">Pagar</a></button>
        `;

        sessionStorage.clear();
        countProducts.innerText = TotalCantidad;
        sessionStorage.setItem("Cart", JSON.stringify(Cart));
    };
}


// FILTRO POR NAV DROPDOWN SEGUN CATEGORIA
const FiltroProducto1 = document.querySelector(`#nav__list--all`);
const FiltroProducto2 = document.querySelector(`#nav__list--ron`);
const FiltroProducto3 = document.querySelector(`#nav__list--whisky`);
const FiltroProducto4 = document.querySelector(`#nav__list--pisco`);
const FiltroProducto5 = document.querySelector(`#nav__list--vino`);
const FiltroProducto6 = document.querySelector(`#nav__list--gin`);
const FiltroProducto7 = document.querySelector(`#nav__list--bebidas`);
const FiltroProducto8 = document.querySelector(`#nav__list--promociones`);

// DESGLOSAR PORDUCTOS SEGUN FILTRO
FiltroProducto1.addEventListener('click', () => { ListaProductos(productos, 0)});
FiltroProducto2.addEventListener('click', () => { ListaProductos(ProductoRon, 0) });
FiltroProducto3.addEventListener('click', () => { ListaProductos(ProductoWhisky, 6) })
FiltroProducto4.addEventListener('click', () => { ListaProductos(ProductoPisco, 10) });
FiltroProducto5.addEventListener('click', () => { ListaProductos(ProductoVino, 14) });
FiltroProducto6.addEventListener('click', () => { ListaProductos(ProductoGin, 18) });
FiltroProducto7.addEventListener('click', () => { ListaProductos(ProductoBebidas, 21) });
FiltroProducto8.addEventListener('click', () => { ListaProductos(TraerDatos("JSON/promociones.json",ProductosPromociones),33)});

// EVENTO KEYUP FILTRO POR INPUT TEXT 
document.addEventListener('keyup', e => {

    if (e.target.matches(`#nav__search`)) {
        document.querySelectorAll(`.productos__card`).forEach((el) => {
            el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? el.classList.remove("card__filtro")
                : el.classList.add("card__filtro")
        })
    }
})

// EVENTO CLICK DESGLOSAR CARRITO
BtnCart.addEventListener('click', () => {
    CartContent.classList.toggle('cart__content--hidden')
})

// EVENTO AGREGAR ITEM AL CARRITO Y/O ACTUALIZAR CANTIDAD
productList.addEventListener(`click`, async (e) => {
    

    if (e.target.classList.contains(`btn-add-cart`)) {
        const item = e.target.parentElement;
        const InfoCart = {
            cantidad: 1,
            nombre: item.querySelector(`h5`).textContent,
            precio: item.querySelector(`span`).textContent,
        };

        await ItemNew(productos, InfoCart);
        await ItemNew(ProductosPromociones, InfoCart);

        const Duplicate = AllProducts.some(item => item.nombre === InfoCart.nombre);

        if (Duplicate) {
            const products = AllProducts.map(item => {
                if (item.nombre === InfoCart.nombre) {
                    item.cantidad++;
                    return item;
                } else {
                    return item;
                }
            });
            AllProducts = [...products];

            const RefreshItem = Cart.map(el => {
                Textolista(el.producto);
                if (TextoLista === InfoCart.nombre) {
                    el.cantidad++;
                    return el;
                } else {
                    return el;
                }
            });
            Cart = [...RefreshItem];

        } else {
            AllProducts = [...AllProducts, InfoCart];
            Cart = [...Cart, NewItem];
        }

        console.log(Cart);
        console.log(AllProducts);
        ContainerCarrito.innerHTML = "";
        ShowCart();
    }
}
)


// EVENTO ELIMINAR ITEM DEL CARRITO HACIENDO CLICK EN "X"
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('cartproduct__icon')) {
        const item = e.target.parentElement;
        const title = item.querySelector('p').textContent;
        AllProducts = AllProducts.filter(el =>
            el.nombre !== title);
        Cart = Cart.filter(el =>
            Textolista(el.producto) !== title);
        console.log(AllProducts);
        ShowCart();
    }
});

