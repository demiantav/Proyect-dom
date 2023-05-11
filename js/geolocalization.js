export function getLocalization(latitud,longitud,precision){

    const d= document,
          n= navigator,
          g= n.geolocation,
          $latitud=d.querySelector(latitud),
          $longitud=d.querySelector(longitud),
          $precision=d.querySelector(precision),
          options = {

            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,

          };

    const success = (pos)=>{

        const coordenadas = pos.coords,
              lat= coordenadas.latitude,
              long= coordenadas.longitude,
              prec= coordenadas.accuracy;

              $latitud.textContent= `Latitud: ${lat}`;
              $longitud.textContent= `Longitud: ${long}`;
              $precision.textContent= `Precision: ${prec}`;

        const l = d.createElement("a");
              l.href= `https://www.google.com/maps/@${$latitud},${longitud},20z`;
              l.text="Ver en Google Maps";
              l.target= "_blank";

              $precision.insertAdjacentElement("afterend", l);
            
    }

    const error = (err)=>{

        console.log(err);

    }


    g.getCurrentPosition(success,error,options);

        


}