let canvas = document.getElementById('canvas')
let canvasContent = canvas.getContext('2d')
let canvasImage = document.getElementById('canvas-img')

alert('Touch the Canvas to draw')

canvas.addEventListener('click', () => {
    canvasContent.drawImage(canvasImage,15,5)  
})