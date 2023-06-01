var artyom = new Artyom();
let video;
let detector;
let detections = [];
let actv = false;

document.querySelector("#cameraBtn").addEventListener('click', function(){
  if(!actv){
    video.play();
    detectB();
    document.getElementById("cameraBtn").style.color = "darkgreen";
    artyom.say("Activando el servicio de detección por cámara");
    actv = !actv
    console.log("Camara Activada");
  }else{
    video.stop();
    document.getElementById("cameraBtn").style.color = "black";
    actv = !actv
    artyom.say("Desactivando el servicio de detección por cámara");
    console.log("Camara Desactivada");
  }
});

function preload() {
  detector = ml5.objectDetector('cocossd');
  artyom.say("Bienvenido al servicio de seguridad SiGuide");
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detector.detect(video, gotDetections);
}
function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent('camera_container');
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
}
function detectB(){
  detector.detect(video, gotDetections);
  console.log("detect")
}

function draw() {
  image(video, 0, 0);

  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(0, 255, 0);
    strokeWeight(1);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  }
  artyom.initialize({
    lang:"es-ES",
    debug:true,
    listen:false,
    continuous: true,
    speed:0.9,
    mode:"normal"
  });
  /*  if(results[0].confidence > 0.6){
    console.log("hola")
  }else{

  }*/ 
}
    
    