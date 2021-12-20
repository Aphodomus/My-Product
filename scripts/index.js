// Script Light-mode
const $html = document.querySelector('html');
const $buttonClick = document.querySelector("#switch");

$buttonClick.addEventListener('click', function() {
    $html.classList.toggle('dark-mode');
})

// Script ScrollOut and Parallax
ScrollOut({
    threshold: 0.6
})

var rellax = new Rellax('.rellax');