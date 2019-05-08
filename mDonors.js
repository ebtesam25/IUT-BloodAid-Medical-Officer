var loadbtn=document.querySelector("#loadbtn");
loadbtn.addEventListener("click",generateTable);

function generateTable(){
var table = document.getElementById("students");
var query = firebase.database().ref("Donors").child("A+");
query.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="A+";
	  
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});
var query2 = firebase.database().ref("Donors").child("A-");
query2.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="A-";
	  
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});
var query3 = firebase.database().ref("Donors").child("B+");
query3.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="B+";
	  
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});


var query4 = firebase.database().ref("Donors").child("AB+");
query4.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="AB+";
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});
	
var query5 = firebase.database().ref("Donors").child("AB-");
query5.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="AB-";
	  
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});
	
var query6 = firebase.database().ref("Donors").child("O+");
query6.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="O+";
	  
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});
	
var query7 = firebase.database().ref("Donors").child("O-");
query7.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="O-";
	  
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});
	
var query8 = firebase.database().ref("Donors").child("B-");
query8.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  var bg="B-";
	  
	  donorHtmlFromObject(valuE,keY,bg);
	
  });
});
	
}


function donorHtmlFromObject(donor,key,bgroup){
  console.log( donor );
	var tableRef=document.getElementById("students");
	var indexno =tableRef.rows.length;
	console.log(this.rowIndex);
	var newDonor=tableRef.insertRow(indexno);
	var newCell = newDonor.insertCell(0);
	newCell.setAttribute("id","std_id");
	var sid=donor.sid;
	console.log(sid);
	var details  = document.createTextNode(sid);
	newCell.appendChild(details);
	var newCell = newDonor.insertCell(1);
	var name=donor.name;
	console.log(name);
	var details  = document.createTextNode(name);
	newCell.appendChild(details);
	var newCell = newDonor.insertCell(2);
	var bg=donor.bg;
	console.log(bg);
	var details  = document.createTextNode(bg);
	newCell.appendChild(details);
	var newCell = newDonor.insertCell(3);
	var status=donor.status;
	console.log(status);
	var details  = document.createTextNode(status);
	newCell.appendChild(details);
	var key_id=key;
	console.log(key_id);
	var newCell = newDonor.insertCell(4);
	var details  = document.createTextNode(key_id);
	newCell.setAttribute("id","f_id");
	newCell.appendChild(details);
	var newCell = newDonor.insertCell(5);
	var btn = document.createElement("BUTTON");
  	btn.innerHTML = "Approve";
	btn.className = "apprButton";
	btn.setAttribute("onclick","approvalState(this);");
	newCell.setAttribute("align","center");
  	newCell.appendChild(btn);
	
}
function approvalState(row){
	var id=row.parentNode.parentNode.cells.item(4).innerHTML;
	var bg=row.parentNode.parentNode.cells.item(2).innerHTML;
	console.log(id,bg);
var ref = firebase.database().ref("Donors/"+bg+"/"+ id);
	ref.on("value", gotOne);
	ref.update({status:"approved"});	
}
function gotOne(data) {
	var x = data.val();
	s=x.status;
}


