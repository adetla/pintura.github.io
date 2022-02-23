canvas=document.getElementById("mi_canvas");
ctx=canvas.getContext("2d");
color="purple";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,Math.floor(Math.random()*100),0,2*Math.PI);
canvas.addEventListener("mousedown",mimousdown);
function mimousdown(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x="+mouse_x+",y="+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,Math.floor(Math.random()*100),0,2*Math.PI);
    ctx.stroke();
}
function limpiar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}