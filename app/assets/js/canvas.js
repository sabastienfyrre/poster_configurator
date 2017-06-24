function resize() {
    $("#canvas").outerHeight($(window).height() - $("#canvas").offset().top - Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
}

$(document).ready(function () {
    resize();
    $(window).on("resize", function () {
        resize(); 
    });
});

// var canvas = document.getElementById('posterCanvas');
// var context = canvas.getContext('2d');
// var imageObj = new Image();

// imageObj.onload = function () {
//     context.drawImage(imageObj, 69, 50);
// };
// imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';