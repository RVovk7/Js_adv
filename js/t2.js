'use strict';
 inp.addEventListener('click', setOX);
  let count = 0;
   function setOX() {
	   funck[count = (count % 2) +1]();
  arpush();
}	
let funck = {
1: function setX() {
event.target.value = 'X';
event.target.style.color = 'blue';
},
2: function setO() {
 event.target.value = 'O';
 event.target.style.color = 'red';
 }
};
function arpush (){
 	 let arr= {};
	 for (let i = 1; i<=9; i++){
	arr[document.getElementById(i).id] = document.getElementById(i).value;
}
whowin(arr);
}
function whowin(arr){
	let tr = [['1','2','3'],['1','4','7'],['7','8','9'],['3','6','9'],['2','5','8'],['1','5','9'],['3','5','7'],['4','5','6']];
	let tf_O;
 	let tf_X;
 	tr.forEach(function(el){
		if ( arr[el[0]] == 'O' && arr[el[1]] == 'O' && arr[el[2]] == 'O' ){
		tf_O = true;
		}});	
 	tr.forEach(function(el){
		if ( arr[el[0]] == 'X' && arr[el[1]] == 'X' && arr[el[2]] == 'X' ){
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
		return arr[el] !== String.fromCharCode(160);
		});
		if (draw & !tf_X && !tf_O ){
			document.getElementById('resault').value = 'A draw';
			document.getElementById('restart').style.display ="block";
		}}}
restart.addEventListener('click', restr);
function restr(){
	location.reload();
}