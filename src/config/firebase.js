
import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { initializeAuth } from 'firebase/auth';

//Aqui vc deve colocar as suas credenciais 
const firebaseConfig = {
  apiKey: "AIzaSyCptqCHW2WGO9JV1D5PvQtH-A-pR1q_mRI",
  authDomain: "anthonyifal523.firebaseapp.com",
  projectId: "anthonyifal523",
  storageBucket: "anthonyifal523.appspot.com",
  messagingSenderId: "464335500416",
  appId: "1:464335500416:web:cfbdf25b5de2223f0e2265",
  measurementId: "G-G71N94WNST"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)
export { app, db, auth } 