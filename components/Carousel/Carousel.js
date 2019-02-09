// class Carousel {

// }

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

//Array of images
const arr = Array.from(document.querySelectorAll('.carousel img'));

//Change img display to block
const startImg = arr[0].style.display = 'block'

//Select and add event listeners to navigation buttons
const leftNav = document
    .querySelector('.left-button')
    .addEventListener('click', () => handleLeftClick(arr));
const rightNav = document
    .querySelector('.right-button')
    .addEventListener('click', () => handleRightClick(arr));

//Handle click events on navigation buttons
// const handleLeftClick(arr) => {

// }

// const handleRightClick(arr) => {

// }
