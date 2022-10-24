import {sendMessageTofirestore,getMessagesFromfirestore} from '../config/firebase.js'

// 





// document.getElementById('c').addEventListener('click',async ()=>{
    


// })
// send()
window.send = async function(){
    let input1 = document.getElementById('input-message') .value
    console.log(input1);
    
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params.id);
        let a = params.id
        console.log(a);
    
        await sendMessageTofirestore(input1,a)

}
async function getMessage(){

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params.id);
    let a = params.id
    console.log(a);

    let message = await getMessagesFromfirestore(a,(data,id)=>{
    
        // console.log(data);
        let messages = document.getElementById('messages')
        messages.innerHTML = ''

    // let user = JSON.parse(localStorage.getItem('currentUser'))
    // console.log(user);


    console.log(id);
    var userID = id    

    for(let i = 0 ;i< data.length;i++) {
        if(userID == data[i].userId){
                messages.innerHTML += ` 
                <div class="chat-message ml-[800px] ">
                <div class="flex items-end ">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div ><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#2980b9] text-white text-gray-600">${data[i].text}</span></div>
                </div>
                
                </div>
            </div>
                `
            }
            else{
                messages.innerHTML += ` 
                <div class="chat-message ">
                <div class="flex items-end">
                <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#34495e] text-[#fff]">${data[i].text}</span></div>
                </div>
                
                </div>
            </div>
                `
        
            }
    }
    
    })





}
getMessage()