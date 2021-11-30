var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

var box0 = document.getElementById("zero");
var box1 = document.getElementById("A1");
var box2 = document.getElementById("A2");
var box3 = document.getElementById("A3");
var box4 = document.getElementById("A4");
var box5 = document.getElementById("A5");
var box6 = document.getElementById("A6");
var box7 = document.getElementById("A7");
var box8 = document.getElementById("A8");
var box9 = document.getElementById("A9");
var box10 = document.getElementById("A10");
var box11 = document.getElementById("A11");
var box12 = document.getElementById("A12");
var box13 = document.getElementById("A13");

var art1
var art2
var art3
var art4 = document.getElementById("Z4");

var thisbox

function canvsize(){    //RESIZES CANVAS TO WINDOW
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight; 
}

function checkbox(thing){      //CHECKS IF INPUTTED THING IS INVISIBLE
  return thing.classList.contains("invis")
}

function reveal(thing){        //REVEALS INPUTTED THING
  thing.classList.remove("invis");
  thing.classList.add("vis");
  thisbox = thing;
}

function show(){ //SHOWS ALL BOXES IN ORDER

  if(checkbox(box1) == true){
    reveal(box1);

  }else if (checkbox(box2) == true){
    reveal(box2);

  }else if (checkbox(box3) == true){
    reveal(box3);

  }else if (checkbox(box4) == true){
    reveal(box4);
  
  }else if (checkbox(box5) == true){
    reveal(box5);

  }else if (checkbox(box6) == true){
    reveal(box6);
  
  }else if (checkbox(box7) == true){
    reveal(box7);
  
  }else if (checkbox(box8) == true){
    reveal(box8);
  
  }else if (checkbox(box9) == true){
    reveal(box9);
  
  }else if (checkbox(box10) == true){
    reveal(box10);
  
  }else if (checkbox(box11) == true){
    reveal(box11);
  
  }else if (checkbox(box12) == true){
    reveal(box12);
  
  }else if (checkbox(box13) == true){
    reveal(box13);
  
  }else if (checkbox(art4) == true){
    reveal(art4);

  }
}

function place(event) {
  var x = event.clientX;
  var y = event.clientY;
  
  if ( checkbox(box2) == true ){  //ON FIRST CLICK
    var startx = box0.style.top + 50; //START POINT IS BOX ZERO
    var starty = box0.style.left + 50;

    var bruhx = x; //NEXT START POINT WILL BE BOX 1 POSITION
    var bruhy = y;
  }else{    //ON ALL OTHER CLICKS
    startx = bruhx; //START POINT IS BRUH X
    starty = bruhy;
  }

  thisbox.style.top = y - 50;
  thisbox.style.left = x - 50;

  ctx.moveTo(startx, starty);
  ctx.strokeStyle = "#97B2F0";
  ctx.lineWidth = 4;
  ctx.lineTo(x, y);
  ctx.stroke();
}

