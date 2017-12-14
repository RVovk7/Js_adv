'use strict';
let h_null = String.fromCharCode(160); // charCode(160) == &nbsp; in html
 inp.addEventListener('click', setOX);
  let boadr_fix;
  let count = 0;
   function setOX() {
	   funck[count = (count % 2) +1](); // (count % 2) +1  == 1 || 2
  arpush();
 }	
let funck = {
1: function setX() {
	if ( event.target.value == h_null ){ 
event.target.value = 'X';
event.target.style.color = 'blue';
}
else { 
	count = count  +1;    // double click fix
	event.target.style.borderColor = 'red';
	boadr_fix = event.target.id;
 setTimeout(board, 500);
	 } 
},
2: function setO() {
	if (event.target.value == h_null ){
 event.target.value = 'O'; 
 event.target.style.color = 'red';
 }
 else {
	  count = count  +1;
	event.target.style.borderColor = 'red';
	boadr_fix = event.target.id;
setTimeout(board, 500);
 }
  }
 };
function board(){
	document.getElementById(boadr_fix).style.borderColor = 'white';
}
function arpush (){
 	 let obj= {};
	 for (let i = 1; i<=9; i++){
	obj[document.getElementById(i).id] = document.getElementById(i).value;  // id of button [1-9]
}
whowin(obj);
}
function whowin(obj){
	let tr = [['1','2','3'],['1','4','7'],['7','8','9'],['3','6','9'],['2','5','8'],['1','5','9'],['3','5','7'],['4','5','6']];
	let tf_O;
 	let tf_X;
 	tr.forEach(function(el){
		if ( obj[el[0]] == 'O' && obj[el[1]] == 'O' && obj[el[2]] == 'O' ){
		tf_O = true;
		}});	
 	tr.forEach(function(el){
		if ( obj[el[0]] == 'X' && obj[el[1]] == 'X' && obj[el[2]] == 'X' ){
		tf_X = true;
		}});
		if (tf_O){
			document.getElementById('resault').value = 'O - wins';
			document.getElementById('resault').style.color = 'red';
			document.getElementById('restart').style.display ="block";
		}
		if (tf_X){
			document.getElementById('resault').value = 'X - wins';
			document.getElementById('resault').style.color = 'blue';
			document.getElementById('restart').style.display ="block";
		}
	else{
	let dro = ['1','2','3','4','5','6','7','8','9'];
let draw = dro.every(function(el){
		return obj[el] !== h_null;    
		});
		if (draw & !tf_X && !tf_O ){
			document.getElementById('resault').value = 'A draw';
			document.getElementById('restart').style.display ="block";
		}}}
		restart.addEventListener('click', restr);
function restr(){
	for (let i = 1; i<=9; i++){
	document.getElementById(i).value = h_null;
	}
document.getElementById('resault').value = h_null;
document.getElementById('restart').style.display ="none";
document.getElementById('resault').style.color = 'silver';
count = 0;
}