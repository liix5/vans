// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//* firestore can allow for real time update without refreching the page
import { getFirestore, getDocs, collection, doc, getDoc,query,where } from "firebase/firestore/lite" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN8cHs1KMBNAqoo6IntwFlccno3P613hs",
  authDomain: "vanlife-91278.firebaseapp.com",
  projectId: "vanlife-91278",
  storageBucket: "vanlife-91278.appspot.com",
  messagingSenderId: "531214325635",
  appId: "1:531214325635:web:659d9451da944fdb0408b6",
  measurementId: "G-9HWYMTLH4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
//* insted of repeating it on every function
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    
    return dataArr
}

export async function getVan(id){
    const docRef = doc(db, 'vans', id)
    const vanSnapshot = await getDoc(docRef)
    console.log(vanSnapshot)
    //*  return vanSnapshot.data() - this works fine but mybe we will need the id for some reasone
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}


export async function getHostVans() {
    const q = query(vansCollectionRef,where('hostId','==','123'))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    
    return dataArr
}



export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}