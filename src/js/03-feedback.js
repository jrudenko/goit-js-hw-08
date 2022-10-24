import '../css/common.css';
import '../css/03-feedback.css';

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const getData = localStorage.getItem(STORAGE_KEY);


let formData = JSON.parse(getData) || {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};   

refs.form.addEventListener('submit', onFormSummit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
};

populateTextarea();

function onFormSummit(e) { 
    e.preventDefault();
    console.log('Submitting a form');
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea() {
    const savedMassage = formData;

    if (savedMassage) {        
        refs.input.value = savedMassage.input;
        refs.textarea.value = savedMassage.textarea;       
    }
};






