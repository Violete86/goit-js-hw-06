
const input= document.querySelector('input');

input.addEventListener('blur', (event) => {
  let inputLength = input.value.length;

   if(inputLength === 6){
  event.target.classList.remove("invalid");
  event.target.classList.add("valid");
  return;

} else {
  event.target.classList.remove('valid');
  event.target.classList.add("invalid");
}
}); 


