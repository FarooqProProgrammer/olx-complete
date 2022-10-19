// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
// import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
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
// const auth = getAuth(app);
// const firestore = getFirestore(app);





import {  Register } from "../config/firebase.js";


// function Register(userInfo){


//   const {Email,Pass} = userInfo
//   createUserWithEmailAndPassword(auth, Email, Pass)
//   .then((userCredential) => {
//     // Signed in 
//     addUser(userInfo)
//     console.log("Adding Authentication: "+"success");
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// }




// function addUser(userInfo){
//   try {

//     const {Name,Age,Email} = userInfo

//     addDoc(collection(firestore, "users"), {Name,Age,Email});
//     console.log("Adding Authentication: "+"success");

//   }catch(e){
//     console.log('Error adding message: ',e)
//   }
// }












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



window.SignUP = function (event){
  event.preventDefault()
  const Name = document.getElementById('name').value
  const Age = document.getElementById('age').value
  const Email = document.getElementById('email').value
  const Pass = document.getElementById('pass').value
  


  let userInfo = {Name,Age,Email,Pass}

  Register(userInfo)


}


function GotoLogin(){
  window.location = "../login/index.html"
}