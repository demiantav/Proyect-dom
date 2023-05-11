export default function elegirGanador(btn){

    const d = document,
          $opciones = d.querySelectorAll("[data-option]");

    
    d.addEventListener("click", (e)=>{

        if(e.target.matches(btn)){
            
            let array= Array.from($opciones);
            const ganador = $opciones[Math.floor(Math.random() * $opciones.length)];

            alert(`El ganador es ${ganador.textContent}`)


        }


    })
          
}