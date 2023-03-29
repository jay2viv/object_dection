function setup()
{
    canvas = createCanvas( 550, 500);
    canvas.center();

    cocossd = ml5.objectDetector("cocossd", modelready);   
}

function modelready()
{
    console.log("model is working")
}


function preload()
{
    image1 = loadImage("background.avif");
}

function draw()
{
    for(i = 0; i < objects.length; i++)
    {
        percent = Math.floor(objects[i].confidence * 100);
        text(objects[1].label);

    }

}