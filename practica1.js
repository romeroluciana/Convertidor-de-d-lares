let cambiarDolares=()=> {
    let dolarHoy=103.5
    let ingresoPesos=document.getElementById("pesos").value
    resultado=  ingresoPesos / dolarHoy

    let impuestoGanancias = ingresoPesos*0.35
    let impuestoPais = ingresoPesos*0.3
    let valorFinal = parseInt(ingresoPesos) + parseInt(impuestoPais) + parseInt(impuestoGanancias);
   
    if(resultado<=0){
        alert('Su calculo no es posible. Intente nuevamente.')
    }
        else{
        document.getElementById('resultadop').textContent="$"+ ingresoPesos + " pesos argentinos son: US$" +  Math.round(resultado) + ". El impuesto país es de $" + Math.round(impuestoPais) + " y el impuesto a las ganancias es de $" + Math.round(impuestoGanancias) + ". El total a pagar es  $" + valorFinal.toFixed(1)
        //alert("$"+ ingresoPesos + " pesos argentinos son: US$" +  Math.round(resultado) + ". El impuesto país es de $" + Math.round(impuestoPais) + " y el impuesto a las ganancias es de $" + Math.round(impuestoGanancias) + ". El total a pagar es  $" + valorFinal.toFixed(1))
    }
}

let boton= document.getElementById("boton")
boton.addEventListener("click", cambiarDolares)