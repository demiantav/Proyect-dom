export default function hamburguesa (menu,hamb,item){
  
  const d= document,
        $hamb = d.querySelector(hamb),
        $menu = d.querySelector(menu),
        $item = d.querySelector(item);


  d.addEventListener("click", (evento) => {

   if(evento.target.matches(`${hamb} *`) || evento.target.matches(hamb)){

     $menu.classList.toggle("open");
     $hamb.classList.toggle("open-hamb");
     
     
   }

   if(evento.target.matches(item)){

     $menu.classList.remove("open");
     $hamb.classList.remove("open-hamb");

   }


  })


}


 
