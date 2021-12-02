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
var lastbox
var lastlastbox

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
  thisbox = thing;
}

function show(){ //SHOWS ALL BOXES IN ORDER

  if(isinvis(A1) == true){
    reveal(A1);
    lastbox = zero;
  }else if (isinvis(A2) == true){
    reveal(A2);
    lastbox = A1;
    lastlastbox = zero;
  }else if (isinvis(A3) == true){
    reveal(A3);
    lastbox = A2;
    lastlastbox = A1;
  }else if (isinvis(A4) == true){
    reveal(A4);
    lastbox = A3;
    lastlastbox = A2;
  }else if (isinvis(A5) == true){
    reveal(A5);
    lastbox = A4;
    lastlastbox = A3;
  }else if (isinvis(A6) == true){
    reveal(A6);
    lastbox = A5;
    lastlastbox = A4;
  }else if (isinvis(A7) == true){
    reveal(A7);
    lastbox = A6;
    lastlastbox = A5;
  }else if (isinvis(A8) == true){
    reveal(A8);
    lastbox = A7;
    lastlastbox = A6;
  }else if (isinvis(A9) == true){
    reveal(A9);
    lastbox = A8;
    lastlastbox = A7;
  }else if (isinvis(A10) == true){
    reveal(A10);
    lastbox = A9;
    lastlastbox = A8;
  }else if (isinvis(A11) == true){
    reveal(A11);
    lastbox = A10;
    lastlastbox = A9;
  }else if (isinvis(A12) == true){
    reveal(A12);
    lastbox = A11;
    lastlastbox = A10;
  }else if (isinvis(A13) == true){
    reveal(A13);
    lastbox = A12;
    lastlastbox = A11;
  }else if (isinvis(Z4) == true){
    reveal(Z4);
    lastbox = A13;
    lastlastbox = A12;
  }
}

function place(event){
  var x = event.clientX; //POSITION OF THE MOUSECLICK
  var y = event.clientY;
  
  thisbox.style.top = y - 50; //PLACING THISBOX AT THE MOUSECLICK
  thisbox.style.left = x - 50;

  var lastboxx = lastbox.style.left; //DEFINING LAST BOX POSITION AND BOX BEFORE THAT
  var lastboxy = lastbox.style.top;
  var lastlastboxx = lastlastbox.style.left;
  var lastlastboxy = lastlastbox.style.top;

//  zero.innerHTML = "this is stupid";

  if (thisbox.classList.contains("halfstep") == true){ //IF THISBOX IS A BRANCH/ HALFSTEP
    ctx.moveTo(lastlastboxx, lastlastboxy); //DRAW THE LINE FROM THE LAST LAST BOX TO CURRENT MOUSECLICK 
    ctx.strokeStyle = "#97B2F0";
    ctx.lineWidth = 4;
    ctx.lineTo(x, y);
    ctx.stroke();

  }else if(thisbox.classList.contains("step") == true){ //OTHERWISE IF THIS IS A FULL STEP
    ctx.moveTo(lastboxx, lastboxy); //DRAW THE LINE FROM THE LAST BOX TO CURRENT MOUSECLICK 
    ctx.strokeStyle = "#97B2F0";
    ctx.lineWidth = 4;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  
}

/*
function place(event){
  var x = event.clientX; //POSITION OF THE MOUSECLICK
  var y = event.clientY;
  
  thisbox.style.top = y - 50; //PLACING THISBOX AT THE MOUSECLICK
  thisbox.style.left = x - 50;

  var lastboxx = thisbox.previousElementSibling.style.left; //DEFINING LAST BOX AND BOX BEFORE THAT
  var lastboxy = thisbox.previousElementSibling.style.top;

  var lastlastboxx = lastboxx.previousElementSibling.style.left;
  var lastlastboxy = lastboxy.previousElementSibling.style.top;

  zero.innerHTML = "this is stupid";

  if (thisbox.classList.contains("halfstep") == true){ //IF THISBOX IS A BRANCH/ HALFSTEP
    ctx.moveTo(lastlastboxx, lastlastboxy); //DRAW THE LINE FROM THE LAST LAST BOX TO CURRENT MOUSECLICK 
    ctx.strokeStyle = "#97B2F0";
    ctx.lineWidth = 4;
    ctx.lineTo(x, y);
    ctx.stroke();

  }else if(thisbox.classList.contains("step") == true){ //OTHERWISE IF THIS IS A FULL STEP
    ctx.moveTo(lastboxx, lastboxy); //DRAW THE LINE FROM THE LAST BOX TO CURRENT MOUSECLICK 
    ctx.strokeStyle = "#97B2F0";
    ctx.lineWidth = 4;
    ctx.lineTo(x, y);
    ctx.stroke();
  }

}
*/