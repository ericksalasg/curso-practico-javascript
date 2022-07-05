const aplicarCupon = () =>{
    const cupones = [
        "SONY2022", // 20%
        "SONYVERANO", // 25%
        "ESCUCHACONSONY" // 30%
    ]
    
    
    // Referencias en html
    
    
    const precioConDescuentohtml = document.querySelector('#total__price__number'),
          procentajeDescuentohtml = document.querySelector('#discount__percentage'),
          descuentohtml = document.querySelector('#discount__price__number'),
          alertaHTML = document.querySelector('.alerta__cupon'),
          InputCupon = document.querySelector('#InputCupon').value;
    
        let descuentoAplicado;
        const precioProducto = 1500;

        switch(InputCupon) {
            case cupones[0]: 
                descuentoAplicado = 20;
            break;
            case cupones[1]:
                descuentoAplicado = 25;
            break;
            case cupones[2]:
                descuentoAplicado = 30;
            break;
          }
    
    // funcion de la aplicacion del descuento
    
    const calcularDescuentoCupon = (precio,descuento) => {
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento           = (precio * porcentajePrecioConDescuento) / 100;
        const descuentoPrice               = (precio * descuento) / 100
    
        precioConDescuentohtml.innerHTML = precioConDescuento;
        procentajeDescuentohtml.innerHTML =  `${descuento}%`;
        descuentohtml.innerHTML = `-$${descuentoPrice}`;
        alertaHTML.innerHTML = 'CUPÓN APLICADO!!!'
    }
    
    calcularDescuentoCupon(precioProducto,descuentoAplicado);
    
}




      