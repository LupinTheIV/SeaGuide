let video = !null;
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;


let videoV = document.getElementById('v');


var btnVideo = document.getElementById('cameraBtn'),
    cameraBox = document.getElementById('cameraBox'), cont=0; 

    document.body.style.cursor = 'wait';

function preload() {
    detector = ml5.objectDetector('cocossd');
}

function openCamera(){
    navigator.mediaDevices.getUserMedia({video: true}).then((stream)=>{
        videoV.srcObject = stream;
        detecting = true;
        detect();
        console.log("camera Open");
    }).catch((err)=>console.log(err));
}
function draw() {
  if (!videoV || !detecting) return;
  image(videoV, 0, 0);
  for (let i = 0; i < detections.length; i++) {
    drawResult(detections[i]);
  }
}
function detect() {
    detector.detect(video, onDetected);
}
function onDetected(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;

  if(results.laber = 'person' && results.length >= 0){
    console.log('Hay más de 1 personas wey', 'cantidad ',results.length)
  }

  if (detecting) {
    detect();
  }
}
function drawResult(object) {
  boundingBox(object);
  drawLabel(object);
}
function boundingBox(object) {
  stroke('blue');
  strokeWeight(6);
  noFill();
  rect(object.x, object.y, object.width, object.height);
}
function drawLabel(object) {
  noStroke();
  fill('white');
  textSize(34);
  text(object.label, object.x + 15, object.y + 34);
}
    
    