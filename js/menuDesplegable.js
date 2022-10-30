
const $menu = document.querySelector(".menu"),
      $hamb = document.querySelector(".hamb");

let menuOpen = false;

document.addEventListener("click", (evento) => {

  if(evento.target.matches(".hamb") || evento.target.matches(".linea")
    || evento.target.matches(".linea2") || evento.target.matches(".linea3")){
      
    if(!menuOpen){
      $menu.classList.add("open");
      $hamb.classList.add("open-hamb");
      menuOpen=true;
    }else{

      $menu.classList.remove("open");
      $hamb.classList.remove("open-hamb");
      menuOpen=false;
    }

  }


})
