import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, onSnapshot, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkDK7ZiBKXiXdqER3VxsAd6w-j3E7CTSE",
  authDomain: "sistemas-de-informacion-7eb37.firebaseapp.com",
  projectId: "sistemas-de-informacion-7eb37",
  storageBucket: "sistemas-de-informacion-7eb37.appspot.com",
  messagingSenderId: "948456503691",
  appId: "1:948456503691:web:54c0bc04a59f00c4c7978e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveTask = (nombre, rut) => {
  console.log(addDoc(collection(db, 'task'), { nombre, rut }));
}

export const getTasks = () => getDocs(collection(db, 'task'))

export const onGetTasks = (callback) => onSnapshot(collection(db, 'task'), callback)

export function realizarConsulta(nombre, rut) {
  const q = query(collection(db, 'task'), where('nombre', '==', nombre), where('rut', '==', rut));

  getDocs(q)
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        // El usuario no se encontraba en la base de datos
        alert(`El apoderado ${nombre} con RUT ${rut} ¡NO! está autorizado para retirar al alumno`);
      } else {
        // El usuario se encontraba en la base de datos
        alert(`El apoderado ${nombre} con RUT ${rut} está autorizado para retirar al alumno`);
      }
    })
    .catch((error) => {
      console.error('Error al realizar la consulta:', error);
    });
}