var act = false;
let video = null;
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;

const detectionAction = document.getElementById('cameraBtn');
document.querySelector("#cameraBtn").addEventListener('click', function(){
    if(!act){
      openCamera();
      console.log("Activada");
    }else{
        console.log("Desactivada");
    }
  });

document.body.style.cursor = 'wait';

function preload() {
  detector = ml5.objectDetector('cocossd');
  console.log("preload");
}

function setup() {
  createCanvas(640, 480).parent('camera_container');
  video = createCapture(VIDEO);
  video.size(640, 480);
  console.log("setUp")
}

function draw() {
  if (!video || !detecting) return;
  image(video, 0, 0);
  for (let i = 0; i < detections.length; i++) {
    drawResult(detections[i]);
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

function onDetected(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  if (detecting) {
    detect();
  }
}
function detect() {
  detector.detect(video, onDetected);
}
function openCamera() {
  if (!video || !detector)  return ;
  if (!detecting) {
    console.log(detecting)
    detect();
    document.getElementById("cameraBtn").style.backgroundColor = "darkgreen";
    
  } else {
    document.getElementById("cameraBtn").style.backgroundColor = "black";
    console.log("not")
  }
  detecting = !detecting;
}