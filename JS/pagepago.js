
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
let TextoToast ="";
let Atribute = 0;
//ARRAYS
let productos = [];
let ProductosPromociones = [];
let AllProducts = [];
let Cart = [];


// Cart = JSON.parse(sessionStorage.getItem("Cart"));

Cart = JSON.parse('[{"producto":{"nombre":"Ron","contenido":750,"marca":"Flor de caña","precio":34,"stock":22},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa 12 años","precio":42,"stock":20},"cantidad":2},{"producto":{"nombre":"Ron","contenido":750,"marca":"El abuelo","precio":32,"stock":24},"cantidad":1},{"producto":{"nombre":"Ron","contenido":1750,"marca":"Flor de caña","precio":62,"stock":18},"cantidad":1},{"producto":{"nombre":"Ron","contenido":750,"marca":"Zacapa XO","precio":60,"stock":30},"cantidad":1}]');

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
function ToastDatos() {
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
}

function ToastDatosTwo(){

  const toastTriggertwo = document.getElementById('liveToastBtnTwo')
  const toastLiveExampletwo = document.getElementById('liveToastTwo')
  
  if (toastTriggertwo) {
    const toastBootstraptwo = bootstrap.Toast.getOrCreateInstance(toastLiveExampletwo)
    toastTriggertwo.addEventListener('click', () => {
      toastBootstraptwo.show()
    })
  }
}

  


// BOOTSTRAP

// Example starter JavaScript for disabling form submissions if there are invalid fields
 (function() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
 
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            event.preventDefault();
          }
        form.classList.add('was-validated')
      }, false)
    })
 }
  
)()





ConfirmarDatos.addEventListener('click', () => {
  if(FormDatos.checkValidity()){
    ConfirmarDatos.classList.replace('btn-outline-secondary','btn__ConfirmDatos')
    TextoToast = "Validación de Datos Correcta"
    ToastDatosAwait();
    Atribute =1;
  
};
})



ConfirmarCompra.addEventListener('click', () =>{
  if(FormCompra.checkValidity() && Atribute == 1){
    TextoToast = "Registro de Compra Correcta"
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
                                        <strong class="me-auto">Registro de Compra Correcta!</strong>
                                        <button type="button" class="btn-close" data-bs-dismiss="toast"
                                            aria-label="Close"></button>
                                    </div>
                                </div>
                      </div> 
`
    ToastDatosTwo();
    
    setTimeout(() =>{
      window.location.href ="../index.html";
    },5000)
  }
})


function ToastDatosAwait() {
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
  </div>`
  ToastDatos();
}