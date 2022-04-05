var firebaseConfig = {
    apiKey: "#",
    authDomain: "#",
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#",
    measurementId: #"
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
