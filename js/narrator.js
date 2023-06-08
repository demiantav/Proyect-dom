export default function textSpeech(opciones,texto,btn){

    const d = document,
          synth= window.speechSynthesis,
          $opciones=d.querySelector(opciones),
          $texto=d.querySelector(texto),
          $btn=d.querySelector(btn);
          
    let voices = [];
    
    /*La siguiente funcion nos guarda la lista de voces y las añade dinamicamente a un elemento de tipo select*/

    const voicesList = () => {

        voices= synth.getVoices();

        for(const voice of voices){

            const option = d.createElement("option");
            option.textContent = `${voice.name} - ${voice.lang}`;

            option.setAttribute("data-name", voice.name);

            $opciones.appendChild(option);
        }


    }

    voicesList();
   
    /*Como la lista de voces no se encuentra cargada debemos ejecutar la siguiente linea de codigo para evitar un error*/
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = voicesList;
    }

    d.addEventListener("click", e => {

        if(e.target.matches(btn)){

            const textToRead = new SpeechSynthesisUtterance($texto.value);

            const voiceSelected = $opciones.selectedOptions[0].getAttribute("data-name");

            voices.forEach((voice) => {

                if(voice.name === voiceSelected){

                    textToRead.voice= voice;

                }
            })

            synth.speak(textToRead);

            

           
        }
    })

    
        
    




    


}