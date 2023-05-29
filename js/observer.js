export default function setObserver(){

    const d = document,
          $elemento = d.querySelector("[id='16']");

    const callback = (entries, observer) => {
                   
            entries.forEach(element => {
                
                if(element.isIntersecting){
                    
                    d.querySelector(".galaxy-img").classList.add("galaxy-active");
                    d.querySelector(".universe-text").classList.add("active-text");
                    
                } else {
                    
                    d.querySelector(".galaxy-img").classList.remove("galaxy-active");
                    d.querySelector(".universe-text").classList.remove("active-text");

                }

            });

            
    }   
        
    const options = {

        threshold: 0.9,
    }

    const observer = new IntersectionObserver(callback, options);
    
    observer.observe($elemento);
}