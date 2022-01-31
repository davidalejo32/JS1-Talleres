// Area de un cuadrado L*l

function areaCuadrado(num){
   return num*num
};

function calcularAreaCuadrado(){
   let inputCuadrado = document.getElementById('inputCuadrado');
   let inputCuadradoValue = Number(inputCuadrado.value);

   let resultado = document.getElementById('resultadoCuadrado');

   let mensajeError = document.getElementById('error');


   if(inputCuadradoValue === "" || inputCuadradoValue == " "){
      mensajeError.innerText = `Por favor ingrese un valor correcto`;
      inputCuadrado.style.border = "1px solid rgba(240,0,0,0.624)";
      inputCuadrado.style.color = "rgba(240,0,0,0.624)";
      resultado.innerText = ``;
   }else{
      let areaC = areaCuadrado(inputCuadradoValue);
      resultado.innerText = `El area es: ${areaC}`;
      mensajeError.innerText = ``;
      inputCuadrado.style.border = "none";
      inputCuadrado.style.color = "black";
   }

}


// Perimetro de un cuadrado L*4 o L+L+L+L
function PerimetroCuadrado(num){
   return num*4
};

function calcularPerimetroCuadrado() {
   let inputCuadrado = document.getElementById('inputCuadrado');
   let inputCuadradoValue = Number(inputCuadrado.value);


   let resultado = document.getElementById('resultadoCuadrado');

   let mensajeError = document.getElementById('error');

   if(inputCuadradoValue === "" || inputCuadradoValue == " "){
      mensajeError.innerText = `Por favor ingrese un valor correcto`;
      inputCuadrado.style.border = "1px solid rgba(240,0,0,0.624)";
      inputCuadrado.style.color = "rgba(240,0,0,0.624)";
      resultado.innerText = ``;
      
   }else{
      let perimetroC = PerimetroCuadrado(inputCuadradoValue);
      resultado.innerText = `El perimetro es: ${perimetroC}`;
      mensajeError.innerText = ``;
      inputCuadrado.style.border = "none";
      inputCuadrado.style.color = "black";
   }
}


// area circulo
function areaCirculo(radio){
   let pi = Math.PI;
   return (radio*radio) * pi
};

function calcularAreaCirculo() {
   let inputUser = document.getElementById('radioCirculo');
   let inputValue = Number(inputUser.value);

   let error = document.getElementById('errorCirculo');

   let resultadoCirculo = document.getElementById('resultadoCirculo');

   if(inputValue === "" || inputValue === " " || inputValue === 0){
      inputUser.style.border = "1px solid rgba(240,0,0,0.624)";
      inputUser.style.color = "rgba(240,0,0,0.624)";
      error.innerText = `Por favor ingrese un valor correcto`;
      resultadoCirculo.innerText = ``;
   } else {

      let area = Math.round(areaCirculo(inputValue)*100)/100;
      resultadoCirculo.innerText = `El area es: ${area}`;
      inputUser.style.border = "none";
      inputUser.style.color = "black";
      error.innerText = ``;
   }

}


// perimetro circulo
function perimetroCirculo(radio){
   let diametroCirculo = radio * 2;
   let pi = Math.PI;
   let perimetroCiculo = diametroCirculo * pi;
   return perimetroCiculo;
};

function calcularPerimetroCirculo(){
   let inputUser = document.getElementById('radioCirculo');
   let inputUservalue = Number(inputUser.value);

   let error = document.getElementById('errorCirculo');

   let resultado = document.getElementById('resultadoCirculo');

   if(inputUservalue === "" || inputUservalue === " " || inputUservalue === 0){
      inputUser.style.border="1px solid rgba(240,0,0,0.624)";
      inputUser.style.color="rgba(240,0,0,0.624)";
      error.innerText = `Por favor ingrese un valor correcto`;
      resultado.innerText = '';
   } else {
      let perimetro = Math.round(perimetroCirculo(inputUservalue)*100) /100;
      inputUser.style.border="none";
      inputUser.style.color="black";
      resultado.innerText = `El perimetro es: ${perimetro}`;
      error.innerText = ``;

   }
}


// select Triangulo

let resultado = document.getElementById('resultadoTriangulo');
let arrorAltura = document.getElementById('errorAltura');


function option(){
   let tipos = document.getElementById('tipos');
   let tiposValue = tipos.value;
   let errorA = document.getElementById('errorA');
   let errorB = document.getElementById('errorB');
   let errorBase = document.getElementById('errorBase');
   
   let altura = document.getElementById('altura');
   let buttonArea = document.getElementById('calcularArea');
   let buttonPerimetro = document.getElementById('calcularPerimetro');

   let inputbase = document.getElementById('base-triangulo');

   if(tiposValue === "calcular-perimetro"){
      altura.style.display = "none";
      buttonArea.style.display = "none";
      let ladoA = document.getElementById('ladoA').style.display ="flex";
      let ladoB = document.getElementById('ladoB').style.display ="flex";
      buttonPerimetro.style.display = 'block';
      resultado.innerText = ``;
      arrorAltura.style.display='none';
      errorA.style.display = 'block';
      errorB.style.display = 'block';
   }else {
      altura.style.display = "flex";
      let ladoA = document.getElementById('ladoA').style.display ="none";
      let ladoB = document.getElementById('ladoB').style.display ="none";
      buttonArea.style.display = "block";
      buttonPerimetro.style.display = "none"
      resultado.innerText = ``;
      errorA.style.display = 'none';
      errorB.style.display = 'none';
      errorBase.innerText=``;
      inputbase.style.border = 'none';
      inputbase.style.color = 'black';
      arrorAltura.style.display='block';
   }
}

option();


//  perimetro del triangulo

function  perimetroTriangulo (ladoA, ladoB, base){
   return ladoA+ladoB+base
}

function calcularPerimetroTriangulo(){
   let ladoA = document.getElementById('left-triangulo');
   let ladoAValule = Number(ladoA.value);
   let ladoB = document.getElementById('rigth-triangulo');
   let ladoBValule = Number(ladoB.value);
   
   let base = document.getElementById('base-triangulo');
   let baseAValule = Number(base.value);

   let perimetro = perimetroTriangulo(ladoAValule, ladoBValule, baseAValule);

   let resultado = document.getElementById('resultadoTriangulo');




   if(ladoAValule === " " || ladoAValule === "" || ladoAValule === 0){
      ladoA.style.border = '1px solid rgba(240,0,0,0.624)';
      ladoA.style.color = 'rgba(240,0,0,0.624)';
      errorA.innerText = `Por favor ingrese un valor correcto`
      resultado.innerText = ``
   } else {
      errorA.innerText = ``
      resultado.innerText = `El perimetro es: ${perimetro}`
      ladoA.style.color = 'black';
      ladoA.style.border = 'none';
   };

   if(ladoBValule === " " || ladoBValule === "" || ladoBValule === 0){
      ladoB.style.border = '1px solid rgba(240,0,0,0.624)';
      ladoB.style.color = 'rgba(240,0,0,0.624)';
      errorB.innerText = `Por favor ingrese un valor correcto`
      resultado.innerText = ``
   }else{
      errorB.innerText = ``
      resultado.innerText = `El perimetro es: ${perimetro}`
      ladoB.style.color = 'black';
      ladoB.style.border = 'none';
   }

   if(baseAValule === " " || baseAValule === "" || baseAValule === 0){
      base.style.border = '1px solid rgba(240,0,0,0.624)';
      base.style.color = 'rgba(240,0,0,0.624)';
      errorBase.innerText = `Por favor ingrese un valor correcto`
      resultado.innerText = ``
   }else{
      errorBase.innerText = ``
      resultado.innerText = `El perimetro es: ${perimetro}`
      base.style.color = 'black';
      base.style.border = 'none';
   }
}

// area triangulo

function areaTriangulo(base, altura){
   return (base * altura) / 2;
};



function calcularAreaTriangulo(){

   let base = document.getElementById('base-triangulo');
   let baseAValule = Number(base.value);

   let altura = document.getElementById('altura-triangulo');
   let alturaValule = Number(altura.value);

   let errorAltura = document.getElementById('errorAltura');

   let areaTrianguloR = areaTriangulo(baseAValule,alturaValule);

   let resultadoTriangulo = document.getElementById('resultadoTriangulo');

   if(baseAValule === " " || baseAValule === "" || baseAValule === 0){
      base.style.border = '1px solid rgba(240,0,0,0.624)';
      base.style.color = 'rgba(240,0,0,0.624)';
      errorBase.innerText = `Por favor ingrese un valor correcto`
      resultado.innerText = ``
   }else{
      errorBase.innerText = ``
      resultadoTriangulo.innerText = `El area es: ${areaTrianguloR}`
      base.style.color = 'black';
      base.style.border = 'none';
   };

   if(alturaValule === " " || alturaValule === "" || alturaValule === 0){
      altura.style.border = '1px solid rgba(240,0,0,0.624)';
      altura.style.color = 'rgba(240,0,0,0.624)';
      errorAltura.innerText = `Por favor ingrese un valor correcto`
      resultado.innerText = ``
   }else{
      errorAltura.innerText = ``;
      resultadoTriangulo.innerText = `El area es: ${areaTrianguloR}`;
      altura.style.color = 'black';
      altura.style.border = 'none';
   };
}

