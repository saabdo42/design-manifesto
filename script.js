var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

var box0 = document.getElementById("zero");
var box1 = document.getElementById("one");
var box2 = document.getElementById("two");
var box3 = document.getElementById("three");
var thisbox

function canvsize(){
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function show(){ 

  if(box1.classList.contains("invis") == true){
    box1.classList.remove("invis");
    box1.classList.add("vis"); 
    thisbox = box1;

  }else if (box2.classList.contains("invis") == true){
    box2.classList.remove("invis");
    box2.classList.add("vis");
    thisbox = box2;

  }else{
    box3.classList.remove("invis");
    box3.classList.add("vis");
    thisbox = box3;
  }
}

function place(event) {
  var x = event.clientX;
  var y = event.clientY;
  
  if ( box2.classList.contains("invis") == true ){  //ON FIRST CLICK
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

