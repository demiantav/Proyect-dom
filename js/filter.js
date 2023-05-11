const d= document;

export default function filterImages(input){
    
    d.addEventListener("keyup", e =>{

            if(e.target.matches(input)){
                
                d.querySelectorAll("[data-card]").forEach( el => {

                    ((el.textContent.toLowerCase().includes(e.target.value.toLowerCase())))
                       
                       ? el.classList.remove("filter")
                       : el.classList.add("filter");

                        
                })
            }
        })  
        
    
}