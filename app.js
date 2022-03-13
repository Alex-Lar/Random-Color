"use strict";

let title = document.querySelector('.title');
let btn = document.querySelector('.button');


btn.addEventListener('click', () => {
    const value = getRandom();

    title.textContent = `RGB(${value[0]}, ${value[1]}, ${value[2]})`;
    document.body.style.background = `rgb(${value[0]}, ${value[1]}, ${value[2]})`;
});


function getRandom() {
    const num = [];

    for (let i = 0; i < 3; i++) {
        let randInt = Math.floor(Math.random() * 255);
        num.push(randInt);
    }

    return num;
}