export function testResponsive(btn_test,btn_close,url,width,height){

    const d= document,
          $btn_test= d.querySelector(btn_test),
          $btn_close= d.querySelector(btn_close),
          $url= d.querySelector(url),
          $width= d.querySelector(width),
          $height = d.querySelector(height);
    
    let openPage;


      

    d.addEventListener("click", (e) => {

        if(e.target.matches(btn_test)){
            
            e.preventDefault();
            openPage = window.open($url.value,"hola",`width= ${$width.value}, height= ${$height.value}`);
            
        
        }

        if(e.target.matches(btn_close)) openPage.close();
        
    })
}

