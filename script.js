let arry = [];
function sendOne() {
	let userOneInp = document.querySelector("#user-one").value;
	arry.push(userOneInp);
	let displayArea = document.querySelector(".sections");
	displayArea.innerHTML += "<div class='msg'>"+userOneInp+"<span class='readed-one'>"+".."+"</span>"+"</div>";
	document.querySelector("#user-one").value = "";
	// arry.pop(userOneInp);
	let changenum = document.querySelector("#change-into-number");
	changenum.innerHTML = "<p class='inline'><input  id='send-other' class='form-control input-edit-num form-control-lg' type='number' placeholder='Type a number'>"+"<button class='circle' onclick='sendingOne()'>"+">"+"</button></p>";
}

arryNumOne = [];
function sendingOne() {
	let other = document.querySelector("#send-other").value;
	arryNumOne.push(other);
	if ((other === arryNumOne[0]) && (other !== "")) {
		for (let i=0; i<arry.length; i++){
		let displayAreaa = document.querySelector(".sections-2");
		displayAreaa.innerHTML += "<div class='msg'>"+arry[i]+"</div>";
		// arry = [];
		document.querySelector("#user-one").value = "";
	}
		let read = document.querySelector(".readed-one");
		read.style.color = "blue";
		let userOneInp = document.querySelector("#user-one").value;
		alert ("massage send");
	}else if (other === ""){
		alert ("Add number");
		document.querySelector("#send-other").value = "";

	}else {
		alert ("massage send"); 
		document.querySelector("#send-other").value = "";

	}
	arry = [];

}

let arryTwo = [];
function sendTwo() {
	let userOneInp = document.querySelector("#user-two").value;
	arryTwo.push(userOneInp);
	let displayArea = document.querySelector(".sections-2");
	displayArea.innerHTML += "<div class='msg-two'>"+userOneInp+" <span class='readed'>"+".."+"</span>"+"</div>";
	document.querySelector("#user-two").value = "";
	let changenums = document.querySelector("#change-into-number-2");
	changenums.innerHTML = "<p class='inline'><input  id='send-other-2' class='form-control input-edit-num form-control-lg' type='number' placeholder='Type a number'>"+"<button class='circle' onclick='sendingTwo()'>"+">"+"</button></p>";


}
arryNumTwo = [];
function sendingTwo() {
	let other = document.querySelector("#send-other-2").value;
	arryNumTwo.push(other);
	if ((other === arryNumTwo[0]) && (other !== "")) {
		for ( let i=0; i<arryTwo.length; i++) {
		let displayAreaa = document.querySelector(".sections");
		displayAreaa.innerHTML += "<div class='msg-two'>"+arryTwo[i]+"</div>";
		document.querySelector("#user-two").value = "";
}

		let read = document.querySelector(".readed");
		read.style.color = "blue";
		let userOneInp = document.querySelector("#user-two").value;
		// arryTwo.pop(userOneInp);
		alert ("massage send");
	}else if (other === ""){
		alert ("Add number");
		document.querySelector("#send-other-2").value = "";

	}else {

		alert ("massage send"); 
		document.querySelector("#send-other-2").value = "";

	}
	arryTwo = [];

}

function popup() {
	let pop = document.querySelector("header");
	pop.innerHTML = "<section class='popup'><button onclick='cancel()'><span class='can'>"+"x"+"</span></button>"+
	"<p>"+"Hello.!! What Is Your Name ?"+" "+" "+
	"<input id='name' class='form-control name-input form-control-lg' type='text' placeholder='Your Name'>"+
	"<button class='submit' onclick='nameSubmit()'>"+"Submit"+"</button>"+"</p></section>";
	let opac = document.querySelector(".section-flex");
	let cha = document.querySelector(".popup");
	cha.style.opacity = 1;
	opac.style.opacity = 0.1;
}
function cancel() {
	let pops = document.querySelector(".popup");
	pops.style.display = "none";
	let opacs = document.querySelector(".section-flex");
	opacs.style.opacity = 1;
}
function nameSubmit() {
	arrName = [];
	let namePrint = document.querySelector("#names");
	let nameValue = document.querySelector("#name").value;
	arrName.push(nameValue);
	namePrint.innerHTML = "Welcome.! " + arrName;
	cancel();
}