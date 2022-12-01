export function setContdown(count){

    const d = document,
          $count = d.querySelector(count),
          actualDate= new Date().getTime(),
          futureDate= new Date("Jan 13, 2023, 00:00:00").getTime();

        function calculateContdown(){
            
            let distance = futureDate - actualDate;

               let days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                   hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                   minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                   seconds = Math.floor((distance % (1000 * 60)) / 1000);

                   if(hours < 10) hours = "0" + hours;
                   if(minutes < 10) minutes = "0" + minutes;
                   if(seconds < 10) seconds = "0" + seconds;

             $count.textContent = `${days} dias, ${hours} horas ${minutes} minutos ${seconds} segundos para ver a mi amorcito`;

               

             setTimeout(calculateContdown,1000);
             
            
        }
        
        
        calculateContdown();
            
        
        
       

        
}