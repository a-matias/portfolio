let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("angular");
        habilidades[5].classList.add("JAVA");
        habilidades[6].classList.add("C");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("liderazgo");
        habilidades[11].classList.add("proactivo");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("responsabilidad");
       
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

$(function(){

    var texto = "</>";
    maquina("typer",texto,1100);
    

});


function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   tagHtml = document.getElementById(contenedor);
   tagHtml.innerHTML="";
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      tagHtml.innerHTML = tagHtml.innerHTML.substr(0,tagHtml.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         tagHtml.innerHTML = tagHtml.innerHTML.substr(0,longitud);

         maquina("typer",texto,1100);
    
         return true;

      } else {
         // En caso contrario.. seguimos
         i++;
         
      }
   },intervalo);
};