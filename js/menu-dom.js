import hamburguesa from "./hamburguesa.js"
import setHora from "./hora.js";
import { shortcuts, moveBall } from "./teclado.js";
import { setContdown } from "./countdown.js";
import { showButton, toTop } from "./scroll-button.js";
import { setDarkMode } from "./button_darkMode.js";

const d= document;



d.addEventListener("DOMContentLoaded",(e)=>{

    hamburguesa(".menu",".hamb",".seccion");
    setHora(".boton-hora",".hora");
    setContdown(".count","June 16, 2023, 12:00:00");
    toTop(e,".button-scroll");
    
    
   
    


})

d.addEventListener("keydown", (e) =>{
    moveBall(".bola",".secciones",e);
})

d.addEventListener("scroll",(e)=>{
   
    showButton(e,".button-scroll");

})

setDarkMode(".button-dark", "darkMode");





