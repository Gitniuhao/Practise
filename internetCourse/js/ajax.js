function ajax(url,fn){
	var xhr =  new XMLHttpRequest();
	xhr.open('GET',url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readystate == 4 && xhr.status == 200){
			fn && fn(xhr.responseText);
		}
	}
}