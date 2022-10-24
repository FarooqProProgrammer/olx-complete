import {singleitem} from '../config/firebase.js'




async function getInfo() {
    let v = window.location.href
    
    let id = v.slice(v.indexOf('=')+1)

    let doc = JSON.parse(localStorage.getItem("Detail"))
    
    console.log(id);
    let data = await singleitem(id)
    console.log(data);
    // let {image} = data
    // console.log(image);    

    // console.log(data);
    // let data = JSON.parse(localStorage.getItem("current"));
    // console.log(current);
    // console.log();

    let img = document.getElementById('img')     
    img.src =data[0].image
  

    let info = document.getElementById('info')
    info.innerHTML =data[0].area

    let v1 = data[0].userID
    
    let id1 = v1
    localStorage.setItem('addUserID',JSON.stringify(id1))


    console.log(data[0].price);
    let Address = document.getElementById('price')
    Address.innerHTML =data[0].price

    let cardBody  =document.getElementById('cardBody')
    // cardBody.style.backgroundImage = 
    // cardBody.style.backgroundSize = '100% 100%'

    document.getElementById('title').innerHTML =data[0].title

    
}

getInfo()


// function gotoChat(){

// }

// gotoChat()