let buyButton = document.getElementById('buyButton')
let sellButton = document.getElementById('sellButton')
let purchaseButton = document.getElementById('purchaseButton')

buyButton.addEventListener('click', () => {
    localStorage.setItem('Purchase','Bitcoin for $200381 Purchased')
})

sellButton.addEventListener('click', () => {
    localStorage.setItem('Sale','Bitcoin for $200381 is sold')
})

purchaseButton.addEventListener('click', () => {
    alert('Purchased : ' + localStorage.getItem('Purchase'))
    alert('Sold : ' + localStorage.getItem('Sale'))
})