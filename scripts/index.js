const $html = document.querySelector('html');
const $buttonClick = document.querySelector("#switch");

$buttonClick.addEventListener('click', function() {
    $html.classList.toggle('dark-mode');
})