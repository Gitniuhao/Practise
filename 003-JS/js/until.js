// 匀速动画
	function animate(obj,attr,target){
			clearInterval(obj.timer);
			var iSpeed=0;						
			obj.timer=setInterval(function(){
				var current=parseFloat(getComputedStyle(obj,false)[attr]);
				if(attr == 'opacity'){
					current=Math.round(current*100);
				}
				if(current <target){
					iSpeed=20;
				}else{
					iSpeed=-20;
				}
				if(Math.abs(target-current) < Math.abs(iSpeed)){
					if(attr =='opacity'){
						obj.style[attr] = target;
					}else{
						obj.style[attr] = target+'px';
					}				
					clearInterval(obj.timer);
				}else{
					if(attr == 'opacity'){
						obj.style[attr]=(current+iSpeed)/100;
					}else{
						obj.style[attr]=current+iSpeed+'px';
					}				
				}		
			},30)
		}
// 减速动画
	function animate1(obj,attr,target){
	clearInterval(obj.timer);		
	obj.timer=setInterval(function(){
		var current=parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current=Math.round(current*100);
		}			
		var iSpeed=0;
		iSpeed=(target-current)/10;
		if(iSpeed >0){
			iSpeed=Math.ceil(iSpeed);
		}else{
			iSpeed=Math.floor(iSpeed);
		}
		console.log(iSpeed)
		if(!iSpeed){
			clearInterval(obj.timer);
		}else{
			if(attr	=='opacity'){
				obj.style[attr]=(current+iSpeed)/100;
			}else{
				obj.style[attr]=current+iSpeed+'px';
			}				
		}			
	},30)
	}
// 综合动画
	function animate2(obj,attr,target,islinear){
		if(typeof islinear == undefined){
			islinear=true;
		}
		clearInterval(obj.timer);
		var iSpeed=0;		
		obj.timer=setInterval(function(){
			var isStop=false;
			var current=parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current=Math.round(current*100);
			}
			// 判断执行匀速还是减速

			if(islinear){
				// 匀速动画速度
				if(current <target){
					iSpeed=10;
				}else{
					iSpeed=-10;
				}
				// 匀速动画结束条件
				if(Math.abs(target-current) < Math.abs(iSpeed)){
					if(attr =='opacity'){
						obj.style[attr] = target;
					}else{
						obj.style[attr] = target+'px';
					}
					isStop=true;								
				}					
			}else{
				// 减速动画速度
				iSpeed=(target-current)/10;
				if(iSpeed >0){
					iSpeed=Math.ceil(iSpeed);
				}else{
					iSpeed=Math.floor(iSpeed);
				}
				// 减速动画结束条件
				if(!iSpeed){
					isStop=true;
				}
				// 判断是否关闭定时器还是继续执行
				if(isStop){
					clearInterval(obj.timer);
				}else{
					if(attr == 'opacity'){
						obj.style[attr]=(current+iSpeed)/100;
					}else{
						obj.style[attr]=current+iSpeed+'px';
					}
				}	
			}console.log(iSpeed)			
		},30)
	}
// 综合动画	-链式调用
	// isLinear 表示动画是匀速还是减速执行(默认是匀速,true是匀速,false是减速)
	// fnEnd 表示结束时的回调函数
	function animate3(obj,attr,target,islinear,fnEnd){
		if(typeof islinear == undefined){
			islinear=true;
		}
		clearInterval(obj.timer);
		var iSpeed=0;		
		obj.timer=setInterval(function(){
			var isStop=false;
			var current=parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current=Math.round(current*100);
			}
			if(islinear){
				// 匀速动画速度
				if(current <target){
					iSpeed=10;
				}else{
					iSpeed=-10;
				}
				// 匀速动画结束条件
				if(Math.abs(target-current) < Math.abs(iSpeed)){
					if(attr =='opacity'){
						obj.style[attr] = target;
					}else{
						obj.style[attr] = target+'px';
					}
					isStop=true;								
				}					
			}else{
				// 减速动画速度
				iSpeed=(target-current)/10;
				if(iSpeed >0){
					iSpeed=Math.ceil(iSpeed);
				}else{
					iSpeed=Math.floor(iSpeed);
				}

				// 减速动画结束条件
				if(!iSpeed){
					isStop=true;
				}

				if(isStop){
					clearInterval(obj.timer);
					// if(fnEnd){
					// 	fnEnd()
					// }
					// if(typeof fnEnd=='function'){
					// 	fnEnd();
					// }
					typeof fnEnd=='function' && fnEnd();//如果有传入函数的话，执行否则不执行
				}else{
					if(attr == 'opacity'){
						obj.style[attr]=(current+iSpeed)/100;
					}else{
						obj.style[attr]=current+iSpeed+'px';
					}
				}	
			}console.log(iSpeed)			
		},30)
	}
// 综合动画	-多值调用
	// obj 表示要修改的是那个DOM对象
		// options 表示属性和值的对象
		// isLinear 表示动画是匀速还是减速执行(默认是匀速,true是匀速,false是减速)
		// fnEnd 表示结束时的回调函数
	function animation(obj,options,islinear,fnEnd){
		if(typeof islinear == undefined){
			islinear=true;
		}
		clearInterval(obj.timer);
		var iSpeed=0;		
		obj.timer=setInterval(function(){
		var isStopAll=true;//当这个值为真时，关闭定时器，停止所有动画
		for(var attr in options){//循环遍历所有对象
			var current=parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current=Math.round(current*100);
			}
			if(islinear){
				// 匀速动画速度
				if(current <options[attr]){
					iSpeed=10;
				}else{
					iSpeed=-10;
				}
				// 匀速动画结束条件
				if(Math.abs(options[attr]-current) < Math.abs(iSpeed)){
					if(attr =='opacity'){//把匀速动画的结果直接调到目标值(只有匀速才有
						obj.style[attr] = options[attr];
					}else{
						obj.style[attr] = options[attr]+'px';
					}
				}else{
						isStopAll=false;//只要有一个值没有变化完毕，动画就不能停止（定时器就不能关闭
					}
																		
			}else{
				// 减速动画速度
				iSpeed=(options[attr]-current)/10;
				if(iSpeed >0){
					iSpeed=Math.ceil(iSpeed);
				}else{
					iSpeed=Math.floor(iSpeed);
				}

				// 减速动画结束条件
				if(iSpeed){
					isStopAll=false;//只要有一个值没有变化完毕，动画就不能停止（定时器就不能关闭
				}

			if(isStopAll){//判断此变量，决定是否关闭定时器
					clearInterval(obj.timer);
					typeof fnEnd=='function' && fnEnd();//如果有传入函数的话，执行否则不执行
				}else{
					if(attr == 'opacity'){
						obj.style[attr]=(current+iSpeed)/100;
					}else{//不停止动画，继续执行
						obj.style[attr]=current+iSpeed+'px';
					}
				}	
			}
		}console.log(iSpeed)			
	},30)
}				
function getScrollTop(){
	return  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;	 
}
function getScrollLeft(){
	return  window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;	 
}
// 生成随机数
function getrandom(min,max){
		return Math.round(min+(max-min)*Math.random())
	}
