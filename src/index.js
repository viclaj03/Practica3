'use strict'
let productos = document.getElementById("products")

let newLine = document.createElement('div')

const REGEXP_PHOTO = '^.*\.(png|jpg|jpeg|webp)$'

const inputNombre = document.getElementById('name');
const errorNombre = document.getElementById('error-name');

const inputOriginalPrice = document.getElementById('original_price');
const errorOriginalPrice = document.getElementById('error-original');


const inputDiscountPrice = document.getElementById('discount_price');
const errorDiscountPrice = document.getElementById('error-discount');

const inputStar = document.getElementById('start');
const errorStar = document.getElementById('error-star');

const inputFuel = document.getElementById('fuel');
const errorFuel = document.getElementById('error-fuel');

const inputKilometro = document.getElementById('kilometros');
const errorKilometro = document.getElementById('error-kilometro');

const inputAcepta = document.getElementById('acepta');
const errorAcepta = document.getElementById('error-acepta');

const inputFoto = document.getElementById('photo');
const errorFoto = document.getElementById('error-foto');

const inputGearM = document.getElementById('manual_gear');
const inputGearA = document.getElementById('auto_gear');
const errorRadio = document.getElementById('error-radio');

const formNewcar = document.getElementById('new-car')

const formulario = document.getElementById('formulario')
const coches = document.getElementById('productos')


mostrarCoches(products)

window.addEventListener('load', () => {
    document.getElementById('newProduct').addEventListener("click", function(){
        
        formulario.classList.remove('hide')
        coches.classList.add('hide')
        limpiarForm();
    }
    )
    document.getElementById('allProducts').addEventListener("click", function(){
        
        formulario.classList.add('hide')
        coches.classList.remove('hide')

    }
    )

    typesOfFuel.forEach(element =>{
        let newOprtion = document.createElement('option')
        newOprtion.innerHTML = element.fuel
        newOprtion.value = element.id
        document.getElementById('fuel').appendChild(newOprtion);
    })

    
    addBlurEvents();
    formNewcar.addEventListener('submit', (event) =>{
        event.preventDefault(); 
        cleraError()   

        let photoName = inputFoto.value
        if (photoName != "" && photoName != undefined){
            if(!photoName.match(REGEXP_PHOTO)){
                inputFoto.setCustomValidity('no es una foto valida')
            }else{
                inputFoto.setCustomValidity('')
            }
        }

        
        
        if(inputGearA.value || inputGearM.value){
            inputGearM.setCustomValidity('')         
        }else{
            inputGearM.setCustomValidity('Debes marcar una opcion')
        }
    
        
        let fuelEnviado = typesOfFuel.find((item) => item.id === Number(inputFuel.value))
        
        console.log(fuelEnviado)

        if(fuelEnviado == undefined){
            inputFuel.setCustomValidity('opcion no valida')       
        }else{
            inputFuel.setCustomValidity('')
        }

        if(!formNewcar.checkValidity()){
            
            errorNombre.textContent = inputNombre.validationMessage;
            errorOriginalPrice.textContent = inputOriginalPrice.validationMessage;
            errorDiscountPrice.textContent = inputDiscountPrice.validationMessage;
            errorStar.textContent = inputStar.validationMessage;
            errorAcepta.textContent = inputAcepta.validationMessage;
            errorKilometro.textContent = inputKilometro.validationMessage
            errorFoto.textContent = inputFoto.validationMessage;
            errorRadio.textContent = inputGearM.validationMessage;
            errorFuel.textContent = inputFuel.validationMessage

            return;
        }

        let prueba = document.querySelector('input[name="gear"]:checked').value

        let gear = true
        if(prueba > 0){
            gear = false;
        }
        
        const name = inputNombre.value
        const km = Number(inputKilometro.value)
        const original_price = Number(inputOriginalPrice.value)
        const discount_price = Number(inputDiscountPrice.value)
        const fuel = Number(inputFuel.value)
        const sale = false;
        const star = Number(inputStar.value)
        const manual_gear = gear
        removeAllChildNodes(productos)
        if(discount_price > 0){
        addCoche({name,km,original_price,discount_price,fuel,sale,star,fuel,manual_gear})
        mostrarCoches(products)
        return
        }
        addCoche({name,km,original_price,fuel,sale,star,fuel,manual_gear})
        mostrarCoches(products)
    })
    
}
)

    

function mostrarCoches(elementos){
   elementos.forEach(coche => {
    let newLine = document.createElement('div')
    newLine.innerHTML = `<div class="col mb-5">
    <div class="card h-100">
        <!-- Sale badge, sólo si está vendido-->
        ${coche.sale? '<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>':''}
        <!-- Product image-->
        <img class="card-img-top" src="media/photos/${coche.img}" alt="Imagen de _nombre_del_producto_" />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${coche.name}</h5>
                <!-- Product reviews, un div bi-star para cada estrella a pintar-->
                <div class="d-flex justify-content-center small text-warning mb-2">
                    ${estrellas(coche.stars)}
                </div>
                <!-- Product price-->
                ${coche.discount_price?`<span class="text-muted text-decoration-line-through">${coche.original_price.toLocaleString()} €</span>` + `${coche.discount_price.toLocaleString()}€`:`${coche.original_price} €`}
                <!-- Product details -->
                <p>
                    ${averiguarCombustible(coche.fuel)} <br>
                    ${coche.manual_gear?`Cambio manual`:`Cambio automatico`}
                    <br>${coche.km.toLocaleString()} km
                </p>
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class=" mostrar btn btn-outline-dark mt-auto" href="#">Mostrar</a></div>
        </div>
    </div>
    </div>`

    productos.appendChild(newLine);
    newLine.querySelector('.mostrar').addEventListener("click",function(){
        formulario.classList.remove('hide')
        coches.classList.add('hide')
        document.getElementById('name').value=coche.name
        document.getElementById('name').readOnly = true;
        
    })
   });
}


function limpiarForm(){
    formulario.classList.remove('hide')
    coches.classList.add('hide')   
    inputNombre.readOnly = false;
    inputNombre.value=''
    inputDiscountPrice.value=''
    inputKilometro.value=''
    inputStar.value=1;
    inputDiscountPrice.value='';
    inputFoto.value=''
    inputOriginalPrice.value=''
}



function estrellas(cantidad) {
    let resultado = ``
    if(cantidad){ 
        for( let i = 1; i<= cantidad; i++){
            resultado += `<div class="bi-star-fill"></div>`
        }
    }
    return resultado;
}

function averiguarCombustible(combustible){
    let fuel = typesOfFuel.find(item => item.id === combustible)
    return fuel? fuel.fuel : 'desconocido'
}

function toCurrency(amount){
    return amount.toLocaleString()
}

/*Errors*/
function addBlurEvents(){
    inputNombre.addEventListener('blur',()=>{
        errorNombre.textContent = inputNombre.validationMessage;
    })
    inputOriginalPrice.addEventListener('blur',()=>{
        errorOriginalPrice.textContent = inputOriginalPrice.validationMessage;
    })
    inputDiscountPrice.addEventListener('blur',()=>{
        errorDiscountPrice.textContent = inputDiscountPrice.validationMessage;
    })
    inputStar.addEventListener('blur',()=>{
        errorStar.textContent = inputStar.validationMessage;
    })
    
    inputKilometro.addEventListener('blur',()=>{
        errorKilometro.textContent = inputKilometro.validationMessage;
    })

    inputAcepta.addEventListener('blur',()=>{
        errorAcepta.textContent = inputAcepta.validationMessage;
    })
}



function addCoche(newCar){
    products.push(newCar)
    formulario.classList.add('hide')
    coches.classList.remove('hide')
    console.log(products[12])
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function cleraError(){
    errorNombre.textContent=null;
}

/*-----------------------------------
function checkInputValidation(input) {
    input.setCustomValidity('')
}

function renderInputError(input) {
    const errorSpan = input.nextElementSibling
    errorSpan.innerHTML = input.validationMessage
} */