status=""
array=[]
function preload()
{

}

function setup()
{
canvas=createCanvas(375,375)
canvas.center()
video=createCapture(VIDEO)
video.hide();
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML = "status:detecting objects"
}

function draw()
{
    image(video,0,0,375,375)
    if(status!=""){
        r=random(255)
        g=random(255)
        b=random(255)
        objectDetector.detect(video,gotResult)
    for(var i=0;i<array.length;i++)
    {
        document.getElementById("status").innerHTML = "status:objects detected "
        document.getElementById("buton").innerHTML = "number of objects detected are"+array.length
        fill(r,g,b)
      percent=floor(array[i].confidence*100) 
      text(array[i].label+" "+percent+"%",array[i].x,array[i].y)
      noFill()
      stroke(r,g,b)
      rect(array[i].x,array[i].y,array[i].width,array[i].height)
  
    }
    }
}

function modelLoaded()
{
console.log ("model is loaded")
status = true
objectDetector.detect(video,gotResult)
}
function gotResult(result)
{
    if(result.length>0){
        array=result
    }
}