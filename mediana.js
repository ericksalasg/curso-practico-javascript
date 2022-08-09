const calcularMediaAritmetica = (lista) => {
  
      let sumaLista = lista.reduce(
          (valorAcumulado = 0, nuevoElemento) =>{
              return valorAcumulado + nuevoElemento;
          }
      )
    
      
      const promedioLista = sumaLista / lista.length;
  
      return promedioLista
  }


const lista1 = [
    100,
    40000,
    500,
    200,
]; 

listaOrdenada = lista1.sort((a, b) => a - b);

console.log(listaOrdenada);

const mitadLista1 = parseInt(listaOrdenada.length / 2);

const esPar = (number) =>{
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
}

let mediana;

if (esPar(lista1.length)){
    
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;

} else{
    mediana = lista1[mitadLista1];
}