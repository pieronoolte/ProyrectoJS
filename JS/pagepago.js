
// VARIABLES DOM
let FacturatList = document.querySelector(`.cart__list`);
const CartTotal = document.querySelector(`.cart__total--Factura`);
const MainPaymentForm = document.querySelector(`#main__paymentform`);


// VARIABLES GENERALES
let TextoLista = "";

//ARRAYS
let productos = [];
let ProductosPromociones = [];
let AllProducts = [];
let Cart = [];


Cart = JSON.parse(sessionStorage.getItem("Cart"));

// Cart = JSON.parse('[{"producto":{"nombre":"Ron","contenido":750,"marca":"Flor de caña","precio":34,"stock":22},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa 12 años","precio":42,"stock":20},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"El abuelo","precio":32,"stock":24},"cantidad":1},{"producto":{"nombre":"Ron","contenido":1750,"marca":"Flor de caña","precio":62,"stock":18},"cantidad":1},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa XO","precio":60,"stock":30},"cantidad":1}]');

function Textolista(el) {
    (el.contenido >= 1000)
        ? TextoLista = `${el.nombre} ${el.marca} ${(el.contenido / 1000).toFixed(2)}Lt`
        : TextoLista = `${el.nombre} ${el.marca} ${el.contenido}ml`;
}

const ShowCart = () => {
    let Total = 0;
    FacturatList.innerHTML = `
    <div class="cart__product">
        <div class="cartproduct__info">
            <span class="cartproduct__quantity--title">Cantidad</span>
            <p class="cartproduct__title--title">Producto</p>
            <span class="cartproduct__price--title">Precio</span>
            <span class="cartproduct__sub--title">Sub Total</span>
        </div>
        <span class="material-symbols-outlined">
        add_shopping_cart
        </span>
    </div>`;
    Cart.forEach(e => {
        Textolista(e.producto);
        FacturatList.innerHTML = FacturatList.innerHTML + `
                <div class="cart__product">
                    <div class="cartproduct__info">
                        <span class="cartproduct__quantity">${e.cantidad}</span>
                        <p class="cartproduct__title">${TextoLista}</p>
                        <span class="cartproduct__price">$${e.producto.precio}.00</span>
                        <span class="cartproduct__sub"">$${e.cantidad * e.producto.precio}.00</span>
                    </div>
                    <span class="material-symbols-outlined">
                    add_shopping_cart
                    </span>
                </div>
                `;
        Total = Total + parseInt(e.producto.precio * e.cantidad);
    })

    CartTotal.innerHTML = `
        <h3>FACTURA ALL DAY/ ALL NIGHT</h3>
        <span class="total-pagar">Total: $${Total.toFixed(2)}</span>
          `;

}

ShowCart()
// document.addEventListener('DOMContentLoaded', () => { ShowCart()});

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

const toastTriggertwo = document.getElementById('liveToastBtnTwo')
const toastLiveExampletwo = document.getElementById('liveToastTwo')

if (toastTriggertwo) {
  const toastBootstraptwo = bootstrap.Toast.getOrCreateInstance(toastLiveExampletwo)
  toastTriggertwo.addEventListener('click', () => {
    toastBootstraptwo.show()
  })
}