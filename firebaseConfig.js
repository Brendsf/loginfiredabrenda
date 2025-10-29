import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyCBrNJfszEdCNY_aaDFZsRsNJzp3KMCU34",
  authDomain: "brendinha-7724d.firebaseapp.com",
  databaseURL: "https://brendinha-7724d-default-rtdb.firebaseio.com",
  projectId: "brendinha-7724d",
  storageBucket: "brendinha-7724d.appspot.com",
  messagingSenderId: "561095257833",
  appId: "1:561095257833:web:e873f414e4872f7e544a78"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const api = axios.create({
  baseURL: "https://brendinha-7724d-default-rtdb.firebaseio.com"
});
