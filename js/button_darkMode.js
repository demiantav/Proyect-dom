const d = document;

export function setDarkMode(btn,darkClass){

    const $btn_dark= d.querySelector(btn),
          $elements= d.querySelectorAll("[data-dark]");

    let flag = true;

    
d.addEventListener("click", (e) => {

    

    if(e.target.matches(btn)){

        console.log(flag);
        console.log(localStorage);
        
        if(flag){

            $btn_dark.textContent = "☀️";
            $elements.forEach((value) => value.classList.toggle(darkClass));
            flag= false;


        }else{

            $btn_dark.textContent="🌙";
            $elements.forEach((value) => value.classList.toggle(darkClass));
            flag= true;

              

        }


    };

    
})

}