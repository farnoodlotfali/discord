import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC5N2W1QSa9lgzXC5cAeYlpJVyL2oGWmPo',
  authDomain: 'discord-dd9a1.firebaseapp.com',
  projectId: 'discord-dd9a1',
  storageBucket: 'discord-dd9a1.appspot.com',
  messagingSenderId: '481431044889',
  appId: '1:481431044889:web:86a9346cf184cffa9b3b88',
  measurementId: 'G-DJ8WM3X13P',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
