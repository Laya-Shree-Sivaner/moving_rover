canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_image_array = ["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
background_image = mars_image_array[random_number]

rover_width =100;
rover_height=90;


console.log("background_image = " + background_image)
rover_image="rover.png";

rover_x= 10;
rover_y= 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground();
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover();
   rover_imgTag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y, rover_width,rover_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed)
    if(keypressed=='37')
    {
        left();
        console.log("left")
    } 
    if(keypressed=='38')
    {
        up();
        console.log("up")
    } 
    if(keypressed=='39')
    {
        right();
        console.log("right")
    } 
    if(keypressed=='40')
    {
        down();
        console.log("down")
    } 
}

function up ()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed, x = "+rover_x + " | y = " + rover_y)
        uploadbackground();
        uploadrover();
    }
}

function down ()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed, x = "+rover_x + " | y = " + rover_y)
        uploadbackground();
        uploadrover();
    }
}

function left ()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed, x = "+rover_x + " | y = " + rover_y)
        uploadbackground();
        uploadrover();
    }
}

function right ()
{
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed, x = "+rover_x + " | y = " + rover_y)
        uploadbackground();
        uploadrover();
    }
}