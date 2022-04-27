function preload(){
 
}
function setup(){
    video = createCapture(VIDEO)
    video.size(500,500)
  canvas = createCanvas(500,500)
  canvas.position(600,135)
  posenet=ml5.poseNet(video,modelloaded)
  posenet.on("pose",gotposes)
}
function draw(){
background("#642e6e")
}
function modelloaded(){
  console.log("modelloaded")
}
function gotposes(result){
  if (result.length>0){
    console.log(result)
  }
}