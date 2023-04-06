let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let hill5 = document.getElementById('hill5')

let zoom = 1;
const ZOOM_SPEED = 0.2;

window.addEventListener('scroll', () => {
    let value = window.scrollY

    leaf.style.top = value * -1.5 + 'px'
    leaf.style.left = value * 1.5 + 'px'
    
    hill5.style.left = value * 1.5 + 'px'
    hill4.style.left = value * -1.5 + 'px'
    hill1.style.top = value * 1 + 'px'
})

window.addEventListener('wheel', (e) => {
    if(e.deltaY > 0) {    
        text.style.transition = 'transform 0.1s'
        if(zoom <= 1) {
            text.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
        }
    } else {    
        text.style.transition = 'transform 0.1s'
        if(zoom >= 0) {
            text.style.transform = `scale(${zoom += ZOOM_SPEED})`;
        }
    }

    if(zoom > 1) {
        text.style.transform = `scale(1)`
        zoom = 1
    }
    if(zoom < 0) {
        text.style.transform = `scale(0)`
        zoom = 0

    }
})