/* Sistema de turnos */

/* for(let i = 1; i <= 10; i++){
    let nombre = prompt("ingrese su nombre");
    alert("Su turno es Numero" + i + " Nombre: " + nombre);    

}

alert("Nos quedamos sin turnos disponibles para hoy") */

/* Cupon de descuento */

/* let cupon = prompt("Ingrese su cupon")

while(cupon != "cupones2022"){
    alert("Ha ingresado un codigo incorrecto");

    cupon = prompt("Ingresar un cupon");
}
 */

function calcularPrecio(a, b){
    let condicionFiscal = prompt("Ingrese su conficion fiscal (RI; CF; MT)");

    while(condicionFiscal !== "RI" && condicionFiscal !== "CF" && condicionFiscal !== "MT"){

    condicionFiscal = prompt("Ingrese su condicion fiscal")
    }

    if(condicionFiscal === "RI"){
        alert("el precio neto (sin iva incluido) es $100");
    }else if (condicionFiscal === "CF"){
        alert("el precio con iva es de $121");
    }else if(condicionFiscal === "MT"){
        alert("el precio con iva es de $121");
    }
}

calcularPrecio()