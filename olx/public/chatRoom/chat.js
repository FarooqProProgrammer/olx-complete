import {addMessages } from '../config/firebase.js'


document.getElementById('mt-btn').addEventListener('click', async ()=>{


    let message = document.getElementById('message').value
    addMessages(message)





})