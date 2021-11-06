import { initializeApp } from 'firebase/app';
import { getAuth , 
         GoogleAuthProvider, 
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged
         } from 'firebase/auth';
import { getDatabase ,ref, set, onValue , child, push } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDvW1pN05l0NjtI6hQnjQ9HEc2WKjldQ4o",
  authDomain: "whatsapp-42f87.firebaseapp.com",
  databaseURL: "https://whatsapp-42f87-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsapp-42f87",
  storageBucket: "whatsapp-42f87.appspot.com",
  messagingSenderId: "380825201484",
  appId: "1:380825201484:web:fddcb323be6cb6841e3de9"
};
  const app =initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const database = getDatabase();
export {auth,provider,database,createUserWithEmailAndPassword,signInWithEmailAndPassword,
  onAuthStateChanged,ref, set, onValue, child, push};
export default db;