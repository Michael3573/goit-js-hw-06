

const loginFormEl = document.querySelector('form.login-form');

loginFormEl.addEventListener('submit', (event) => {
event.preventDefault();

if (!loginFormEl.checkValidity()) {
   alert('Please fill in all fields.');
   return;
}

const formElements = loginFormEl.elements;
const formData = {};
for (let i = 0; i < formElements.length; i++) {
   const element = formElements[i];
   if (element.name) {
     formData[element.name] = element.value;
   }
 }
 console.log(formData);
 loginFormEl.reset();
});
