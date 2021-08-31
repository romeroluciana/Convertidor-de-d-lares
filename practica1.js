function cambiarDolares() {
    let dolarHoy=102.5
    
    let ingresoPesos=document.getElementById("pesos").value
    resultado=  ingresoPesos / dolarHoy

    let impuestoGanancias = ingresoPesos*0.35
    let impuestoPais = ingresoPesos*0.3
    let valorFinal = parseInt(ingresoPesos) + parseInt(impuestoPais) + parseInt(impuestoGanancias);
   
    if(resultado<=0){
        alert('Su calculo no es posible. Intente nuevamente.')
    }
        else{
        alert("$"+ ingresoPesos + " pesos argentinos son: US$" +  Math.round(resultado) + ". El impuesto país es de $" + impuestoPais + " y el impuesto a las ganancias es de $" + impuestoGanancias + ". El total a pagar es  $" + valorFinal)
    }




}