"use strict";

let hiddenBtn = document.querySelector('.hidden__element'),
    title = document.querySelector('.title'),
    changeBtn = document.querySelector('#change-btn'),
    hideBtn = document.querySelector('#hide-btn');


changeBtn.addEventListener('click', () => {
    const value = getRandomColor();
    const randomColor = `rgb(${value[0]}, ${value[1]}, ${value[2]})`;
    
    title.textContent = randomColor;
    document.body.style.background = randomColor;

    changeBtn.style.background = randomColor;
    hideBtn.style.background = randomColor;
});


changeBtn.addEventListener('click', () => {
    changeBtn.style.borderColor = 'white';
    changeBtn.style.color = 'white';
    hideBtn.style.borderColor = 'white';
    hideBtn.style.color = 'white';
},  { once: true });


hideBtn.addEventListener('click', hideDisplay); 

hiddenBtn.addEventListener('click', showDisplay); 


function hideDisplay() {
    title.classList.add('opacity');
    changeBtn.classList.add('opacity');
    hideBtn.classList.add('opacity');
}

function showDisplay() {
    title.classList.remove('opacity');
    changeBtn.classList.remove('opacity');
    hideBtn.classList.remove('opacity');
}

function getRandomColor() {
    const num = [];

    for (let i = 0; i < 3; i++) {
        let randInt = Math.floor(Math.random() * 255);
        num.push(randInt);
    }

    return num;
}