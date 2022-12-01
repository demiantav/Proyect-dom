import hamburguesa from "./hamburguesa.js"
import setHora from "./hora.js";
import { shortcuts, moveBall } from "./teclado.js";
import { setContdown } from "./countdown.js";

const d= document;



d.addEventListener("DOMContentLoaded",(e)=>{

    hamburguesa(".menu",".hamb",".seccion");
    setHora(".boton-hora",".hora");
    setContdown(".count");
    
   
    


})

d.addEventListener("keydown", (e) =>{
    moveBall(".bola",".secciones",e);
})





