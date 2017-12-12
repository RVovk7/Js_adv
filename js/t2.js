'use strict';
let clname = document.getElementsByClassName("inp");
   ////////// click x and o
   function setOX(e){
e.target.value = 'X';
   function setO(e){
e.target.value = 'O';
clname[0].addEventListener('click', setX);
}
	function setX(e){
			setOX(e);
			}	
	 let arr= {};
	 for (let i = 1; i<=9; i++){
arr[document.getElementById(i).id] = document.getElementById(i).value;
}	
		 whowin(arr);
clname[0].addEventListener('click', setO);
}
 clname[0].addEventListener('click', setOX); //entry first click
function whowin(arr){
	console.log(arr['1']);
	if ( arr['1'] =='O' && arr['2'] =='O' && arr['3'] =='O' ||  arr['1'] =='O' && arr['4'] =='O' && arr['7'] =='O' || arr['7'] =='O' && arr['8'] =='O' && arr['9'] =='O' || arr['3'] =='O' && arr['6'] =='O' && arr['9'] =='O' ||  arr['2'] =='O' && arr['5'] =='O' && arr['8'] =='O' ||  arr['1'] =='O' && arr['5'] =='O' && arr['9'] =='O' ||  arr['3'] =='O' && arr['5'] =='O' && arr['7'] =='O'){
		document.write('O - win');
        //document.close(); 
		}
		else
		if ( arr['1'] =='X' && arr['2'] =='X' && arr['3'] =='X' ||  arr['1'] =='X' && arr['4'] =='X' && arr['7'] =='X' || arr['7'] =='X' && arr['8'] =='X' && arr['9'] =='X' || arr['3'] =='X' && arr['6'] =='X' && arr['9'] =='X' ||  arr['2'] =='X' && arr['5'] =='X' && arr['8'] =='X' ||  arr['1'] =='X' && arr['5'] =='X' && arr['9'] =='X' ||  arr['3'] =='X' && arr['5'] =='X' && arr['7'] =='X'){
		document.write('X - win');
		//document.close(); 	
	}
/*
	else {
	let dro = String.fromCharCode(160);
	if ( arr['1'] !== dro  && arr['2'] !== dro && arr['3'] !== dro && arr['4'] !== dro && arr['5'] !== dro && arr['6'] !== dro && arr['7']!== dro && arr['8']!== dro && arr['9'] !== dro){
			document.write('draw');
				document.close()s
	}
	}*/
}
	