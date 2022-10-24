// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { getFirestore, collection, addDoc,doc,getDocFromCache ,setDoc, query, where, getDocs,getDoc,onSnapshot} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'



import {getStorage, ref ,uploadBytes ,getDownloadURL} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEzfwBVTaidpP-7oN88XP3gUGHKHPSGhA",
  authDomain: "apps-155ad.firebaseapp.com",
  projectId: "apps-155ad",
  storageBucket: "apps-155ad.appspot.com",
  messagingSenderId: "928983237582",
  appId: "1:928983237582:web:222f4681e564977bbae19f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

const storage = getStorage(app);

const auth = getAuth(app);
let   a;
function signin( email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem("item", JSON.stringify (user));
    console.log(user );
    alert('Login SuccessFully')
    window.location = '../index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert("you don't have an account: First create your account")
    // window.location = '../index.html'


  });

}


function Register(userInfo){


  const {Email,Pass} = userInfo
  createUserWithEmailAndPassword(auth, Email, Pass)
  .then((userCredential) => {
    // Signed in 
    
    console.log("Adding Authentication: "+"success");
    const user = userCredential.user;
    addUser(userInfo,user.uid)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}





function addUser(userInfo,userID){
  try {

    const {Name,Age,Email} = userInfo

    // const userId = auth.currentUser.uid

    setDoc(doc(firestore, "users", userID),{Name,Age,Email});
    console.log("Adding Authentication: "+"success");

  }catch(e){
    console.log('Error adding message: ',e)
  }
}



function addInfo(userInfo){

  const  {Address,image,title,area,price} = userInfo  
  // const userID = auth.currentUser.uid

  try{

    addDoc(collection(firestore, "ADDS"), {
      // userID,
      Address,
      image,
      title,
      area,
      price
    });

    console.log("Add Successfully")
    

  }catch(e){
    console.log("Error: " , e)
  }

}

// const booksRef = firebase.firestore().collection('ADDS');
var data = []
var id_data = []
async function getData(){
  // const q = query(collection(firestore, "ADDS"), where("title", "==", true));
  const colRef = collection(firestore, "ADDS");

  const docsSnap = await getDocs(colRef);
  docsSnap.forEach(doc => {
    // console.log(doc.data());
    data.push(doc.data())
    // console.log(data)
    id_data.push(doc.id)

    
})




return data 
}


function id_return(){
    return id_data
}

var id_data = []
async function singleitem(ID){
  

   
    // let Adds = []
    // const querySnapshot = await getDocs(collection(firestore, "ADDS"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   // console.log(doc.id, " => ", doc.data());
    //   Adds.push({id:doc.id,... doc.data()})
    // });
    // // console.log(Adds);

    // // localStorage.setItem("current",JSON.stringify(currentUser))
    // let doc = []
    // for(let i = 0;i<Adds.length;i++) {
    //   if('5DDVO6WUbdGTKLBuNxdq' == Adds[i].id) {
    //     doc.push(Adds[i])
    //   }
    // }
    // // return doc
    // console.log(doc);
    // localStorage.setItem("Detail",JSON.stringify(doc))




    const docRef = doc(firestore, "ADDS", ID);
    const docSnap = await getDoc(docRef);


    let data = []
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      data.push({id:docSnap.id,...docSnap.data()})
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
return data











}



async function uploadImage(image){
  const storageRef = ref(storage,`images/${image.name}`)
  const snapshot = await uploadBytes (storageRef,image)
  const url = await getDownloadURL(snapshot.ref)
  return url
}




// function getRealTime(callback){
//   onSnapshot(collection(firestore, "ADDS"), (querySnapshot) => {
//     const cities = [];
//     querySnapshot.forEach((doc) => {
//         cities.push({id:doc.id,...doc.data()});
//     });
//     console.log("Current cities in CA: ", cities.join(", "));
//   });
  
//   }
  


async function getAdsFromfirestore() {
  const querySnapshot = await getDocs(collection(firestore, "ADDS"));
   const ads = [] 
   querySnapshot.forEach((doc) => {
      ads.push({ id: doc.id, ...doc.data() })
  }); 
  return ads

}

async function addMessages(meassage) {
  const user = auth.currentUser;
  // Add a new document with a generated id.
  console.log(meassage);


  let a = new Date()
  let time = a.getHours()+':'+a.getMinutes()+":"+a.getSeconds()
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(firestore, "infinity_Room"), {
    uid: user.uid,
    userEmail:user.email,
    Message: meassage ,
    CreatedAt:time
  });
  // console.log("Document written with ID: ", docRef.id);
  console.log("Message Added Successfully");
}

function getRealtimeAds() {
  //2
  onSnapshot(collection(firestore, "infinity_Room"), (querySnapshot) => {
      const ads = []

      querySnapshot.forEach((doc) => {
          ads.push({ id: doc.id, ...doc.data() })
      });
      //3
      console.log(ads);
    //  callback(ads)

    const user = auth.currentUser;


     let id = document.getElementById('start-chat')
     id.style.overflow = "auto"
     id.innerHTML = ''
     
   for(let i = 0;i<ads.length;i++) {
    
    let d = document.createElement('div')
    d.style.marginTop = "20px"
    // d.style.float = "left"
    if(ads[i].uid == user.uid) {
       
     d.style.border = "2px solid black"
     d.style.backgroundColor = "#3498firestore"
     d.style.color = "#ecf0f1"
     d.style.width = "300px"
    //  d.style.float = "right"
    d.style.marginLeft = "700px"
     d.style.display = "block"
     d.style.clear = "left"

     d.style.padding = "10px 10px"
     
   } 
   else {
    d.style.width = "300px"
    d.style.backgroundColor = "#c0392b"
    d.style.color = "#f1c40f"
    d.style.padding = "10px 10px"
   }
   
 
     let email = document.createElement('span')
     email.innerHTML  = ads[i].userEmail +":  "
     d.appendChild(email)
 
     let s = document.createElement('span')
     s.innerHTML = ads[i].Message+" "+ads[i].CreatedAt
    
    
   
 
     d.appendChild(s)
     id.appendChild(d)
   }

  })
}






// async function checkChatroom(adUserId) {
//   const userId = auth.currentUser.uid
//   const q = query(collection(firestore, "chatrooms"),
//       where(`users.${userId}`, "==", true),
//       where(`users.${adUserId}`, "==", true))

//   const querySnapshot = await getDocs(q)

//   let room
//   querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//       room = { _id: doc.id, ...doc.data() }
//   })
//   return room
// }


// function createChatroom(adUserId) {
//   const userId = auth.currentUser.uid
//   const obj =  {
//       users: { 
//           [userId]: true, 
//           [adUserId]: true 
//       },
//       createdAt: Date.now()
//   } 
//   return addDoc(collection(firestore, "chatrooms"), obj)
// }


var data = []
async function getData1(){
  const q = query(collection(firestore, "users"));
 
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log();
    data.push({id:doc.id,...doc.data()})
  });
  // return data
  // console.log(data);
  return data.slice(0,data.length)
}

// getData1()

async function checkChatroom(adUserId) {
  const userId = auth.currentUser.uid
  const q = query(collection(firestore, "chatrooms"),
      where(`users.${userId}`, "==", true),
      where(`users.${adUserId}`, "==", true))

  const querySnapshot = await getDocs(q)

  var room
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      room = { _id: doc.id, ...doc.data() }
  })
  // console.log(room._id);
  return room
}



// let check = auth.currentUser
// // console.log(check);





function createChatroom(adUserId) {
  const userId = auth.currentUser.uid
  const obj =  {
      users: { 
          [userId]: true, 
          [adUserId]: true 
      },
      createdAt: Date.now()
  } 
  return addDoc(collection(firestore, "chatrooms"), obj)
}

async function sendMessageTofirestore(text, roomId) {
  console.log(roomId);
  var Messageid = roomId + Date.now();
  // const lastMessageRef = addDoc(collection(firestore, "chatrooms", `${roomId}`, "lastMessage"), { text: text, userId: auth.currentUser.uid })
  // await setDoc(lastMessageRef, { text: text, userId: auth.currentUser.uid });
  // const message = { text: text, createdAt: Date.now(), userId: auth.currentUser.uid }
  // const DocRef = doc(firestore, "chatrooms", `${roomId}`, "messages", `${Messageid}`);
  // await setDoc(DocRef, message);



  const userId = auth.currentUser.uid

 
  var Messageid = roomId + Date.now();
  // const lastMessageRef = addDoc(collection(firestore, "chatrooms", `${roomId}`, "lastMessage"), { text: text, userId: auth.currentUser.uid })
  // await setDoc(lastMessageRef, { text: text, userId: auth.currentUser.uid });
  const message = { text: text, createdAt: Date.now(), userId: auth.currentUser.uid }
  const DocRef = doc(firestore, "chatrooms", `${roomId}`, "messages", `${Messageid}`);
  await setDoc(DocRef, message);





}



// var userId1 = auth.currentUser.uid

// localStorage.setItem('currentUser',JSON.stringify(auth.currentUser))

async function getMessagesFromfirestore(roomId,callback) {
  const q = query(collection(firestore, "chatrooms", `${roomId}`, "messages"))
  onSnapshot(q, (querySnapshot) => {
      const messages = []
      querySnapshot.forEach((doc) => {
          messages.push({ id: doc.id, ...doc.data() })
      })
      console.log(messages);
      callback(messages,auth.currentUser.uid)
  })
}





// getRealtimeAds()

export {
  getData1,
  createChatroom,
  checkChatroom,
  getRealtimeAds,
  id_return,
  signin ,
  Register,
  addInfo,
  getData,
  singleitem,
  addMessages,
  id_data,
  uploadImage,
  getAdsFromfirestore,
  sendMessageTofirestore,
  getMessagesFromfirestore
  // getRealTime
}