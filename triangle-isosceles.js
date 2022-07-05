const alturaTrianguloIsosceles = (lado1, lado2, base) =>{
    if (lado1 === lado2 && lado1 != base ) {
        const altura = Math.sqrt(  (lado1 * lado2) - (base * base / 4) );

        alert(altura);
    }else{
        alert('Las medidas ingresadas no corresponden a las de un triangulo isosceles')
    }
}


/* Vinculando */

/* const calcularAltura = () =>{
    const input = document.getElementById('input_triangulo');
    const value = input.value;

    const altura = alturaTrianguloIsosceles(value)
    alert(altura);
} */