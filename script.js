const canvas = document.querySelector('#drawingcanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const normal = document.createElement('img');
const pixel = document.createElement('img');

normal.src = 'assets/headnormal.png';
pixel.src = 'assets/headpixel.png';

let paintbrush = normal;

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
    const left = event.clientX;
    const top = event.clientY;

    context.drawImage(paintbrush, left, top);
}

const handleClick = () => {
    
    if (paintbrush === normal) {
        paintbrush = pixel;
    } else {
        paintbrush = normal;
    }
}

canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);