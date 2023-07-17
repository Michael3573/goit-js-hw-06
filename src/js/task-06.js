

const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
   const inputValue = input.value.trim ()
   const expectedLength = input.getAttribute('data-length');

   if (inputValue.length === Number(expectedLength)) {
      input.classList.add('valid');
      input.classList.remove('invalid');
   } else {
      input.classList.add('invalid')
      input.classList.remove('valid')
   }
});
