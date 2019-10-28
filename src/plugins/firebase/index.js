import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    /**
     * YOUR FIREBASE CONFIG
     */
  }
  firebase.initializeApp(config)
}

export default ({ app }, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
}
