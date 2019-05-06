import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "API_KEY_HERE",
    authDomain: "fake-movie-project.firebaseapp.com",
    databaseURL: "https://fake-movie-project.firebaseio.com",
    projectId: "fake-movie-project",
    storageBucket: "fake-movie-project.appspot.com",
    messagingSenderId: "32562164603",
    appId: "1:32562164603:web:0c93e43710045dc7"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore()
