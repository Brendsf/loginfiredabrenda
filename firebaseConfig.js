// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCBrNJfszEdCNY_aaDFZsRsNJzp3KMCU34",
  authDomain: "brendinha-7724d.firebaseapp.com",
  projectId: "brendinha-7724d",
  storageBucket: "brendinha-7724d.appspot.com", // 🔧 Corrigido aqui!
  messagingSenderId: "561095257833",
  appId: "1:561095257833:web:e873f414e4872f7e544a78"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa o módulo de autenticação
export const auth = getAuth(app);
