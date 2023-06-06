export default function formValidator(name,mail,comentario){

    const d = document,
          $name_validator = d.querySelectorAll(".validator"),
          $name = d.querySelector(name),
          regex1= /^[A-Za-z\s]*$/,
          regex2= /^(([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?)*$/,
          regex3= /^(([\S\s]){3,500})*$/;

          console.log($name_validator);

    

    d.addEventListener("input", (e) => {

        
        /*****Name validation */
        if(e.target.matches(name)){
            
            
            if(regex1.test(e.target.value)){

                $name_validator[0].classList.remove("validator-active");
                


              } else {

                $name_validator[0].classList.add("validator-active");
                $name_validator[0].textContent = "Ingrese un nombre valido";
                


              }

        }

        /***Mail validation */
        if(e.target.matches(mail)){
            
            
            if(regex2.test(e.target.value)){

                $name_validator[1].classList.remove("validator-active");


              } else {

                $name_validator[1].classList.add("validator-active");
                $name_validator[1].textContent = "Ingrese un correo valido";


              }

        }


        /****Text validation */
        if(e.target.matches(comentario)){

          if(regex3.test(e.target.value)){

            $name_validator[2].classList.remove("validator-active");


          } else {

            $name_validator[2].classList.add("validator-active");
            $name_validator[2].textContent = "Respete la longitud (Minimo: 3 caracteres Maximo: 500)";


          }
            
            
       


        }


    })
    
    /***Simulacion de envio de formulario */
    d.addEventListener("submit", (e) => {

      const $loader= d.querySelector(".form-loader");
      const $response= d.querySelector(".form-response");

      
     
      $loader.classList.remove("none");

      setTimeout(()=>{
          
        $loader.classList.add("none");
        $response.classList.remove("none");
        d.querySelector(".form").reset();

      }, 5000)
    })
}