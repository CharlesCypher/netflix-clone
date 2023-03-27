import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWtWw-OTN83mdsKwdp5g_GIC_Yo8IN8nk",
  authDomain: "coriflix.firebaseapp.com",
  projectId: "coriflix",
  storageBucket: "coriflix.appspot.com",
  messagingSenderId: "961559674939",
  appId: "1:961559674939:web:d15ef0aa0f3e330b289c1e",
  measurementId: "G-EGP3TV2MN0",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
