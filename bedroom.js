img="";
status="";
object = [];

function preload(){

    img = loadImage("bedroom.jpeg");
    
}

function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("Cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object is being identified";

}

function modelLoaded(){

    console.log("Model has been initialized");
    status = true;
    objectDetector.detect(img, gotResults);

}

function gotResults(error, results){

    if(error){

        console.error;

    }
    else{

        console.log(results);
        object = results;

    }

}

function draw(){

    image(img, 0, 0, 640, 420);

    if(status != ""){

        for(i=0; i < object.length; i++){

            document.getElementById("status").innerHTML = "Status = Object has been identified";

            fill("red");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);

        }

    }

}

function back(){

    window.location = "index.html";

}