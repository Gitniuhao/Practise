;(function(win,doc){
	//获取根元素
	var oRoot = doc.getElementsByTagName('html')[0];
	//获取视口宽度
	var oWidth = doc.body.clientWidth || doc.documentElement.clientWidth;
	console.log(oWidth)
	function refresh(){
		//用视口宽度设置一定比列
		var oFontSize = oWidth/10;
		//根据比例给根元素设置大小
		oRoot.style.fontSize = oFontSize + 'px';
	}
	//当DOM结构加载完毕后进行重新计算
	win.addEventListener('DomContentLoaded',refresh,false);
	//当页面重新加载后进行重新计算
	win.addEventListener('load',refresh,false);
	//当页面大小发生变化时进行重新计算
	win.addEventListener('resize',refresh,false);
})(window,document)