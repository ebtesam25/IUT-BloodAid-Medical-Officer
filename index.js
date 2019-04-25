firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	  document.getElementById("login_page").style.display="none";
	  document.getElementById("loggedin").style.display="block";
	  
  } else {
    // No user is signed in.
	  document.getElementById("login_page").style.display="block";
	  document.getElementById("loggedin").style.display="none";
  }
});

function login(){
	var userEmail= document.getElementById("user").value;
	var userPass= document.getElementById("pwd").value;
	
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
		window.alert("Error:" +errorMessage);
	});
}

function logout(){
	firebase.auth().signOut();
}