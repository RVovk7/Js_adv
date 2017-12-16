'use strict';
let h_null = String.fromCharCode(160), boadr_fix=0, count = 0;  // charCode(160) == &nbsp; in html,   &nbsp; - the same as ' '
 //checks win matrix and for one player algoritm
let matrix = [['1','2','3'],['1','4','7'],['7','8','9'],['3','6','9'],['2','5','8'],['1','5','9'],['3','5','7'],['4','5','6']];   
 two.addEventListener('click', chose_mode2); //two player
 one.addEventListener('click', chose_mode1); // one player
 ////mode button select
  function chose_mode2(){
	  document.getElementById('one').style.display ="none";
	   document.getElementById('two').style.display ="none";
inp.addEventListener('click', two_p);
	}
	function chose_mode1(){
	document.getElementById('one').style.display ="none";
	   document.getElementById('two').style.display ="none";
inp.addEventListener('click', one_p);
}
 ////two player mode
   function two_p() {
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
////input value push
function arpush (){
 	 let obj= {};
	 for (let i = 1; i<=9; i++){
	obj[document.getElementById(i).id] = document.getElementById(i).value;  // id of button [1-9]
}
whowin(obj);
}
/////win test
function whowin(obj){
	let tf_O, tf_X;
 	matrix.forEach(function(el){
		if ( obj[el[0]] == 'O' && obj[el[1]] == 'O' && obj[el[2]] == 'O' ){
		tf_O = true;
		}});	
 	matrix.forEach(function(el){
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
		///draw test
	let dro = ['1','2','3','4','5','6','7','8','9'];
let draw = dro.every(function(el){
		return obj[el] !== h_null;    
		});
		if (draw & !tf_X && !tf_O ){
			document.getElementById('resault').value = 'A draw';
			document.getElementById('restart').style.display ="block";
		}}}
////////////one player mode
function one_p(){
	 let obj= {}, rand_value = getRand(),arr = [], brd, x_test ,o_test;
	 for (let i = 1; i<=9; i++){
	arr.push(document.getElementById(i).value);
	}
	if (event.target.value == h_null){	
	event.target.value = 'X';
event.target.style.color = 'blue';

}
else {
		event.target.style.borderColor = 'red';
	boadr_fix = event.target.id;
setTimeout(board, 500);
brd = true;
}
 for (let i = 1; i<=9; i++){
	obj[document.getElementById(i).id] = document.getElementById(i).value;  // id of button [1-9]
}
 	matrix.forEach(function(el){
	 	/////////set third 'O' if two 'O' in row
			if ( obj[el[0]] == 'O' && obj[el[1]] == 'O' && obj[el[2]] !== 'X'   && !o_test && !x_test && !brd  ){
				document.getElementById(el[2]).value = 'O';
	document.getElementById(el[2]).style.color = 'red';
            o_test = true;
			}
			if ( obj[el[0]] == 'O' && obj[el[2]] == 'O' && obj[el[1]] !== 'X'  && !o_test && !x_test && !brd ){
				document.getElementById(el[1]).value = 'O';
	document.getElementById(el[1]).style.color = 'red';
	o_test =true;
			}
			if ( obj[el[1]] == 'O' && obj[el[2]] == 'O' && obj[el[0]] !== 'X'  && !o_test && !x_test && !brd ){
				document.getElementById(el[0]).value = 'O';
	document.getElementById(el[0]).style.color = 'red';
o_test =true;
			}	
			/////       set the 'O' if two 'X' in row		
		if ( obj[el[0]] == 'X' && obj[el[1]] == 'X' && obj[el[2]] !== 'O' && !o_test && !x_test && !brd ){
				document.getElementById(el[2]).value = 'O';
	document.getElementById(el[2]).style.color = 'red';
            x_test = true;
			}
			if ( obj[el[0]] == 'X' && obj[el[2]] == 'X' && obj[el[1]] !== 'O'&& !o_test && !x_test && !brd ){
				document.getElementById(el[1]).value = 'O';
	document.getElementById(el[1]).style.color = 'red';
	x_test =true;
			}
			if ( obj[el[1]] == 'X' && obj[el[2]] == 'X' && obj[el[0]] !== 'O' && !o_test && !x_test && !brd ){
				document.getElementById(el[0]).value = 'O';
	document.getElementById(el[0]).style.color = 'red';
x_test =true;
			}			
});
if  (arr.indexOf(h_null) !== arr.lastIndexOf(h_null) && !x_test &&  !o_test){ // test a last ampty cell
	while (document.getElementById(rand_value) !== event.target.id && document.getElementById(rand_value).value !== h_null   ){
		rand_value = getRand();
		}	
		}
if (document.getElementById(rand_value).value == h_null && !brd && !x_test && !o_test) {
	document.getElementById(rand_value).value = 'O';
	document.getElementById(rand_value).style.color = 'red';
	}
  arpush ();
}
////random
function getRand() {
  return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  }
  ////// restart button
  restart.addEventListener('click', restr);
function restr(){
	for (let i = 1; i<=9; i++){
	document.getElementById(i).value = h_null;
	}
document.getElementById('resault').value = h_null;
document.getElementById('restart').style.display ="none";
document.getElementById('resault').style.color = 'silver';
count = 0;
 document.getElementById('one').style.display ="block";
	   document.getElementById('two').style.display ="block";
	   inp.removeEventListener('click', two_p);
	   inp.removeEventListener('click', one_p);
	  }