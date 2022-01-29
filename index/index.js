const grande = document.querySelector('.grande')
// el all es por tener varios puntos
const punto = document.querySelectorAll('.punto')

const flecha = document.querySelectorAll('.flecha');

// cuando hago click en punto
   //saber la posicion de ese punto
   // aplicar un transform tranalateX al grande
   // quitar la clase activo de TODOS los puntos 
   // añadir la clase activo al punto que hemos hecho click

// recorrer todos los puntos
punto.forEach( ( cadaPunto, i)=> {
   // asignamos un click a cada punto 
   punto[i].addEventListener('click',()=>{
      // guardar la posicion de ese punto
      let posicion = i;
      // posicion es 0 transfromX 0
      // posicion es 1 transformx es -50%
      // operacion = posicion * -50

      // calculando el espacio que debe desplazarse el grande
      let operacion = posicion * -25;

      // movemos el grande 
      grande.style.transform = `translateX(${ operacion}%)`

      // Recorremos todos los puntos
      punto.forEach( (cadaPunto, i)=>{
         // quitamos la clase Activo a todos los puntos 
         punto[i].classList.remove('activo')
      } )
      
      // Añadir la clase activa en el punto que hemos hecho click
      punto[i].classList.add('activo')
   })
});


// flecha
flecha.forEach( ( cadaPunto, i)=> {
   // asignamos un click a cada punto 
   flecha[i].addEventListener('click',()=>{
      // guardar la posicion de ese punto
      let posicion = i ;
      // posicion es 0 transfromX 0
      // posicion es 1 transformx es -50%
      // operacion = posicion * -50

      // calculando el espacio que debe desplazarse el grande
      let operacion = posicion * -50;

      // movemos el grande 
      grande.style.transform = `translateX(${operacion}%)`

      // Recorremos todos los puntos
      flecha.forEach( (cadaPunto, i)=>{
         // quitamos la clase Activo a todos los puntos 
          flecha[i].classList.remove('activo')
      } )
      
      // Añadir la clase activa en el punto que hemos hecho click
      flecha[i].classList.add('activo')
   })
});

grande.style.transform = `translateX(0%)`
