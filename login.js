let config = {
    apiKey: "AIzaSyDs83lnN6hSnVO09xZqEsKhSWK3nhAbRDk",
    authDomain: "getfrisk.firebaseapp.com",
    databaseURL: "https://getfrisk.firebaseio.com",
    projectId: "getfrisk",
    storageBucket: "gs://getfrisk.appspot.com/",
    messagingSenderId: "932593743065"
};

firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();

// Get Elements
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnRegister = document.getElementById('btnRegister');
var btnLogout = document.getElementById('btnLogout');

function LoginEmailPassword() {

  // Get email and password
  var email = txtEmail.value;
  var password = txtPassword.value;
  var auth = firebase.auth();
  console.log( '---===email===---', email );
  console.log( '---===password===---', password );
//console.log( '---===auth===---', auth );

  // Login with email and password
  var promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(function(error) {
    console.log(error.message);
  });
  
}


//register event
function registerWithEmailPassword() {

  // Get email and password
  var email = txtEmail.value;
  var password = txtPassword.value;
  var auth = firebase.auth();
  console.log( '---===email===---', email );
  console.log( '---===password===---', password );
  console.log( '---===auth===---', auth );
 // Login with email and passwordword
  var promise = auth.createUserWithEmailAndPassword(email, password);
  console.log( '---===promise===---', promise );
 // promise.catch(console.log(error.message));
}

// Real time listener
//firebase.auth().onAuthStateChanged(firebaseUser);

// Google sigin function
function googleSignin() {

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    console.log(token);
    console.log(user);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(error.code);
    console.log(error.message);
  });
}

function googleSignout() {
  firebase.auth().signOut()

    .then(function() {
      console.log('Signout Succesfull');
    }, function(error) {
      console.log('Signout Failed');
    });
}
