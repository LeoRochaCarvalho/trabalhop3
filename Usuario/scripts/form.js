// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCr8mwrBXGaU1QodzpFfjbzY7YXUTV1y3I",
      authDomain: "trabalhop3-2daae.firebaseapp.com",
      databaseURL: "https://trabalhop3-2daae.firebaseio.com",
      projectId: "trabalhop3-2daae",
      storageBucket: "trabalhop3-2daae.appspot.com",
      messagingSenderId: "446846072266",
      appId: "1:446846072266:web:afd0d346e87e683a4f0b33",
      measurementId: "G-HDLWFF3SYS"
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
    var name = getInputVal(name());
    var Subject = getInputVal(Subject());
    var mail = getInputVal(mail());
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, Subject, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  function name() {
    return 'name';
  }
  
  
  function Subject() {
    return 'Subject';
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, Subject, mail, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      Subject:Subject,
      mail:mail,
      message:message
    });
  }
  
  