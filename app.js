"use strict";

let changeBtn = document.querySelector('#change-btn'),
    hideBtn = document.querySelector('#hide-btn'),
    title = document.querySelector('.title'),
    cover = document.createElement('div');


changeBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();

    document.body.style.background = randomColor;
    changeBtn.style.backgroundColor = randomColor;
    hideBtn.style.backgroundColor = randomColor;
    title.textContent = randomColor;
});


changeBtn.addEventListener('click', () => {
    changeBtn.style.borderColor = 'white';
    changeBtn.style.color = 'white';
    hideBtn.style.borderColor = 'white';
    hideBtn.style.color = 'white';
},  { once: true });


hideBtn.addEventListener('click', function() {
    hideDisplay();
    coverBody();
}); 

 
cover.addEventListener('click', showDisplay); 


function coverBody() {
    document.body.appendChild(cover);
    cover.setAttribute('class', 'cover');
}


function showDisplay() {
    title.classList.remove('opacity');
    changeBtn.classList.remove('opacity');
    hideBtn.classList.remove('opacity');

    cover.classList.remove('cover');
}


function hideDisplay() {
    title.classList.add('opacity');
    changeBtn.classList.add('opacity');
    hideBtn.classList.add('opacity');
}


function getRandomColor() {
    const num = [];

    for (let i = 0; i < 3; i++) {
        let randInt = Math.floor(Math.random() * 255);
        num.push(randInt);
    }

    return `rgb(${num[0]}, ${num[1]}, ${num[2]})`;
}