// aqui vamos a crear la mediana el porcentaje etc ......

// vamos a crear una lista que solo tenga los salarios de las personas pero no los nombres

// map itera por cada uno de los elementos que estan en la lista de colombia
/* const salariosCol = colombia.map(
   function(persona){
      return persona.salary;
   }
); */

// ordenando este array
// sort me ordena el array con una funcion anonima

/* const salariosColSorted = salariosCol.sort(
   function(salaryA, salaryB){
      return salaryA - salaryB;
   }
);
 */

// vamos a calcular la mediana 

// vamos a validar si el numero es par

function esPar(numero){
   return (numero % 2 === 0);
}

// haremos la funcion de calcular el promedio


function promedio(lista){
   const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;
      }
   ); 
   const promedioLista = sumaLista / lista.length;
   return promedioLista;
}


// vamos a calcular la mediana general

function medianaSalarios(lista){
   const mitad = parseInt(lista.length /2 );

   if(esPar(lista.length)){
      const personaMitad1 = lista[mitad - 1];
      const personaMitad2 = lista[mitad];
   
      const mediana = promedio([personaMitad1, personaMitad2]);
      return mediana;

   } else {
      const personaMitad = lista[mitad];
      return personaMitad;
   };
}


// ahora vamos a calcular la mediana del top 10%
// de la lista ordenada vamos a sacar las ultimas posiciones, cuantas posiciones? lo que represente el 10%

// splice() recibe dos argumentos, 
// 1 donde queremos hacer el corte  para eso tenemos que pasarle la posicion
// 2 cuantas tajadas queremos que saque nuestro cuchillo
// ejemplo /arrayEjemplo = [0,1,2,3,4,5,|||6,7|||,8,9]  arrayEjemeplo.splice(5,2);
//entonces va a quitar el 6 y el 7 del array y lo va a guardar en la variable como un array


// entonces tenemos que emepzar desde el 90% que seria spliceStart y el resto seria el 10% hasta el final
// const spliceStart = ((salariosColSorted.length * (100 - 10)) / 100);
//  ya sabemos que en spliceStart empezamos en el 90% pero no tenemos esa lista, lo que tenemos es un numero  
// entonces la cantidad total de  personas le queremos restar el spliceStart  es decir que si salarioscolsorted es 20 le restamos 2 que seria el 10% y esas ultimas dos posiciones van a ser el top 10% de las personas en colombia
// const spliceCount = salariosColSorted.length - spliceStart;

// const salariosColtop10 = salariosColSorted.splice(spliceStart, spliceCount);


// ahora vamos a sacar la mediana del top 10%

// const medianaTop10Col = medianaSalarios(salariosColtop10);

// ahora vamos llamar a la funcion de mediana salarios con la lista de salarios ordenados y guardarla

// const medianaGeneralCol = medianaSalarios(salariosColSorted);



// console.log({medianaGeneralCol,medianaTop10Col});