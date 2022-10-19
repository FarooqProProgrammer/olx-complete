import {singleitem,id_data} from '../config/firebase.js'




window.getInfo =async function () {
    let v = window.location.href
    let id = v.slice(47)

    let data =await singleitem(id)

    // console.log(data1);
    

    // console.log(data);
    // let data = JSON.parse(localStorage.getItem("current"));
    // console.log(current);
    // console.log();

    let img = document.getElementById('img')     
    img.src =data.image.stringValue
    console.log(data.image.stringValue
        );


    let info = document.getElementById('info')
    info.innerHTML =data.area.stringValue





    let Address = document.getElementById('Address')
    Address.innerHTML =data.Address.stringValue

    let cardBody  =document.getElementById('cardBody')
    // cardBody.style.backgroundImage = 
    // cardBody.style.backgroundSize = '100% 100%'

    document.getElementById('title').innerHTML =data.title.stringValue

    
}

getInfo()