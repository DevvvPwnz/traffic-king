import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({

    apiKey: "AIzaSyCd-9Rdfj9EIfMA_Ayni7Gn2XJ_ak6KePc",
  authDomain: "traffic-king-eb1a2.firebaseapp.com",
  projectId: "traffic-king-eb1a2",
  storageBucket: "traffic-king-eb1a2.appspot.com",
  messagingSenderId: "532786894155",
  appId: "1:532786894155:web:eb27325cd622d237b7c4ce"
})

export const auth = app.auth()
export default app