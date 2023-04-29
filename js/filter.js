const d= document;

export default function filterImages(input){
    
   
        d.addEventListener("keyup", e =>{

            if(e.target.matches(input)){
                console.log(e.target)
                console.log(e.target.value)


                d.querySelectorAll("[data-card]").forEach( el => {

                    ((el.textContent.toLowerCase().includes(e.target.value.toLowerCase())))
                       
                       ? el.classList.remove("filter")
                       : el.classList.add("filter")

                        
                })

                


            }
        })  
        
    




}