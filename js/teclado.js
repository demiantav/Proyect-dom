const d = document;
let x=0,
    y=0;

export function shortcuts(e){
    
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
}

export function moveBall(bola,seccion,e){

    const $ball = d.querySelector(bola),
          $seccion = d.querySelectorAll(seccion)[6],
          $limitsBall = $ball.getBoundingClientRect(),
          $limitsSection = $seccion.getBoundingClientRect();
      

          console.log($limitsBall);
          console.log($limitsSection);
    

    switch(e.keyCode){

        case 38:
            e.preventDefault();
            if($limitsBall.top > $limitsSection.top) y--;
            break;

        case 40:
            e.preventDefault();
            if($limitsBall.bottom < $limitsSection.bottom) y++;
            break;

        case 37:
            e.preventDefault();
            if($limitsBall.left > $limitsSection.left) x--;
            break;

        case 39:
            e.preventDefault();
            if($limitsBall.right < $limitsSection.right) x++;
            break;

        
    }

    $ball.style.transform= `translate(${x * 10}px, ${y * 10}px)`;

    
}