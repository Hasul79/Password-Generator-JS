const mainEl = document.querySelector('.main');
// ստեղծել input
const passwordEl = document.createElement('input');
// ավելացնել class
passwordEl.classList.add('password');
// ավելացնել placeholder
passwordEl.setAttribute('placeholder', 'Generate password');
// input  ստանդարտից դուրս գալ 
passwordEl.addEventListener('keypress', (e) => {
  e.preventDefault();
})
// ստեղծել ֆունկցիա generate password
passwordEl.addEventListener('focus', (e) => {

});

mainEl.appendChild(passwordEl);