export default function textSpeech(opciones,texto,btn){

    const d = document,
          synth= window.speechSynthesis,
          $opciones=d.querySelector(opciones),
          $texto=d.querySelector(texto),
          $btn=d.querySelector(btn);
          
    let voices = [];
    
    /*Funcion para guardar la lista de voces y añadirlas dinamicamente a un elemento de tipo select ubicado en el DOM*/
    const voicesList = () => {

        voices= synth.getVoices();

        for(const voice of voices){

            const option = d.createElement("option");
            option.textContent = `${voice.name} - ${voice.lang}`;

            option.setAttribute("data-name", voice.name);

            $opciones.appendChild(option);


        }
    }
    
    //Funcion para seleccionar y ejecutar la voz elegida
    const playVoice = () => {
        
        const textToRead = new SpeechSynthesisUtterance($texto.value);
        const voiceSelected = $opciones.selectedOptions[0].getAttribute("data-name");

            voices.forEach((voice) => {

                if(voice.name === voiceSelected){

                    textToRead.voice= voice;
                    textToRead.lang= voice.lang;

                }
            })

            synth.speak(textToRead);


    }

    /*Como la lista de voces no se encuentra cargada debemos ejecutar la siguiente linea de codigo para evitar un error*/
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = voicesList;
    }

    // Ejecutamos las funciones al hacer click en el boton
    d.addEventListener("click", e => {

        if(e.target.matches(btn)){
            
            voicesList();
            playVoice();

        }
    })


    
        
    




    


}