export function testInternet(p){

    const d = document,
          $test= d.querySelector(p);



    
    window.addEventListener('online', () => {
        $test.textContent= "Estamos Online";
        $test.style.color= "green";
    })
    
    window.addEventListener('offline', () =>{

        $test.textContent= "Estamos Offline";
        $test.style.color= "red";


    }) 

   
      
   


}