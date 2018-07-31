var number = prompt("Enter any Number");


console.log(number);

var fact=1;
for(var i=number; i>0; i--){
	fact= fact*i;
}

function myfunction(){
	document.querySelector("#fact-brand").style.marginLeft = "auto";
	document.querySelector("#fact-calc").style.display = "inline-block";
}
function myfunction1(){
	document.querySelector("#fact-brand").style.marginLeft = "0";
	document.querySelector("#fact-calc").style.display = "none";

}
