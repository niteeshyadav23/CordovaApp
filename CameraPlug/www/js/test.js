
const cmera = document.getElementById("cm");
cmera.addEventListener('click' , CameraApp);

function CameraApp(){
    navigator.camera.getPicture(onSuccess , OnFail , {
        quality:100,
        saveToPhotoAlbum:true,
        destinationType:camera.DestinationType.DATA_URL
    });

    function onSuccess(imageURI){
        var image = document.getElementById("myImage");
        image.src = imageURI;
    }
}