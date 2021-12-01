var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

var zero = document.getElementById("zero"); //ALL 20 STEPS OF PATH A NOT INCLUDING ART
var A1 = document.getElementById("A1");
var A1_1 = document.getElementById("A1.1");
var A2 = document.getElementById("A2");
var A2_1 = document.getElementById("A2.1");
var A3 = document.getElementById("A3");
var A4 = document.getElementById("A4");
var A4_1 = document.getElementById("A4.1");
var A4_2 = document.getElementById("A4.2");
var A4_3 = document.getElementById("A4.3");
var A5 = document.getElementById("A5");
var A6 = document.getElementById("A6");
var A7 = document.getElementById("A7");
var A8 = document.getElementById("A8");
var A9 = document.getElementById("A9");
var A10 = document.getElementById("A10");
var A10_1 = document.getElementById("A10.1");
var A11 = document.getElementById("A11");
var A12 = document.getElementById("A12");
var A13 = document.getElementById("A13");

var B1 = document.getElementById("B1"); //ALL 5 STEPS OF PATH B NOT INCLUDING ART
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var B4 = document.getElementById("B4");
var B5 = document.getElementById("B5");

var C1 = document.getElementById("C1"); //PATH C LOL

var M1 = document.getElementById("M1"); //ALL MANIFESTO STAEMENTS
var M2 = document.getElementById("M2");
var M3 = document.getElementById("M3");
var M4 = document.getElementById("M4");

var Z1 = document.getElementById("Z1"); //ALL ART RESULTS
var Z2 = document.getElementById("Z2");
var Z3 = document.getElementById("Z3");
var Z4 = document.getElementById("Z4");

var thisbox
var prevbox

function canvsize(){    //RESIZES CANVAS TO WINDOW
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight; 
}

function isinvis(thing){    //CHECKS IF INPUTTED THING IS INVISIBLE
  return thing.classList.contains("invis")
}

function reveal(thing){   //REVEALS INPUTTED THING
  thing.classList.remove("invis");
  thing.classList.add("vis");
  prevbox = thisbox;
  thisbox = thing;
}

function show(){ //SHOWS ALL BOXES IN ORDER

  if(isinvis(A1) == true){
    reveal(A1);
  }else if (isinvis(A2) == true){
    reveal(A2);
  }else if (isinvis(A3) == true){
    reveal(A3);
  }else if (isinvis(A4) == true){
    reveal(A4);
  }else if (isinvis(A5) == true){
    reveal(A5);
  }else if (isinvis(A6) == true){
    reveal(A6);
  }else if (isinvis(A7) == true){
    reveal(A7);
  }else if (isinvis(A8) == true){
    reveal(A8);
  }else if (isinvis(A9) == true){
    reveal(A9);
  }else if (isinvis(A10) == true){
    reveal(A10);
  }else if (isinvis(A11) == true){
    reveal(A11);
  }else if (isinvis(A12) == true){
    reveal(A12);
  }else if (isinvis(A13) == true){
    reveal(A13);
  }else if (isinvis(Z4) == true){
    reveal(Z4);
  }
}

function place(event) {
  var x = event.clientX;
  var y = event.clientY;
  
  if ( isinvis(A2) == true ){  //ON FIRST CLICK
    var startx = zero.style.top + 50; //START POINT IS BOX ZERO
    var starty = zero.style.left + 50;

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

