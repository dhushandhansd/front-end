let fullname = document.getElementById('name')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let password = document.getElementById('password')
let error = document.getElementById('error')
let form = document.getElementById('register')

form.addEventListener('submit', (e) => {
  
  if(fullname.value == null || fullname.value == "") {
    error.innerText = 'Name cannot be Empty'

  } else if (phone == 0 || phone.value == '') {
    error.innerText = 'Phone Number cannot be Empty or 0'

  } else if (email.value == "" || email.value == " ") {
    error.innerText = 'Email Address cannot be Empty'

  } else if (pasword.value.length < 5) {
    error.innerText = 'Password must not greater than 5 characters'

  } 
})
