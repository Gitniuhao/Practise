<!-- 函数 -->
function tobig(){
	//变量 
	var ob=document.getElementById('box');
	ob.style.width='400px';
	ob.style.height='400px';
	ob.style.backgroundColor='blue';	
}
function tosmall(){
	var ob=document.getElementById('box');
	ob.style.width='200px';
	ob.style.height='200px';
	ob.style.backgroundColor='red';
}
var ob =document.getElementById('box')
// ob.onmouseover=tobig;
// ob.onmouseout=tosmall;
ob.onmouseover =function(){
	tobig();
}
ob.onmouseout = function(){
	tosmall();
}