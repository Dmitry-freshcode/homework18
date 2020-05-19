"use strict";

//1,2
import { MyArray } from "./myArray.js";

const arr1 = new MyArray(5,24);
let iter = arr1[Symbol.iterator]();

console.log(arr1.getArr);


//3
const forms = document.forms[0];
const login = forms[0];
const pass = forms[1];

login.addEventListener('mouseover', colorBlue);
login.addEventListener('mouseout', colorDefault);

pass.addEventListener('mouseover', colorBlue);
pass.addEventListener('mouseout', colorDefault);

login.addEventListener('focusin', bgBlue);
login.addEventListener('focusout', bgDefault);

pass.addEventListener('focusin', bgBlue);
pass.addEventListener('focusout', bgDefault);



function colorBlue(event) {
    event.target.classList.add('borderBlue');
}
function colorDefault(event) {
    event.target.classList.remove('borderBlue');
}
function bgBlue(event) {
    event.target.classList.add('bgBlue');
}
function bgDefault(event) {
    event.target.classList.remove('bgBlue');
}

//4*

document.addEventListener('click', function (event) {
    if(event.target.classList.value === 'delete'){
        event.target.parentNode.remove();
    }
});
