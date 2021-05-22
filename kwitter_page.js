//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBWSzv4t8P1ezyh56BQTQ78LHxY-7jgeBE",
      authDomain: "emerlds-and-ruby-b16a3.firebaseapp.com",
      databaseURL: "https://emerlds-and-ruby-b16a3-default-rtdb.firebaseio.com",
      projectId: "emerlds-and-ruby-b16a3",
      storageBucket: "emerlds-and-ruby-b16a3.appspot.com",
      messagingSenderId: "921870928109",
      appId: "1:921870928109:web:6e2dfb6389b5fdbd70e4e4"
    };
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

//End code
      } });  }); }
getData();
