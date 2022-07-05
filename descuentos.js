/* const precioOriginal = 120;
const descuento      = 18; */

 const calcularPrecioConDescuento = (precio, descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento           = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}


const calcPriceBtn = ()=>{
    const price = document.getElementById('InputPrice').value;
    const discount = document.getElementById('InputDiscount').value;
    const resultDiscount = document.getElementById('resultDiscount');

    const precioConElDescuento = calcularPrecioConDescuento(price,discount);

    resultDiscount.innerHTML = `El precio con descuento es: ${precioConElDescuento}` ;

}

