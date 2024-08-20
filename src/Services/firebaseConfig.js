import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEuHrAiztA43fwiSOXVvmcpDzX-FAN9iQ",
  authDomain: "login-bd319.firebaseapp.com",
  projectId: "login-bd319",
  storageBucket: "login-bd319.appspot.com",
  messagingSenderId: "969421616134",
  appId: "1:969421616134:web:b04471fe21f43212d1ff87"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);