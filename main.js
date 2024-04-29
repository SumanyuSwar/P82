var mouse_Event = ""
var last_pos_X;
var last_pos_Y;
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var color = "black"
var r = 0;

canvas.addEventListener("mousedown", My_mousedown)

function My_mousedown(e){
    color  = document.getElementById("color_text").value
    width_of_line = document.getElementById("width_text").value
    r =  document.getElementById("radius_circle").value
    mouse_Event = "mousedown"

}
canvas.addEventListener("mousemove", My_mousemove)
function My_mousemove(e){
    var current_mouse_pos_x = e.clientX - canvas.offsetLeft
    var current_mouse_pos_y = e.clientY - canvas.offsetTop
    if (mouse_Event == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width_of_line
        ctx.arc(last_pos_X, last_pos_Y, r, 0, 2 * Math.PI)
        ctx.stroke()
    }
    last_pos_X = current_mouse_pos_x
    last_pos_Y = current_mouse_pos_y
}
canvas.addEventListener("mouseup", My_mouseup)
function My_mouseup(e){
    mouse_Event = "mouseup"
}
canvas.addEventListener("mouseleave", My_mouseleave)
function My_mouseleave(e){
    mouse_Event = "mouseleave"
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}