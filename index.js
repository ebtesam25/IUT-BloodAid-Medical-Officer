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
	var uid="ZVIHSz2PONaAUDLPGRKY7aA6pZl1";
	var ref = firebase.database().ref("Admin/"+uid);
	ref.on("value", gotOne);
		

function gotOne(data) {
	var x = data.val();
	s=x.email;
	if(s==userEmail){
	   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
		window.alert("Error:" +errorMessage);
	});
	}
	else{
		window.alert("You're not an admin!");
	}
	
}
	
}

function logout(){
	firebase.auth().signOut();
}