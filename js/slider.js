export default function setSlider(btnPrev,btnNext,imagenes){

    const d= document,
          $btnPrev = d.querySelector(btnPrev),
          $btnNext = d.querySelector(btnNext),
          $imagenes = d.querySelectorAll(imagenes);

    let index = 0;

    d.addEventListener("click", (e) => {

        if(e.target.matches(btnPrev)){
            
            if(index === 0){

                $btnPrev.disable = true;

            } else {
                 
                $imagenes[index].classList.remove("active-sld");
                index--;
                $imagenes[index].classList.add("active-sld");

            }
        }

        if(e.target.matches(btnNext)){

                if(index === $imagenes.length-1){
                    $btnNext.disable= true;
                } else {
                    $imagenes[index].classList.remove("active-sld");
                    index++;
                    $imagenes[index].classList.add("active-sld");

                }

        }


    })

    
    


}