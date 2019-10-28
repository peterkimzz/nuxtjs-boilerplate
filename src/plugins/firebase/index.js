import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBuVUGRACZ6qVqUGJ1iF3dtbnH3Otam14Y',
    authDomain: 'e-specialist.firebaseapp.com',
    databaseURL: 'https://e-specialist.firebaseio.com',
    projectId: 'e-specialist',
    storageBucket: 'e-specialist.appspot.com',
    messagingSenderId: '870436349879',
    appId: '1:870436349879:web:4fafea8ee878ea40256a32'
  }
  firebase.initializeApp(config)
}

export default ({ app }, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
}
