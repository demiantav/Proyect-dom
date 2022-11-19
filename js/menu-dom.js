import hamburguesa from "./hamburguesa.js"
import setHora from "./hora.js";

const d= document;

d.addEventListener("DOMContentLoaded",(e)=>{

    hamburguesa(".menu",".hamb",".seccion");
    setHora(".boton-hora",".hora");


})



