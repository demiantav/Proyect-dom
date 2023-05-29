export default function formValidator(name){

    const d = document,
          $name_input = d.getElementById(name),
          $name_validator = d.querySelector(".name-validator"),
          regex1= /^[A-Za-z\s]*$/;

          console.log($name_input);


    d.addEventListener("keyup", (e) => {

        console.log(e.target.value);

        if(e.target.matches(name)){
            
            (regex1.test(e.target.value)) 
              
              ? $name_validator.classList.remove("validator-active")
              : $name_validator.classList.add("validator-active");

        }


    })
}