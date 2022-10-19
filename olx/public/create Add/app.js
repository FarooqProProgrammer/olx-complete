// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
// import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'


// const firebaseConfig = {
//   apiKey: "AIzaSyAEgX81VqSYK_Bv_68JD6-uMvx-3iwK2nU",
//   authDomain: "fir-1-28c92.firebaseapp.com",
//   projectId: "fir-1-28c92",
//   storageBucket: "fir-1-28c92.appspot.com",
//   messagingSenderId: "396709616771",
//   appId: "1:396709616771:web:0364caad53de25096e8fb6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

import {addInfo, uploadImage} from '../config/firebase.js'


// function addInfo(userInfo){

//   const  {Address,url,title,area,price} = userInfo  
  

//   try{

//     addDoc(collection(db, "ADDS"), {
//       Address,
//       url,
//       title,
//       area,
//       price
//     });

//     console.log("Add Successfully")
    

//   }catch(e){
//     console.log("Error: " , e)
//   }

// }


var a 
window.getImage = function (e){
    const file = e.target.files[0]
    // const imgElem = document.getElementById('img')

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (e) {
       
        return a = e.target.result
       
    }
   
}



window.Submit =async function (){
  
  const title = document.getElementById('title').value
  const price = document.getElementById('price').value
  const Address = document.getElementById("Address").value
  const area = document.getElementById("area").value
  const url = document.getElementById("url").files[0]

    const image = await uploadImage(url)

  // let userInfo = {title,price,Address,area,a}
  let userInfo = {Address,image,title,area,price}
  
  
  addInfo(userInfo)



}












const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});














var a 
function getImage(e) {
    const file = e.target.files[0]
    const imgElem = document.getElementById('img')

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (e) {
       
        return a = e.target.result
       
    }
   
}


