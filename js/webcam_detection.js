export default function getVideo(video){

    const d = document,
          n= navigator,
          $video = d.querySelector(video);

    const webCam = async () => {

        try {

            let m = await n.mediaDevices.getUserMedia({video:true});
            $video.srcObject = m;
            $video.play();
            
        } catch (error) {

            console.log(error);
            
        }
    };

    

    if(n.mediaDevices.getUserMedia) webCam();

    

}