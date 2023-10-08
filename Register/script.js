let input_group = document.querySelectorAll('.input_group input');
let sign_in = document.querySelector('.sign_in')
let name_user = document.querySelector('.name_user')
let phone_number = document.querySelector('.phone_number')
let flag1 = false
let flag2 = false

input_group.forEach(input_group => {
  input_group.addEventListener('input', () => {
    if (input_group.value.length >= 2 && input_group.value.length <= 30) {
      input_group.style.borderColor = 'green';
      input_group.nextElementSibling.innerHTML = 'Правильно!';
      input_group.nextElementSibling.style.color = 'green';
    } 
    else {
      input_group.style.borderColor = 'crimson';
      input_group.nextElementSibling.innerHTML = 'Неверно! Надо минимум 2 символа, максимум 30 символов';
      input_group.nextElementSibling.style.color = 'crimson';
    }
  });
});

sign_in.addEventListener( 'click', () => {

    let local_login = localStorage.setItem('name_user' , input_group.value);

    if(flag1 == true && flag2 == true ){
      alert('Всё получилось');
      const name_user = {
        
       
      }
      localStorage.setItem('user',JSON.stringify(name_user))
      document.location.href = "../Login/index.html";
    }

    else{
      alert('Ошибка при создание кода');
    }
  });