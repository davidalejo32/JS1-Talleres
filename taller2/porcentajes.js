// calcular porcentaje

function porcentaje(precio, porcentaje){
   return  (precio * (100 - porcentaje)) / 100;
}


//  cupones
let cupones = [
   {
      name: "promo10",
      descuento: 10,
   },
   {
      name: "promo20",
      descuento: 20,
   },
   {
      name: "promo30",
      descuento: 30,
   },
   {
      name: "promo30",
      descuento: 30,
   },
   ];


   let nameCupon = document.getElementById('name');
   let valueCupon = document.getElementById('value');
   let cunponB = document.getElementById('cupon-button');
   let errorName = document.getElementById('error-name');


function mostrar(){
   let select = document.getElementById("checkbox").checked;

   if(select === true){
      nameCupon.style.display = 'flex';
      valueCupon.style.display = 'flex';
      cunponB.style.display = 'block';
   }else {
      nameCupon.style.display = 'none';
      valueCupon.style.display = 'none';
      cunponB.style.display = 'none';
   }
}

mostrar();



function agregarCupones(){

   let name;
   let value;

   let inputCupon = document.getElementById('nameCupon');
   let nameCuponV = inputCupon.value;

   let inputValue =document.getElementById('valueCupon');
   let valueCuponV = inputValue.value;

   let errorValue = document.getElementById('errorValue');


   let control1;
   let control2;

   if(nameCuponV === "" || nameCuponV === " "){
      errorName.innerText = `Por favor ingrese un valor correcto`;
   } else {
      errorName.innerText = ``;
      name = nameCuponV;
      control1 = true;

   }

   if(valueCuponV === "" || valueCuponV === " "){
      errorValue.innerText = `Por favor ingrese un valor correcto`;
   } else {
      errorValue.innerText = ``;
      value = valueCuponV;
      control2 = true;
   }

   if (control1 === true && control2 === true){

      cupones.push({
         name: name,
         descuento: value,
      });
      // traigo el elemento de la lista
      let lista = document.getElementById('lista');
      // creo el elemento li
      var newli = document.createElement("li");
      // creo el nodo con el texto
      let cuponLis = document.createTextNode(`${name}`);
      // le agrego el texto a la lista
      newli.appendChild(cuponLis);
      // agrego la lista al html
      lista.appendChild(newli);
      inputCupon.value = ``;
      inputValue.value = ``;  
   }
}


// opciones si no

let opciones;
let porcentajeNum = document.getElementById('porcentajenNum');


function option1(){
   let cuponDiv = document.getElementById('cupon-code');
   cuponDiv.style.display = 'none';
   porcentajeNum.style.display = 'block';
   opciones = false;
}

option1();

function option2(){
   let cuponDiv = document.getElementById('cupon-code');
   cuponDiv.style.display = 'block';
   porcentajeNum.style.display = 'none';
   opciones=true;
   
}


// mostrar porcentajes con validaciones en html

function calcularPorcentaje(){
   let inputPrecio = document.getElementById('precio');
   let inputPrecioV = Number(inputPrecio.value);

   let errorPre = document.getElementById('error-pre');
   let errorPor = document.getElementById('error-por');

   let inputPorcentaje = document.getElementById('porcentaje');
   let inputPorcentajeV =  Number(inputPorcentaje.value);

   let respuesta = document.getElementById('respuesta');

   let erorCupon = document.getElementById('error-cupon');


   let inputcupon = document.getElementById('cupon');
   let cuponV = inputcupon.value;

   const isCouponValueValid =function (coupon) {
      return coupon.name === cuponV;
   };

   if(inputPrecioV === "" || inputPrecioV === " " || inputPrecioV === 0){
      errorPre.innerText = `Por favor ingrese un valor correcto`;
      respuesta.style.display = "none";
   }else {
      errorPre.innerText = ``;
      respuesta.style.display = "block";
   }


   if(opciones === false) {
      let porcentajePrice = porcentaje(inputPrecioV,inputPorcentajeV);
      respuesta.innerText = `Descuento aplicado del: ${inputPorcentajeV}%\nEl precio es: $${porcentajePrice}`;

      if(inputPorcentajeV === "" || inputPorcentajeV === " " || inputPorcentajeV === 0){
         errorPor.innerText = `Por favor ingrese un valor correcto`;
         respuesta.style.display = "none";
      }else {
         errorPor.innerText = ``;
         respuesta.style.display = "block";
      }
   } else{
      if(cuponV === "" || cuponV === " " || cuponV === 0){
         erorCupon.innerText = `Por favor ingrese un valor correcto`;
         respuesta.style.display = "none";
      }else {
         erorCupon.innerText = ``;
         respuesta.style.display = "block";
         const userCoupon = cupones.find(isCouponValueValid);     
         if (!userCoupon) {
             alert("El cupón " + cuponV + " no es válido");
             respuesta.innerText = ``;
         }else {
            let descuentocupon = userCoupon.descuento;
            let descuento = porcentaje(inputPrecioV,descuentocupon);
            respuesta.innerText = `Cupon aplicado Correctamente ✅\nDescuento aplicado del: ${descuentocupon}% \nEl precio con descuento es: $${descuento}`;
            
         };
      };
   };
};

