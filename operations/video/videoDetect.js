let videol = null;
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;


let video = document.getElementById('v');


var btnVideo = document.getElementById('cameraBtn'),
    cameraBox = document.getElementById('cameraBox'), cont=0; 
function openCamera(){
    navigator.mediaDevices.getUserMedia({video: true}).then((stream)=>{
        video.srcObject = stream;
        console.log("cama");
    }).catch((err)=>console.log(err));
}

    