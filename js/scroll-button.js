const d = document;

export function showButton(e,boton){

    console.log(e);
    console.log(window.scrollY);

    const $button = d.querySelector(boton);

    let scrollY= window.scrollY;

    if(scrollY > 3400){

        $button.style.opacity = "1";
    } else{

        $button.style.opacity = "0";
    }
}

export function toTop(e,boton){

    const $button = d.querySelector(boton);

    d.addEventListener("click", (e)=>{

        if(e.target.matches(boton)){

            window.scrollTo(top);
        }
    })


}