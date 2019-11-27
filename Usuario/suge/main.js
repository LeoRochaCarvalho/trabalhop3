// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCr8mwrBXGaU1QodzpFfjbzY7YXUTV1y3I",
  authDomain: "trabalhop3-2daae.firebaseapp.com",
  databaseURL: "https://trabalhop3-2daae.firebaseio.com",
  projectId: "trabalhop3-2daae",
  storageBucket: "trabalhop3-2daae.appspot.com",
  messagingSenderId: "446846072266",
  appId: "1:446846072266:web:68e6ef9e39a1deb44f0b33",
  measurementId: "G-472NPY4B0T"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nome: name,
    cpf:company,
    email:email,
    telefone:phone,
    sugestão:message
  });
}