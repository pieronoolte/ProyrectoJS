
// VARIABLES DOM
let FacturatList = document.querySelector(`.cart__list`);
let Nombre = document.querySelector(".form__nombre");
let Email = document.querySelector(".form__email");
let Cell = document.querySelector(".form__cell");
let Distrito = document.querySelector(".form__distrito");
let Direccion = document.querySelector(".form__direccion");
let Referencia = document.querySelector(".form__referencia");

const CartTotal = document.querySelector(`.cart__total--Factura`);
const MainPaymentForm = document.querySelector(`#main__paymentform`);
const ConfirmarDatos = document.querySelector(`#liveToastBtn`);
const ConfirmarCompra = document.querySelector(`#liveToastBtnTwo`);
const BtnDatos = document.querySelector(`.btndatos`);
const BtnDatosTwo = document.querySelector(`.btndatostwo`);
const FormDatos = document.querySelector(`#form__datos`);
const FormCompra = document.querySelector(`#form__compra`);
const MainFactura = document.querySelector(`#main__factura`);
// VARIABLES GENERALES
let TextoLista = "";
let TextoToast = "";
let Atribute = 0;
let TextoMessage = `FACTURA ALL DAY/ ALL NIGHT \n\n`
//ARRAYS
let productos = [];
let ProductosPromociones = [];
let AllProducts = [];
let Cart = [];
let InfoCliente = {};
let HistorialClientes = JSON.parse(localStorage.getItem("HistorialClientes"));

Cart = JSON.parse(sessionStorage.getItem("Cart"));
// Cart = JSON.parse('[{"producto":{"nombre":"Ron","contenido":750,"marca":"Flor de caña","precio":34,"stock":22},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa 12 años","precio":42,"stock":20},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"El abuelo","precio":32,"stock":24},"cantidad":1},{"producto":{"nombre":"Ron","contenido":1750,"marca":"Flor de caña","precio":62,"stock":18},"cantidad":1},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa XO","precio":60,"stock":30},"cantidad":1}]');

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
    const {producto, cantidad} = e;
    const {nombre, contenido, marca, precio} = producto;
    (contenido >= 1000)
    ? TextoLista = `${nombre} ${marca} ${(contenido / 1000).toFixed(2)}Lt`
    : TextoLista = `${nombre} ${marca} ${contenido}ml`;
    FacturatList.innerHTML = FacturatList.innerHTML + `
    <div class="cart__product">
      <div class="cartproduct__info">
        <span class="cartproduct__quantity">${cantidad}</span>
        <p class="cartproduct__title">${TextoLista}</p>
        <span class="cartproduct__price">$${precio}.00</span>
        <span class="cartproduct__sub">$${cantidad * precio}.00</span>
      </div>
      <span class="material-symbols-outlined cartptoduct__img">
      add_shopping_cart
      </span>
    </div>`;
    Total = Total + parseInt(precio * cantidad);
    TextoMessage += `Cantidad: ${cantidad} \nProducto: ${TextoLista} \nPrecio: $${precio} \nSubtotal: $${cantidad * precio} \n\n`;
  })

  CartTotal.innerHTML = `
    <h3>FACTURA ALL DAY/ ALL NIGHT</h3>
    <span class="total-pagar">Total: $${Total.toFixed(2)}</span>
      `;
  TextoMessage +=`Total: $${Total.toFixed(2)}`;
};

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

function ToastInner(id1,id2) {

  BtnDatos.innerHTML += `
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id=${id2} class="toast" role="alert" aria-live="assertive" aria-atomic="true">
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

  let toastTrigger = document.getElementById(id1);
  let toastLiveExample = document.getElementById(id2);

  if (toastTrigger) {
    let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();

  }
}

// EVENTO CLICK PARA CONFIRMACION DE DATOS CON FORM VALIDATION
ConfirmarDatos.addEventListener('click', () => {
  if (FormDatos.checkValidity()) {
    ConfirmarDatos.classList.replace('btn-outline-secondary', 'btn__ConfirmDatos')
    TextoToast = "Validación de Datos Correcta";
    ToastInner('liveToastBtn','liveToast');
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

// EVENTO CLICK PARA CONFIRMACION DE COMPRA/DATOS CON FORM DATOS VALIDATION && ATRIBUTO = 1
ConfirmarCompra.addEventListener('click', () => {
  if (FormCompra.checkValidity() && Atribute == 1) {
    let Fecha = Date.now();
    let FechaCompra = new Date(Fecha);
    let InfoCompra =[];
    TextoToast = "Registro de Compra Correcta"
    ToastInner('liveToastBtnTwo','liveToastTwo');
    InfoCompra =[ InfoCliente, Cart, FechaCompra.toDateString()];
    console.log(InfoCompra);
    HistorialClientes =[...HistorialClientes,InfoCompra];
    localStorage.setItem("HistorialClientes", JSON.stringify(HistorialClientes));
    sendmail();
    setTimeout(() => {
    $('#modalsuccess').modal('show'); 
    }, 500)
    setTimeout(() => {
      Atribute = 0;
      sessionStorage.clear();
      window.location.href = "../index.html";
    }, 3000)
  }
})

//API EMAILJS: A SU CORREO ELECTRÓNICO, LLEGARÁ UN COMPROBANTE DE PAGO
function sendmail() {
  (function () {
      emailjs.init("_-4vKucqdsqorz19Y");
  })();

  let params = {
      sendername: document.querySelector("#inputPassword4").value,
      subject: document.querySelector("#validationCustom01").value,
      message: TextoMessage
  };

  let serviceID = "service_cz04fpb";
  let templateID = "template_vcia41s";

  emailjs.send(serviceID, templateID, params)
  .then( response => {
      console.log(response);
      console.log("Mensaje Enviado");
  })};