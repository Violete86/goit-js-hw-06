
const input= document.querySelector('input');

input.addEventListener('blur', (event) => {
  let inputLength = input.value.length;
   if(inputLength === 6)
  event.target.classList.add("valid");
  else  if(inputLength === 0)
  event.target.classList.remove('valid','invalid');
  else 
   event.target.classList.add("invalid");
});