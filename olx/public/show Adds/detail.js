import {singleitem,id_data} from '../config/firebase.js'




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
    // img.src =data.imageUrl.stringValue
  

    let info = document.getElementById('info')
    info.innerHTML =data.area




    console.log(data.price);
    let Address = document.getElementById('price')
    Address.innerHTML =data.price

    let cardBody  =document.getElementById('cardBody')
    // cardBody.style.backgroundImage = 
    // cardBody.style.backgroundSize = '100% 100%'

    document.getElementById('title').innerHTML =data.title

    
}

getInfo()


function gotoChat(){
    let v = window.location.href
    
    let id = v.slice(v.indexOf('=')+1)
    localStorage.setItem('addUserID',JSON.stringify(id))
}

gotoChat()