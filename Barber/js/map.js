let map_button = document.querySelector('.map-button');
let map = document.querySelector('.map-img1')

function map_show(){
    map.classList.toggle('map-img2');
}

map_button.addEventListener('click', map_show);

console.log(map_button);