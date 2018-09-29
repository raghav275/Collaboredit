import firebase from 'firebase'


  var config = {
    apiKey: "AIzaSyBI4QPb7O0IVN9MPt4QtLUpv8bNKpT9aBM",
    authDomain: "collaberedit.firebaseapp.com",
    databaseURL: "https://collaberedit.firebaseio.com",
    projectId: "collaberedit",
    storageBucket: "",
    messagingSenderId: "421121799307"
  };
 var fire=  firebase.initializeApp(config);

export default fire;