// Código del cuadrado
console.group('Cuadrados')

/* const ladoCuadrado = 5; */
/* 
console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`); */


const perimetroCuadrado = (lado) => {
    return lado * 4;
} 

perimetroCuadrado(5)
/* 
console.log(`El perímetro del cuadrado es ${perimetroCuadrado} cm`); */


/* const areaCuadrado = ladoCuadrado * ladoCuadrado; */

const areaCuadrado = (lado) => {
    return lado * lado;
} 

/* console.log(`El area del cuadrado es ${perimetroCuadrado} cm°2`); */

console.groupEnd();




// Código del triangulo

console.group('Triangulos')

/* const ladoTriangulo1   = 6;
const ladoTriangulo2   = 6;
const baseTriangulo    = 4;
const alturaTriangulo = 5.5 */

/* console.log(`Los lados del triangulo miden : ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm `);
 */
/* console.log(`La altura del triangulo es ${alturaTriangulo}cm`); */

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo1 + baseTriangulo;
 */

const perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
} 

/* const areaTriangulos = (baseTriangulo * alturaTriangulo) / 2; */

const areaTriangulos = (base, altura) => {
    return (base * altura) / 2;
} 
/* 
console.log(`El perímetro del triangulo es ${perimetroTriangulo}cm`);
 */


/* console.log(`El área del triangulo es ${areaTriangulos} cm2`);
 */
console.groupEnd();




// Código del circulo
console.group('Círculos')

// radio
/* const radioCirculo = 4;
console.log(`El radio del circulo es ${radioCirculo} cm`); */

// diámetro
/* const diametroCirculo = radioCirculo*2
console.log(`El diámetro del circulo es ${diametroCirculo} cm`); */


const diametroCirculo = (radio) => {
    return radio * 2;
} 

// pí
const pi =  Math.PI;
console.log(`PI es ${pi}`);

// Circunferencia

/* const perimetroCirculo = diametroCirculo * pi;
console.log(`El perímetro del circulo es ${perimetroCirculo}cm`); */

const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 


// area
/* const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log(`El área del circulo es ${areaCirculo}cm2`); */

const areaCirculo = (radio) => {
    return (radio * radio) * pi;
} 

console.groupEnd();



/* VINCULANDO ELEMENTOS DEL HTML  */

const calcularPerimetroCuadrado = () =>{
    const input = document.getElementById('input_cuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}


const calcularAreaCuadrado = () =>{
    const input = document.getElementById('input_cuadrado');
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}

