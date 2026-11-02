const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const interestInput = document.querySelector('#interest');
const result = document.querySelector('#result');

const form = document.querySelector('#interestForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Form submitted!');

    const name = nameInput.value;
    const email = emailInput.value;
    const interest = interestInput.value;

    if(name === '') {
        result.textContent = 'Please fill in all name.';
    } else if(email === '') {   
        result.textContent = 'Please fill in your email.';
    } else if(interest === '') {
        result.textContent = 'Please fill your interest.';
    } else if(interest === 'volunteer'){
        result.textContent = 'Explore our volunteering opportunities!';
    } else if(interest === 'events'){
        result.textContent = 'Check out our upcoming events!';
    } else if(interest === 'mentoring'){
        result.textContent = 'Check out our mentoring programs!';
    } else{
        result.textContent = 'Thank you for your interest! We will contact you soon.';
    }
    
    
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Interest:', interest);

    

    nameInput.value = '';
    emailInput.value = '';
    interestInput.value = '';

});
