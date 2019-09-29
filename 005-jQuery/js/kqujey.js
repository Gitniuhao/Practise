(function(w){
	var kquery =function(){
		return new kquery.fn.init(selector);
	}
	kquery.fn = kquery.prototype = {
		constructor = kquery,
		init:function(selector){
			if(!selector){
				return this;
			}else if(kquery.isFunction(selector)){
				//函数执行的时间
				document.addEventListener('DOMContentLoaded',selector)
				this[0] = document;
				this.context = document;
				this.length = 1;
			}
		}
	}
	kquery.isFunction = function(fn){
		 return typeof fn == 'function'
	}
	w.kquery = kquery;
}(window));