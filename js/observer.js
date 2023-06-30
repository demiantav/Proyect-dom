export default function setObserver(){

    const d = document,
          $elementos = d.querySelectorAll("[data-observe]");

          

    const callback = (entries, observer) => {
                   
            entries.forEach(element => {
                
                const observado = element.target.querySelector(".observe");

                observado.classList.toggle("intersection-active",element.isIntersecting);
                
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