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
  navigator.clipboard.writeText(passwordEl.value);
});

// ստեղծել button 

const copyBtn = document.createElement('button');
copyBtn.classList.add('password-button');
copyBtn.innerText = 'Copy';
copyBtn.addEventListener('click', (e) => {
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl.value);
})

const generateBtn = document.createElement('button');
generateBtn.classList.add('password-button');
generateBtn.innerText = 'Generate';
generateBtn.addEventListener('click', (e) => {
  let password = generatePassword(12);
  passwordEl.value = password;
});

function generatePassword(passwordLength) {
  const numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const symbolChars = "!@#$%^&*()_+";
  const allChars = numberChars + upperChars + lowerChars + symbolChars; 

  let randomString = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);
    randomString += allChars[randomNumber];
  }

  return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);