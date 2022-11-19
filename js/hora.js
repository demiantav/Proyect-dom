export default function setHora (boton,hora){

    const d = document,
          $hora = d.querySelector(hora);

    

        function calculateHour(){

            let date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();

            if(hours < 10) hours = "0" + hours;
            if(minutes < 10) minutes = "0" + minutes;
            if(seconds < 10) seconds = "0" + seconds;

            $hora.textContent= `${hours} : ${minutes} : ${seconds}`;

            setTimeout(calculateHour,1000);

            

        }


        d.addEventListener("click", (e) =>{

        if(e.target.matches(boton)){
            
            $hora.classList.toggle("active-hora");
            calculateHour();

            
            
            

        }
    })


}