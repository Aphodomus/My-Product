document.addEventListener("wheel", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function(wheel){
        var moving_value = wheel.getAttribute("data-value");
        var x = (e.clientX * moving_value) /250;
        var y = (e.clientY * moving_value) /500;
        wheel.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}