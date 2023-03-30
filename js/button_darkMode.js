const d = document,
      ls= localStorage;

export function setDarkMode(btn,darkClass){

    const $btn_dark= d.querySelector(btn),
          $elements= d.querySelectorAll("[data-dark]");

    let flag = true;

    const lightFunction = () => {

        $btn_dark.textContent = "🌙";
            $elements.forEach((value) => value.classList.toggle(darkClass));
            flag= false;
            ls.setItem("theme","light");


    } 

    const darkFunction = () => {

        $btn_dark.textContent="☀️";
        $elements.forEach((value) => value.classList.toggle(darkClass));
            flag= true;
            ls.setItem("theme","dark");


    }

    
d.addEventListener("click", (e) => {

    

    if(e.target.matches(btn)){

        if(flag){

            lightFunction();


        }else{

            darkFunction();
              

        }


    };

    
})

d.addEventListener("DOMContentLoaded", () => {

    if(ls.getItem("theme") === null) ls.setItem("theme","light");

    if(ls.getItem("theme") === "light") lightFunction();

    if(ls.getItem("theme") === "dark") darkFunction();


})

}