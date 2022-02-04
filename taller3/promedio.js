// calcular promedio

function calcularPromedio(lista) {
   
   const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;
      }
   ); 

   const promedioLista = sumaLista / lista.length;

   return promedioLista;
}


// calcular la mediana

function esPar(numero) {
   if(numero % 2 === 0){
      return true;
   } else {
      return false;
   }
}

function calcularMediana(lista) {
   
   let listaOrdenada = lista.sort(function(a , b){
      return a - b;
   });

   const mitadLista = parseInt(listaOrdenada.length / 2);

   let mediana;
   
   if (esPar(listaOrdenada.length)){
      const elemento1 = listaOrdenada[mitadLista];
      const elemento2 = listaOrdenada[mitadLista-1];
  
      const promedioElemento1y2 = calcularPromedio([elemento1,elemento2])
   
      mediana = promedioElemento1y2;
   } else {
      mediana = listaOrdenada[mitadLista];
   }

   return mediana;
}


// calcular moda

function calcularModa(lista){
   const listaCount = {};

   lista.map(
      function(elemento){
         if(listaCount[elemento] ){
            listaCount[elemento] += 1;
         } else {
            listaCount[elemento] = 1;
         }
      }
   );

   const listaArray = Object.entries(listaCount).sort(
      function(valorAcumulado, nuevoValor){
         return valorAcumulado[1] - nuevoValor [1]
      }
   );
   console.log(listaArray);
      
   const moda = listaArray[listaArray.length - 1];

   console.log(moda);
   return moda;
}

let lista = [2,5,5,7,9,10];
console.log(calcularModa(lista));

// interacutando con html promedio

function calcularPromedioHtml(){
   let inputUser = document.getElementById("inputUser");
   let inputValue = inputUser.value;
   let error = document.getElementById('error');
   let inputPromedio = document.getElementById("promedio");


   if(inputValue === "" || inputValue === " "){
      inputUser.style.border = '1px solid rgba(243, 63, 63, 0.926)'
      error.innerText = `Por favor ingrese un valor correcto`;
      inputPromedio.innerText = ``
   } else {
      inputUser.style.border = '1px solid black'
      error.innerText = ``;
      let inputArray = inputValue.split(',');
      
      let arrayNum = [];
      for(let i = 0; i < inputArray.length; i++){
         arrayNum.push(parseInt(inputArray[i]));
      }
   
      let promedio = Math.round(((calcularPromedio(arrayNum)+Number.EPSILON)*100) / 100) ;
   
      inputPromedio.innerText = `El promedio es: ${promedio}`
   }
}

// arrayNum [1,2,3,4,5,6]

// interancuando con html  mediana

function calcularMedianaHtml(){
   let inputUser = document.getElementById("inputUser");
   let inputValue = inputUser.value;
   let inputArray = inputValue.split(',');
   let inputMediana = document.getElementById("mediana");


   if(inputValue === "" || inputValue === " "){
      inputUser.style.border = '1px solid rgba(243, 63, 63, 0.926)'
      error.innerText = `Por favor ingrese un valor correcto`;
      inputMediana.innerText = ``;
   }else {

      let arrayNum = [];
      for(let i = 0; i < inputArray.length; i++){
         arrayNum.push(parseInt(inputArray[i]));
      }
   
      let mediana = calcularMediana(arrayNum);
   
      inputMediana.innerText = `La mediana de es: ${mediana}`;
   }
   
}


// interancuando con html  moda


function calcularModaHtml(){
   let inputUser = document.getElementById("inputUser");
   let inputValue = inputUser.value;
   let inputArray = inputValue.split(',');
   let inputModa = document.getElementById("moda");


   if(inputValue === "" || inputValue === " "){
      inputUser.style.border = '1px solid rgba(243, 63, 63, 0.926)'
      error.innerText = `Por favor ingrese un valor correcto`;
      inputModa.innerText = ``; 

   }else {

      let arrayNum = [];
      for(let i = 0; i < inputArray.length; i++){
         arrayNum.push(parseInt(inputArray[i]));
      }
   
      let moda = calcularModa(arrayNum);
   
      inputModa.innerText = `La moda de es: ${moda[0]} y se repite ${moda[1]} veces`; 
   }
   }
   