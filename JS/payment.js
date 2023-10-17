
// VARIABLES DOM
let FacturatList = document.querySelector(`.cart__list`);
const CartTotal = document.querySelector(`.cart__total--Factura`);
const MainPaymentForm = document.querySelector(`#main__paymentform`);
const ConfirmarDatos = document.querySelector(`#liveToastBtn`);
const ConfirmarCompra = document.querySelector(`#liveToastBtnTwo`);
const BtnDatos = document.querySelector(`.btndatos`);
const BtnDatosTwo = document.querySelector(`.btndatostwo`);
const FormDatos = document.querySelector(`#form__datos`);
const FormCompra = document.querySelector(`#form__compra`);
// VARIABLES GENERALES
let TextoLista = "";
let TextoToast = "";
let Atribute = 0;
//ARRAYS
let productos = [];
let ProductosPromociones = [];
let AllProducts = [];
let Cart = [];
let InfoCliente = {};
let InfoCompra =[];

//FUNCION SHOWCART DESGLOSAR FACTURA POR ITEM
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
      <span class="material-symbols-outlined cartptoduct__img">
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
      <span class="material-symbols-outlined cartptoduct__img">
      add_shopping_cart
      </span>
    </div>`;
    Total = Total + parseInt(e.producto.precio * e.cantidad);
  })

  CartTotal.innerHTML = `
    <h3>FACTURA ALL DAY/ ALL NIGHT</h3>
    <span class="total-pagar">Total: $${Total.toFixed(2)}</span>
      `;
};


Cart = JSON.parse(sessionStorage.getItem("Cart"));
// Cart = JSON.parse('[{"producto":{"nombre":"Ron","contenido":750,"marca":"Flor de caña","precio":34,"stock":22},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa 12 años","precio":42,"stock":20},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"El abuelo","precio":32,"stock":24},"cantidad":1},{"producto":{"nombre":"Ron","contenido":1750,"marca":"Flor de caña","precio":62,"stock":18},"cantidad":1},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa XO","precio":60,"stock":30},"cantidad":1}]');
document.addEventListener('DOMContentLoaded', () => { ShowCart() });

// BOOTSTRAP FORM VALIDATION IMPORT
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault(); //MODIFICACION PARA MANTENER LOS DATOS CONFRIMADOS EN PANTALLA
        }
        form.classList.add('was-validated')
      }, false)
    })
}
)()

// BOOSTRAP TOAST IMPORT CONFIRMAR DATOS
function ToastDatos() {
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast');

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();

  }
}

// BOOSTRAP TOAST IMPORT CONFIRMAR COMPRA
function ToastCompra() {

  const toastTriggertwo = document.getElementById('liveToastBtnTwo');
  const toastLiveExampletwo = document.getElementById('liveToastTwo');

  if (toastTriggertwo) {
    const toastBootstraptwo = bootstrap.Toast.getOrCreateInstance(toastLiveExampletwo);
    toastBootstraptwo.show();
  }
}

// BOOSTRAP TOAST CONFIRMAR DATOS INNER
function ToastDatosInner() {

  BtnDatos.innerHTML += `
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header d-flex justify-content-start align-items-center">
        <div class="wrapper">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path class="checkmark__check" fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <strong class="me-auto">${TextoToast}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"
          aria-label="Close"></button>
      </div>
    </div>
  </div>`;
  ToastDatos();
}

// BOOSTRAP TOAST CONFIRMAR COMPRA INNER
function ToastCompraInner() {
  BtnDatosTwo.innerHTML += `
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToastTwo" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header d-flex justify-content-start align-items-center">
        <div class="wrapper">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <strong class="me-auto">${TextoToast}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"
          aria-label="Close"></button>
      </div>
    </div>
  </div>
`;
  ToastCompra();
}

let Nombre = document.querySelector(".form__nombre");
let Email = document.querySelector(".form__email");
let Cell = document.querySelector(".form__cell");
let Distrito = document.querySelector(".form__distrito");
let Direccion = document.querySelector(".form__direccion");
let Referencia = document.querySelector(".form__referencia");


// FUNCION TEXTOLISTA
function Textolista(el) {
  (el.contenido >= 1000)
    ? TextoLista = `${el.nombre} ${el.marca} ${(el.contenido / 1000).toFixed(2)}Lt`
    : TextoLista = `${el.nombre} ${el.marca} ${el.contenido}ml`;
}




// EVENTOS

// EVENTO CLICK PARA CONFIRMACION DE DATOS CON FORM VALIDATION
ConfirmarDatos.addEventListener('click', () => {
  if (FormDatos.checkValidity()) {
    ConfirmarDatos.classList.replace('btn-outline-secondary', 'btn__ConfirmDatos')
    TextoToast = "Validación de Datos Correcta"
    ToastDatosInner();
    Atribute = 1;
    InfoCliente = {
      nombre: Nombre.value,
      email: Email.value,
      contacto: Cell.value,
      ditrito: Distrito.value,
      direccion: Direccion.value,
      referencia: Referencia.value
    }
    ConfirmarCompra.classList.remove('card__filtro')
    console.log(InfoCliente);
  };
})


// EVENTO CLICK PARA CONFIRMACION DE COMPRA/DATOS CON FORM VALIDATION && ATRIBUTO = 1
ConfirmarCompra.addEventListener('click', () => {
  if (FormCompra.checkValidity() && Atribute == 1) {
    let Fecha = Date.now();
    let FechaCompra = new Date(Fecha);
    TextoToast = "Registro de Compra Correcta"
    ToastCompraInner();
    InfoCompra =[ InfoCliente, Cart, FechaCompra.toDateString()];
    console.log(InfoCompra);
    setTimeout(() => {
    $('#modalsuccess').modal('show'); 
    }, 500)
    // setTimeout(() => {
    //   Atribute = 0;
    //   sessionStorage.clear();
    //   window.location.href = "../index.html";
    // }, 3000)
  }
})

// API EMAILJS
// function sendmail() {
//   (function () {
//       emailjs.init("_-4vKucqdsqorz19Y");
//   })();

//   let params = {
//       sendername: document.querySelector("#inputPassword4").value,
//       subject: document.querySelector("#validationCustom01").value
//   };

//   let serviceID = "service_cz04fpb";
//   let templateID = "template_vcia41s";

//   emailjs.send(serviceID, templateID, params)
//   .then( response => {
//       console.log(response);
//   })
// }
