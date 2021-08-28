var firebaseConfig = {
    apiKey: "AIzaSyCqS4pJxlSZNM0GJk2hV1Gy9kSn2wD9P9c",
    authDomain: "test-b659b.firebaseapp.com",
    projectId: "test-b659b",
    storageBucket: "test-b659b.appspot.com",
    messagingSenderId: "1077388257904",
    appId: "1:1077388257904:web:c34284fc66903cccdee2b5",
    measurementId: "G-GHF9VZL635"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 firebase.analytics();


  
  var messagesRef = firebase.database().ref('messages');

document.getElementById("signupform").addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();

var username = document.getElementById("username").value;
var word = document.getElementById("word").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("contact").value;


saveMessage(username,word,email,contact);
alert("SignUp successfully");
var e = document.getElementById("signup_link").innerHTML="<a href='login.html'>Login Now</a>"
document.getElementById("signup_link").innerHTML = e;
// document.querySelector('.alert').style.display = 'block';

}



function saveMessage(username,word,email,contact) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    username:username,
    password : word,
    email:email,
    contact:contact
  });
}