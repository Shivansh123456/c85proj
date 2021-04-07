canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width = 100; 
car1_height = 90;
car2_width = 100; 
car2_height = 90;  
random_number = Math.floor(Math.random() * 4);
race_car = ["car 1.jpg", "car 2.png"];
background_image ="download.png";
car1_image = "car 1.jpg"; 
car2_image = "car 2.png";
car_1x = 10; 
car_1y= 10;
car_2x = 50; 
car_2y= 10;

function add() {
     background_imgTag = new Image(); //defining a variable with a new image 
    
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image; 
    // load image 
    car1_imgTag = new Image(); 
    car2_imgTag = new Image(); 
    //defining a variable with a new image 
    car1_imgTag.onload = uploadcar1;
    car2_imgTag.onload = uploadcar2;  
    // setting a function, onloading this variable 
    car1_imgTag.src = car1_image;
    car2_imgTag.src = car2_image;
    // load image 
}
function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); } 
function uploadcar1() { 
    ctx.drawImage(car1_imgTag, car_1x, car_1y, car1_width, car1_height); }
    function uploadcar2() { 
        ctx.drawImage(car2_imgTag, car_2x, car_2y, car2_width, car2_height); }
        
        
    window.addEventListener("keydown", my_keydown);

    function my_keydown(e) { 
        keyPressed = e.keyCode; 
        console.log(keyPressed); 
        if(keyPressed == '38') 
        {
            car1up(); 
             console.log("up"); 
            }
            if(keyPressed == '40') 
            { 
                car1down(); 
                console.log("down");
            }
            if(keyPressed == '37') 
            { 
                car1left(); console.log("left"); 
            }
            if(keyPressed == '39') 
            {
                
                 car1right(); 
                 console.log("right");
                 } 
                 if(keyPressed == '87') 
        {
                 car2up(); 
                 console.log("W"); 
                }
                if(keyPressed == '83') 
                { 
                    car2down(); 
                    console.log("S");
                }
                if(keyPressed == '65') 
                { 
                    car2left(); console.log("A"); 
                }
                if(keyPressed == '68') 
                {
                     car2right(); 
                     console.log("D");
                     }  
                }

function car1up() {
    if(car_1y>=0) {
        car_1y=car_1y-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1down() {
    if(car_1y<=500) {
        car_1y=car_1y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1left() {
    if(car_1x>=0) {
        car_1x=car_1x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1right() {
    if(car_1x<=700) {
        car_1x=car_1x+10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
    function car2up() {
    if(car_2y>=0) {
        car_2y=car_2y-10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2down() {
    if(car_2y<=500) {
        car_2y=car_2y+10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2left() {
    if(car_2x>=0) {
        car_2x=car_2x-10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2right() {
    if(car_2x<=700) {
        car_2x=car_2x+10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}