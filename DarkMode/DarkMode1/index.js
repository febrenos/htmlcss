//add htmml
const $html = document.querySelector('html')
//add checkbox
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})