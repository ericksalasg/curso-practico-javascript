/* Helpers */

const esPar = (numero) => {
    return (numero % 2 === 0);
}

const calcularMediaAritmetica = (lista) => {
  
    let sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) =>{
            return valorAcumulado + nuevoElemento;
        }
    )
  
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista
}


/* Obteniendo los salarios de las personas */

const salariosPe = peru.map(
    (persona) =>{
        return persona.salary;
    }
)


const salariosPemin = salariosPe.sort((a,b) => a - b);



/* Calculadora de medianas */

const medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1]; 
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana;
    } else{
        const personaMitad = lista[mitad]; return personaMitad
    }
}



/* Mediana general */

const medianaGeneralPe = medianaSalarios(salariosPemin);





// Mediana del top 10%


const spliceStart = (salariosPemin.length * 90) / 100;
const spliceCount = salariosPemin.length - spliceStart;


const salariosPeTop10 = salariosPemin.splice(spliceStart,spliceCount);

const medianaPeTop10= medianaSalarios(salariosPeTop10);



console.log({
    medianaGeneralPe,
    medianaPeTop10
});