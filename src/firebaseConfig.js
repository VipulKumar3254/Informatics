import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeJs87izRAE7rabLQCMlhoHaEQkkKNVjA",
    authDomain: "informatics-2b68c.firebaseapp.com",
    projectId: "informatics-2b68c",
    storageBucket: "informatics-2b68c.appspot.com",
    messagingSenderId: "310857118740",
    appId: "1:310857118740:web:aa5ec54a4f4e32c78ee301",
    measurementId: "G-3PY6HHLNJF"
    //...
  };
  
 export  const firebaseApp = initializeApp(firebaseConfig);



 export const db = getFirestore(firebaseApp)
 
