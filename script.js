let loadButton = document.getElementById('load-btn')

let loadingBar = document.getElementById('loading-bar')

loadButton.addEventListener('click', () => {
  loadingBar.classList.add('animation')
})