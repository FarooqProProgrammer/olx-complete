<<<<<<< HEAD
import {addMessages } from '../config/firebase.js'
=======
import {addMessages , getRealtimeAds} from '../config/firebase.js'
>>>>>>> dda37d5260f187a43ffd92fb0fd5cf70642bd06a


document.getElementById('mt-btn').addEventListener('click', async ()=>{


    let message = document.getElementById('message').value
    addMessages(message)





})