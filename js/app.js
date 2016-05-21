//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var $canvas =$("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent
var mousedown = false;

//when clicking on control list intems
$(".controls").on("click", "li", function() {
    //Deselct sibling elements
    $(this).siblings().removeClass("selected");
    //select clicked element
    $(this).addClass("selected");
    //cache current color
    color = $(this).css("background-color");
});
//When new color is pressed
$("#revealColorSelect").click(function() {
    //show or hide the color select
    changeColor();
    $("#colorSelect").toggle();
});
    
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
        
        //update the new color span
    $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}
                       
//when color sliders change
$("input[type=range]").change(changeColor);
                       
                       
//when add color is pressed
$("#addNewColor").click(function() {
    //append the color to the controls
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    //select the new color
    $newColor.click();
    
});

    

//on mouse event on canvas
$canvas.mousedown(function(e) {
    lastEvent = e;
    mousedown = true;
}).mousemove(function(e) {
    //draw lines
if(mousedown) {
context.beginPath();
context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
context.lineTo(e.offsetX, e.offsetY);
context.strokeStyle = color;
context.stroke();  
lastEvent = e;
}
}).mouseup(function() {
    mousedown = false;
}).mouseleave(function() {
    $canvas.mouseup();
});
    



