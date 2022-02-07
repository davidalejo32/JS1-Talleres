let errortop10 = document.getElementById('errorTop10');

// elegir top10 o media salarial
let resultado = document.getElementById('resultado');

function carga(){
   let calculos = document.getElementById('calculos');
   let calculosV = calculos.value;

   let buttonMediana = document.getElementById('calcular-mediana');
   let buttonMediana10 = document.getElementById('calcular-mediana10');

   if(calculosV === 'm-salarial') {
      buttonMediana.style.display = 'block';
      buttonMediana10.style.display = 'none';
      resultado.innerText =``;
      errortop10.innerText = ``;
   }else {
      buttonMediana.style.display = 'none';
      buttonMediana10.style.display = 'block';
      resultado.innerText =``;
      errortop10.innerText = ``;
   }
}
carga();


// utilizar lista precargada check

let opcionLista;

let divValoresList = document.getElementById('valor-list');

function selection(){
   let listaPrecargada = document.getElementById('lista-precargada').checked;

   if(listaPrecargada ===true) {
      divValoresList.style.display = 'none';
      opcionLista = true;
      resultado.innerText =``;
      errortop10.innerText = ``;
   }else {
      divValoresList.style.display = 'flex';
      opcionLista = false;
      resultado.innerText =``;
      errortop10.innerText = ``;
   }
}
selection();

// llenando la lista de valores precargados

for(let i = 0; i < colombia.length; i++){

   // traigo el elemento de la lista
   let precargadoList = document.getElementById('datos-precargados');
   // creo el elemento li
   var newli = document.createElement("li");
   // creo una etiqueta span
   var newSpan = document.createElement('b');
   // creo nodo para span
   let nameSpan = document.createTextNode(`$${colombia[i].salary}`);
   // creo el nodo para li con el texto
   let namesLis = document.createTextNode(`${colombia[i].name}, `);
   // le agrego el texto al span
   newSpan.appendChild(nameSpan);
   // le agrego el texto a la lista
   newli.appendChild(namesLis);
   newli.appendChild(newSpan);
   // agrego la lista al html
   precargadoList.appendChild(newli);
};


// agregar a la lista

let condiNombre;
let condiValor;
let listaVcargados = [];

function agregarValores(){
   
   let nombre = document.getElementById('nombre');
   let nombreV = nombre.value;

   let valor = document.getElementById('valores-cargador');
   let valorV = Number(valor.value);
   
   let errorNombre = document.getElementById('error-nombre');
   let errorValor = document.getElementById('error-valor');

   if(nombreV ==="" || nombreV === " "){
      nombre.style.border = "1px solid rgba(243, 63, 63, 0.926)";
      errorNombre.innerText = `Por favor ingrese un valor correcto`;
      condiNombre = false;
   }else {
      condiNombre = true;
      nombre.style.border = "1px solid black";
      errorNombre.innerText = ``;
      

   }

   if(valorV ==="" || valorV === " " || valorV === 0){
      valor.style.border ="1px solid rgba(243, 63, 63, 0.926)";
      errorValor.innerText = `Por favor ingrese un valor correcto`;
      condiValor = false;
   }else{
      condiValor = true;
      valor.style.border ="1px solid black";
      errorValor.innerText = ``;

   }

   if (condiNombre === true && condiValor === true) {
      nombre.value = "";
      valor.value = "";
      listaVcargados.push({
         name:`${nombreV}`,
         salary: `${valorV}`
      });
      
      // traigo el elemento de la lista
      let datosCargados = document.getElementById('datos-cargados');
      // creo el elemento li
      var newli = document.createElement("li");
      // creo una etiqueta span
      var newB = document.createElement('b');
      // creo nodo para span
      let name = document.createTextNode(`${nombreV}, `);
      // creo el nodo para li con el texto
      let value = document.createTextNode(`$${valorV}`);
      // le agrego el texto al span
      newB.appendChild(value);
      // le agrego el texto a la lista
      newli.appendChild(name);
      newli.appendChild(newB);
      // agrego la lista al html
      datosCargados.appendChild(newli);
 }

}


// calcular mediana salarial 

function calcularMediana(){
   if(opcionLista === true){
      const salariosCol = colombia.map(
         function(persona){
            return persona.salary;
         }
      );

      const salariosColSorted = salariosCol.sort(
         function(salaryA, salaryB){
            return salaryA - salaryB;
         }
      ); 
      const medianaGeneralCol = medianaSalarios(salariosColSorted);
      resultado.innerText = `La media Salarial es: ${medianaGeneralCol}`
   } else {
      if (listaVcargados.length > 0){

         const salariosCarg = listaVcargados.map(
            function(persona){
               return persona.salary;
            }
         );
   
         const salariosCargSorted = salariosCarg.sort(
            function(salaryA, salaryB){
               return salaryA - salaryB;
            }
         ); 
   
         const medianaGeneralCarg = medianaSalarios(salariosCargSorted);
         resultado.innerText = `La media Salarial es: ${medianaGeneralCarg}`  
      } 
   }
}




// calcular media salarial top 10%
function calcularMediana10(){

   if(opcionLista === true){
      const salariosCol = colombia.map(
         function(persona){
            return persona.salary;
         }
      );

      const salariosColSorted = salariosCol.sort(
         function(salaryA, salaryB){
            return salaryA - salaryB;
         }
      ); 
      const spliceStart = ((salariosColSorted.length * (100 - 10)) / 100);
      const spliceCount = salariosColSorted.length - spliceStart;
      const salariosColtop10 = salariosColSorted.splice(spliceStart, spliceCount);
   
      const medianaTop10Col = medianaSalarios(salariosColtop10);
      resultado.innerText = `La media Salarial del Top 10% es: ${medianaTop10Col}`
   } else {
      if (listaVcargados.length > 12){

         const salariosCarg = listaVcargados.map(
            function(persona){
               return persona.salary;
            }
         );
         console.log(salariosCarg);
         

         const salariosCargSorted = salariosCarg.sort(
            function(salaryA, salaryB){
               return salaryA - salaryB;
            }
         ); 
         console.log(salariosCargSorted);


         const spliceStartcar = ((salariosCargSorted.length * (100 - 10)) / 100);
         console.log(spliceStartcar);


         const spliceCountcar = salariosCargSorted.length - spliceStartcar;
         console.log(spliceCountcar);


         const salariosCargtop10 = salariosCargSorted.splice(spliceStartcar, spliceCountcar);
         console.log(salariosCargtop10);

         const medianaTop10Carg = medianaSalarios(salariosCargtop10);

         resultado.innerText = `La media Salarial del Top 10% es: ${medianaTop10Carg}`;
         console.log(medianaTop10Carg);
      } else {
         errortop10.innerText= `Tiene que ingresar 13 personas minimo`;
      }
   }


}





