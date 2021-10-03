import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyCv3_QVSK6GcWBWGduvpNOXqoA7-ot2h_A",
  authDomain: "learn-firebase-f4fe0.firebaseapp.com",
  projectId: "learn-firebase-f4fe0",
  storageBucket: "learn-firebase-f4fe0.appspot.com",
  messagingSenderId: "1085902785112",
  appId: "1:1085902785112:web:4c44636f12c172fdf4582d"

};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export {db, firebase as default};
// const db = getFirestore(app);

// export async function create(data) {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       username: data.username,
//       email: data.email,
//       password: data.password
//     })
//     console.log("Document written with ID: ", docRef.id);
//   } catch (err) {
//     console.error("Error adding document: ", err);
//   }
// }

// export async function read(db) {
//   const dbUsers = collection(db, "users");
//   const readUsers = await getDocs(dbUsers);
//   const userList = readUsers.docs.map(doc => doc.data());
//   return userList;
// }