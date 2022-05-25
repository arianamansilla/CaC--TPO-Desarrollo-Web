//  VALIDACION FORMULARIO

function valida_envia() {
    //valida nombre y apellido
    if (document.fvalida.nombre.value.length == 0) {
        alert("No te olvides de ingresar tu nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valida email
    if (document.fvalida.email.value.length == 0) {
        alert("No te olvides de ingresar tu mail")
        document.fvalida.email.focus()
        return 0;
    }

    if (document.fvalida.email.value.length == 0) {
        alert("No te olvides de ingresar tu mail")
        document.fvalida.email.focus()
        return 0;
    }

    //valida motivo
    if (document.fvalida.motivo.selectedIndex == 0) {
        alert("Por favor selecciona el motivo de tu mensaje.")
        document.fvalida.motivo.focus()
        return 0;
    }

    //valida mensaje
    if (document.fvalida.mensaje.value.length == 0) {
        alert("Por favor ingresa tu mensaje.")
        document.fvalida.mensaje.focus()
        return 0;
    }

    //formulado enviado
    alert("Recibimos tu consulta ¡Pronto nos comunicaremos con vos!");
    document.fvalida.button();

}


// Aparece a los 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("botonArriba").style.display = "block";
  } else {
    document.getElementById("botonArriba").style.display = "none";
  }
}

// botonArriba
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




// BannerSlider Home

// Cambiar Automatico
// if(document.querySelector('#container-slider')){
//     setInterval('fntExecuteSlide("next")',5000);
//  }

 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //Puntos 
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }


