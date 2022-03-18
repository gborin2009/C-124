function setup(){
    canvas= createCanvas(550,550);
    canvas.position(700,100)
    video= createCapture(VIDEO); 
    video.size(550,500)
    video.position(50,35)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes)
}
function draw(){
    background('#301934')
}
function modelLoaded(){
    console.log('poseNet is loaded')
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}