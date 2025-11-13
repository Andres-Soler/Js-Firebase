import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyC2vUUa6kzwL7hJHfLDJ6VILYsJpoHU1FI",
authDomain: "pokeapi-881fb.firebaseapp.com",
projectId: "pokeapi-881fb",
storageBucket: "pokeapi-881fb.firebasestorage.app",
messagingSenderId: "660983807292",
appId: "1:660983807292:web:7396a4a8879861486eb239",
measurementId: "G-0QQ74DHNMT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };