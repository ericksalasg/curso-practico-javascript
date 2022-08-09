/* const lista1 = [
    100,
    200,
    300,
    500
]; */

const calcularMediaAritmetica = (lista) => {

    

  /*   for (let i = 0; i < lista.length; i++) {
        
        sumaLista = sumaLista + lista[i];
        
    } */

    let sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) =>{
            return valorAcumulado + nuevoElemento;
        }
    )
  
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista
}
