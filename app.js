
// 1a
const btn1 = document.querySelector('#one')


// 1b
btn1.onclick = function (){
    alert('You clicked the first button! Congrats!')
}


// 2a
const h3 = document.querySelector('h3')



// 2b
h3.addEventListener('hover', () => {
    alert("You hovered over the h3 element! Congrats!")
})


//3b
const userForm = document.querySelector(`form`);

userForm.addEventListener(`submit`, () => {
    alert(`The form was submitted!`);
});


/*
2b. Using addEventListener, have an alert that says "You hovered over the h3 element! Congrats!" pop up when you hover over the h3
3a. Select the form element/tag and set it to a const variable called form
3b. Using addEventListener, display the value in the text input with an alert when the submit input in the form is clicked.
*/