let robin = document.getElementById('robin')
let starFire = document.getElementById('star-fire')
let raven = document.getElementById('raven')
let beastBoy = document.getElementById('beast-boy')
let cyborg = document.getElementById('cyborg')

robin.addEventListener('click', () => {
    robin.classList.add('robin-img-active')
})

starFire.addEventListener('click', () => {
    starFire.classList.add('star-fire-img-active')
})

raven.addEventListener('click', () => {
    raven.classList.add('raven-img-active')
})

beastBoy.addEventListener('click', () => {
    beastBoy.classList.add('beast-boy-img-active')
})

cyborg.addEventListener('click', () => {
    cyborg.classList.add('cyborg-img-active')
})