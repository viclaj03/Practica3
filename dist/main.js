/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nlet productos = document.getElementById(\"products\")\n\nlet newLine = document.createElement('div')\n\nconst inputNombre = document.getElementById('name');\nconst errorNombre = document.getElementById('error-name');\n\nconst inputOriginalPrice = document.getElementById('original_price');\nconst errorOriginalPrice = document.getElementById('error-original');\n\n\nconst inputDiscountPrice = document.getElementById('discount_price');\nconst errorDiscountPrice = document.getElementById('error-discount');\n\nconst inputStar = document.getElementById('start');\nconst errorStar = document.getElementById('error-star');\n\nconst inputFuel = document.getElementById('fuel');\nconst errorFuel = document.getElementById('error-fuel');\n\nconst inputAcepta = document.getElementById('acepta');\nconst errorAcepta = document.getElementById('error-acepta');\n\nmostrarCoches(products)\n\nwindow.addEventListener('load', () => {\n    document.getElementById('newProduct').addEventListener(\"click\", function(){\n        var formulario = document.getElementById('formulario')\n        var coches = document.getElementById('productos')\n        formulario.classList.remove('hide')\n        coches.classList.add('hide')\n        limpiarForm();\n    }\n    )\n    document.getElementById('allProducts').addEventListener(\"click\", function(){\n        var formulario = document.getElementById('formulario')\n        var coches = document.getElementById('productos')\n        formulario.classList.add('hide')\n        coches.classList.remove('hide')\n\n    }\n    )\n\n    typesOfFuel.forEach(element =>{\n        let newOprtion = document.createElement('option')\n        newOprtion.innerHTML = element.fuel\n        newOprtion.value = element.id\n        document.getElementById('fuel').appendChild(newOprtion);\n    })\n\n    addBlurEvents();\n    \n}\n)\n\n     \n\nfunction mostrarCoches(elementos){\n   elementos.forEach(coche => {\n       let estrella = estrellas(coche.start)\n    let newLine = document.createElement('div')\n    newLine.innerHTML = `<div class=\"col mb-5\">\n    <div class=\"card h-100\">\n        <!-- Sale badge, sólo si está vendido-->\n        ${coche.sale? '<div class=\"badge bg-dark text-white position-absolute\" style=\"top: 0.5rem; right: 0.5rem\">Sale</div>':''}\n        <!-- Product image-->\n        <img class=\"card-img-top\" src=\"media/photos/${coche.img}\" alt=\"Imagen de _nombre_del_producto_\" />\n        <!-- Product details-->\n        <div class=\"card-body p-4\">\n            <div class=\"text-center\">\n                <!-- Product name-->\n                <h5 class=\"fw-bolder\">${coche.name}</h5>\n                <!-- Product reviews, un div bi-star para cada estrella a pintar-->\n                <div class=\"d-flex justify-content-center small text-warning mb-2\">\n                    ${estrellas(coche.stars)}\n                </div>\n                <!-- Product price-->\n                ${coche.discount_price?`<span class=\"text-muted text-decoration-line-through\">${coche.original_price.toLocaleString()} €</span>` + `${coche.discount_price.toLocaleString()}€`:`${coche.original_price} €`}\n                <!-- Product details -->\n                <p>\n                    ${averiguarCombustible(coche.fuel)} <br>\n                    ${coche.manual_gear?`Cambio manual`:`Cambio automatico`}\n                    <br>${coche.km.toLocaleString()} km\n                </p>\n            </div>\n        </div>\n        <!-- Product actions-->\n        <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent\">\n            <div class=\"text-center\"><a class=\" mostrar btn btn-outline-dark mt-auto\" href=\"#\">Mostrar</a></div>\n        </div>\n    </div>\n    </div>`\n\n    productos.appendChild(newLine);\n    newLine.querySelector('.mostrar').addEventListener(\"click\",function(){\n        var formulario = document.getElementById('formulario')\n        var coches = document.getElementById('productos')\n        formulario.classList.remove('hide')\n        coches.classList.add('hide')\n        document.getElementById('name').value=coche.name\n        document.getElementById('name').readOnly = true;\n        \n    })\n   });\n}\n\n\nfunction limpiarForm(){\n    var formulario = document.getElementById('formulario')\n    var coches = document.getElementById('productos')\n    formulario.classList.remove('hide')\n    coches.classList.add('hide')\n    document.getElementById('name').value=\"\"\n    document.getElementById('name').readOnly = false;\n}\n\n\n\nfunction estrellas(cantidad) {\n    let resultado = ``\n    if(cantidad){ \n        for( let i = 1; i<= cantidad; i++){\n            resultado += `<div class=\"bi-star-fill\"></div>`\n        }\n    }\n    return resultado;\n}\n\nfunction averiguarCombustible(combustible){\n    let fuel = typesOfFuel.find(item => item.id === combustible)\n    return fuel? fuel.fuel : 'desconocido'\n}\n\nfunction toCurrency(amount){\n    return amount.toLocaleString()\n}\n\nfunction addBlurEvents(){\n    inputNombre.addEventListener('blur',()=>{\n        errorNombre.textContent = inputNombre.validationMessage;\n    })\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;