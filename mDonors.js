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
	  
	  donorHtmlFromObject(valuE,keY);
	
  });
});
var query2 = firebase.database().ref("Donors").child("A-");
query2.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  
	  donorHtmlFromObject(valuE,keY);
	
  });
});
var query3 = firebase.database().ref("Donors").child("B+");
query3.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
	 //console.log(snapshot.val());
    var tr = document.createElement("tr");
    var keY = childSnapshot.key;
	  var valuE = childSnapshot.val();
	  
	  donorHtmlFromObject(valuE,keY);
	
  });
});
}

function donorHtmlFromObject(donor,key){
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
	var newCell = newDonor.insertCell(4);
	var btn = document.createElement("BUTTON");
  	btn.innerHTML = "Approve";
	btn.className = "apprButton";
	btn.setAttribute("onclick","approvalState(f_id.innerHTML);");
	newCell.setAttribute("align","center");
  	newCell.appendChild(btn);
	var key_id=key;
	console.log(key_id);
	var newCell = newDonor.insertCell(5);
	var details  = document.createTextNode(key_id);
	newCell.setAttribute("id","f_id");
	newCell.appendChild(details);
}
function approvalState(fid){
var id = fid;
	console.log(id);
var ref = firebase.database().ref("Donors/A+/" + id);
	ref.on("value", gotOne);
	ref.update({status:"approved"});	
}
function gotOne(data) {
	var x = data.val();
	s=x.status;
}


