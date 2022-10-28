import {getData1,getUserData,checkChatroom,createChatroom} from '../config/firebase.js'

async function user(){

    

    // let id = JSON.parse(localStorage.getItem("addUserID"))
    // console.log();
    let data = await getData1()
    console.log(data);


    let id_info = document.getElementById('info');
    for (let i = 0;i<data.length;i++) {

        let div_body = document.createElement('div')
        div_body.setAttribute('class','user1 flex justify-around items-center text-[20px] rounded-[10px] bg-[#3498db] w-[80%] h-[80px]  ml-[90px] mt-[20px]')
        
    
        let div_name = document.createElement("div")
        div_name.setAttribute('class','text-[#fff]')
        div_name.innerHTML = data[i].Name
        div_body.appendChild(div_name)
    
        let div_email = document.createElement('div')
        div_email.setAttribute('class','text-white')
        div_email.innerHTML = data[i].Email
        div_body.appendChild(div_email)
    
        let div_age = document.createElement('div')
        div_age.setAttribute('class','text-white')
        div_age.innerHTML = data[i].Age
        div_body.appendChild(div_age)
    
        let div_btn = document.createElement('button')
        div_btn.setAttribute('class','checkRoom bg-[#fff] pt-[5px] pb-[5px] pl-[5px] pr-[5px] rounded-[10px]')
        div_btn.innerHTML = 'Check Room'
        div_btn.setAttribute('onclick',`checkRoom('${data[i].id}')`)
        div_body.appendChild(div_btn)

        id_info.appendChild(div_body)
    }
   
}
user()


window.checkRoom =async function (id) {

    // await checkChatroom(id)

     //1. check if chatroom exists
     var chatroom = await checkChatroom(id)
     var chatId;
     //2. if not exists then create it
     if (!chatroom) {
         chatroom = await createChatroom(id)
         chatId = chatroom._id
         alert('chatroom created successfully')
     } else {
         chatId = chatroom._id
         alert('chatroom exists')
     }
     
     console.log(chatId);
 
     location.href = `chatMessage.html?id=${chatId}`
 
}




// window.initiateChat = async function () {
//     console.log('userId ===>', data.userId)
   
// }





async function getUser(){

    let id_uid = JSON.parse(localStorage.getItem("item"))
    console.log(id_uid.uid);

    let userData = await getUserData(id_uid.uid)
    console.log(userData);

    document.getElementById("LoginName").innerHTML = userData.Name


    user()

}

getUser()
