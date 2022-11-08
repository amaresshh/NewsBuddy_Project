import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyByYlC-NCQQUKcqcPDRzUzX5yFQ334QV60',
  authDomain: 'newsapp-3e1cb.firebaseapp.com',
  projectId: 'newsapp-3e1cb',
  storageBucket: 'newsapp-3e1cb.appspot.com',
  messagingSenderId: '78324547027',
  appId: '1:78324547027:web:d146c70c45e035777b0326',
  measurementId: 'G-9XEHX6R97Z',
})

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
export { auth, db }
