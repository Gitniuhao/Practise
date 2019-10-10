// 定义函数
function tobig(){
	//变量 
	var odiv =document.getElementById('box');
	odiv.style.width='400px';
	odiv.style.height='400px';
	odiv.style.backgroundColor='blue';	
}
function tosmall(){
	var odiv =document.getElementById('box');
	odiv.style.width='200px';
	odiv.style.height='200px';
	odiv.style.backgroundColor='red';
}
// 调用函数
	var odiv = document.getElementById('box');
 	//1、 odiv.onmouseover = tobig;
 	// odiv.onmouseout = tosmall;
 	// 2、匿名函数：就是没有名字的函数
 	odiv.onmouseover=function(){
 		tobig();
 	}
 	odiv.onmouseout=function(){
 		tosmall();
 	}