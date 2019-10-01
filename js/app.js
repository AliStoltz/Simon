// console.log('its working yo!');

// User Story

// - user inputs their name through a prompt.
// - score, rounds, and high score are recorded in the header above the device.

// - the console is displayed in the center of the page with four buttons (red, green, yellow, blue).
// - buttons change opacity with a toggle when clicked. 

// - the computer “Simon” lights up buttons in a random order.
// -the user must reproduce that order by clicking the buttons.

// -for each successful reproduction, a point is awarded to the player.
// - each Round continues until mistake is made by the user. 


// Nice-to have
// - buttons produce a specific tone when clicked

// step one
    // create a button
    //add a litener to the button which will trigger the console to start the game.


// step two
    // create a function that causes a toggle opacity on each color
    //create a listener that logs the buttons clicked into an array.

// step 3
    //create an array for the computers "button sequence"
    // each round it should loop through and add new combinations to the array

//step 4
    // create a function that compares the computers sequence at index [0] to the players click event

// step 5
    // create fucntions that update the score, round and highscore. 

$('button').on('click', ()=> {
    console.log('game has started');
})

const $yellow = $('.button-yellow')
$('.button-yellow').on('click', ()=> {
    $('.button-yellow').fadeToggle(100).fadeToggle(100);
    console.log($yellow.text());
})

const $red = $('.button-red')
$('.button-red').on('click', ()=> {
    $('.button-red').fadeToggle(100).fadeToggle(100);
    console.log($red.text());
})

const $green = $('.button-green')
$('.button-green').on('click', ()=> {
    $('.button-green').fadeToggle(100).fadeToggle(100);
    console.log($green.text());
})

const $blue = $('.button-blue')
$('.button-blue').on('click', ()=> {
    $('.button-blue').fadeToggle(100).fadeToggle(100);
    console.log($blue.text());
})

const colors = ['yellow', 'red', 'green', 'blue'];
const computerSequence = [];

createSequence = () => {
for (let i=0; i<2; i++) {
    let c = (Math.floor(Math.random() * (colors.length)));
    computerSequence.push(colors[c]);
}
console.log(computerSequence);
}
createSequence();
createSequence();
createSequence();