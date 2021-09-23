noseX=0 ;
noseY=0 ;

function preload() {

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

function draw() {
    image(video, 0, 0, 300, 300);
}

function takesnapshot() {
    save('myMoustaceFilter.png') 
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x-45;
        noseY= results[0].pose.nose.y-20;
    }
}

function modelLoaded(){
    console.log("Model Loaded");
}