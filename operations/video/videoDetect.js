//var artyom = new Artyom();

let video = null;
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;

const detectionAction = document.getElementById('cameraBtn');

document.body.style.cursor = 'wait';

function preload() {
  detector = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(640, 480).parent('camera_container');
  video = createCapture(VIDEO);
  video.size(640, 480);

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
/*
  if(results.laber = 'person' && results.length >= 2){
    console.log('Hay más de 1 personas wey', 'cantidad ',results.length)
  }*/

  if (detecting) {
    detect();
  }
}

function detect() {
  detector.detect(video, onDetected);
}

function openCamera() {
  if (!video || !detector) return;
  if (!detecting) {
    detect();
    detectionAction.innerText = ' Desactivar reconocimiento por video';
  } else {
    detectionAction.innerText = ' Activar reconocimiento por video';
  }
  detecting = !detecting;
}
    
    