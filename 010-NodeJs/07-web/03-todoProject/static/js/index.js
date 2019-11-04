;(function($){
	var $input = $('.list-input');
	$input.on('keydown',function(ev){
		//当按下enter键的时候，发送ajax请求，添加数据
		if(ev.keyCode == 13){
			$.ajax({
			url:'/add',	
			type:'post',
			dataType:'json',
			data:{
				task:$input.val()
			},
			success:function(result){
				//根据获取不同的数据做相应的处理
				const data = result.data;
				if(result.code == 0){//请求数据成功后生成dom节点插入页面
					const $dom = $(`<li class="content-item">${data.task}</li>`);
					$('.content').append($dom);
					$input.val('');
				}
			},
			error:function(err){
				console.log(err);
			}
		 })
	   }
	})	
})(jQuery);