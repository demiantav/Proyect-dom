export default function setObserver(){

    const d = document,
          $elementos = d.querySelectorAll("[data-observe]");

          

    const callback = (entries, observer) => {
                   
            entries.forEach(element => {
                
                const observado = element.target.querySelector(".observe");

                if(element.isIntersecting){

                    observado.classList.add("intersection-active");
                    observer.unobserve(element.target);

                } else {

                    observado.classList.remove("intersection-active");
                
                }
                
            });

    }

    const options = {
       
        rootMargin: "0px",
        threshold: 0.5,
    
    }
    
    const observer = new IntersectionObserver(callback, options);

      $elementos.forEach( element => {

         observer.observe(element);
        
      })
        
    

   
    
    

    
}