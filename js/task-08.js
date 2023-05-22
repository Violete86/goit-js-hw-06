const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget; 
    
if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
}

const dataArray = [];
  dataArray.push(email.value);
  dataArray.push(password.value);

  console.log(dataArray);
event.currentTarget.reset();
}
