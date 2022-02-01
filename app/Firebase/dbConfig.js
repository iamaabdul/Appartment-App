import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKZrJq1MRRvVztPoYsX985i1vtovHbR4o",
  authDomain: "myfirestore-a3a1c.firebaseapp.com",
  projectId: "myfirestore-a3a1c",
  storageBucket: "myfirestore-a3a1c.appspot.com",
  messagingSenderId: "716816200655",
  appId: "1:716816200655:web:e42d6168649e87bbd9d8ba",
  measurementId: "G-M5SJQ0YDCZ",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default db;
