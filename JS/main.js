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
let ProductoRon =[];
let ProductoWhisky = [];
let ProductoPisco = [];
let ProductoVino = [];
let ProductoGin = [];
let ProductoBebidas =[];

//BASE DE DATOS PRODUCTOS Y FILTROS
async function TraerDatosProductos(){
    const response = await fetch("JSON/productos.json");
    if(response.ok){
      productos =  await response.json();

      ListaProductos(productos,0);
    
      ProductoRon = productos.filter((el) => { return el.nombre == "Ron" });
      ProductoWhisky= productos.filter((el) => { return el.nombre == "Whisky" });
      ProductoPisco = productos.filter((el) => { return el.nombre == "Pisco" });
      ProductoVino = productos.filter((el) => { return el.nombre == "Vino" });
      ProductoGin = productos.filter((el) => { return el.nombre == "Gin" });
      ProductoBebidas = productos.filter((el) => { return el.nombre == "Bebida" || el.nombre == "Hielo"});

      localStorage.setItem("Productos", JSON.stringify(productos));
    }   
}

// BASE DE DATOS PROMOCIONES
async function TraerDatosPromociones(){
    const response = await fetch("JSON/promociones.json")
    if(response.ok){
      ProductosPromociones= await response.json();
      ListaProductos(ProductosPromociones,33);
      localStorage.setItem("Promociones", JSON.stringify(ProductosPromociones));
    }
}

document.addEventListener('DOMContentLoaded', () => {TraerDatosProductos()});

function Textolista(el) {
    (el.contenido >= 1000)
        ? TextoLista = `${el.nombre} ${el.marca} ${(el.contenido / 1000).toFixed(2)}Lt`
        : TextoLista = `${el.nombre} ${el.marca} ${el.contenido}ml`;
    return TextoLista
}


function ItemNew(array, object) {
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

if (AllProducts.length == 0) {
    CartTotal.innerHTML = `
    <h3>El carrito esta vacio
    <span class="total-pagar"></span></h3>
    `;
};

// FUNCION SHOWCART DESGLOSAR CARRITO EN CAJA LATERAL
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
        <h3>Total:
        <span class="pay__total">$${Total.toFixed(2)}</span></h3>
        <button id="pay__btn" type="button" class="btn-add-cart btn btn-outline-secondary mx-5 px-4"><a href="PAGES/Pago.html">Pagar</a></button>
        `;

        sessionStorage.clear();
        countProducts.innerText = TotalCantidad;
        sessionStorage.setItem("Cart", JSON.stringify(Cart));
    };
}

// // FILTRO POR NAV DROPDOWN SEGUN CATEGORIA
const FiltroProducto1 = document.querySelector(`#nav__list--all`);
const FiltroProducto2 = document.querySelector(`#nav__list--ron`);
const FiltroProducto3 = document.querySelector(`#nav__list--whisky`);
const FiltroProducto4 = document.querySelector(`#nav__list--pisco`);
const FiltroProducto5 = document.querySelector(`#nav__list--vino`);
const FiltroProducto6 = document.querySelector(`#nav__list--gin`);
const FiltroProducto7 = document.querySelector(`#nav__list--bebidas`);
const FiltroProducto8 = document.querySelector(`#nav__list--promociones`);

// // DESGLOSAR PORDUCTOS SEGUN FILTRO
FiltroProducto1.addEventListener('click', () => { ListaProductos(productos, 0)});
FiltroProducto2.addEventListener('click', () => { ListaProductos(ProductoRon, 0) });
FiltroProducto3.addEventListener('click', () => { ListaProductos(ProductoWhisky, 6) })
FiltroProducto4.addEventListener('click', () => { ListaProductos(ProductoPisco, 10) });
FiltroProducto5.addEventListener('click', () => { ListaProductos(ProductoVino, 14) });
FiltroProducto6.addEventListener('click', () => { ListaProductos(ProductoGin, 18) });
FiltroProducto7.addEventListener('click', () => { ListaProductos(ProductoBebidas, 21) });
FiltroProducto8.addEventListener('click', () => { TraerDatosPromociones()});

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
productList.addEventListener(`click`, (e) => {
    
    if (e.target.classList.contains(`btn-add-cart`)) {
        const item = e.target.parentElement;
        const InfoCart = {
            cantidad: 1,
            nombre: item.querySelector(`h5`).textContent,
            precio: item.querySelector(`span`).textContent,
        };

        ItemNew(productos, InfoCart);
        ItemNew(ProductosPromociones, InfoCart);

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