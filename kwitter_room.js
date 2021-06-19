var firebaseConfig = {
    apiKey: "AIzaSyAPYdqExzGJYiU95doJUsCJNRxJB9nRraU",
    authDomain: "class-test-projects.firebaseapp.com",
    databaseURL: "https://class-test-projects-default-rtdb.firebaseio.com",
    projectId: "class-test-projects",
    storageBucket: "class-test-projects.appspot.com",
    messagingSenderId: "390621470540",
    appId: "1:390621470540:web:ea5c84b13521c7136cb9e9",
    measurementId: "G-7X6FRRYGT5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code

    //End code
});});}
getData();