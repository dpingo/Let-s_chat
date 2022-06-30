 var firebaseConfig = {
    apiKey: "AIzaSyBlt_ywZv5YK8ZqSysIzLCzgag98rj9Za8",
    authDomain: "kwitter-92647.firebaseapp.com",
    databaseURL: "https://kwitter-92647-default-rtdb.firebaseio.com",
    projectId: "kwitter-92647",
    storageBucket: "kwitter-92647.appspot.com",
    messagingSenderId: "807361186508",
    appId: "1:807361186508:web:ad8b67433c42297bdd9069",
    measurementId: "G-BQ7SMPDSQC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   function addRoom(){
    user_room=document.getElementById("room").value
    firebase.database().ref("/").child(user_room).update({
        purpose: "roomadded"
    })
  }