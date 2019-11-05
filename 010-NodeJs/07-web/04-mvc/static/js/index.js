;(function($){
	var $input = $('.list-input');
	$input.on('keydown',function(ev){
		//当按下enter键的时候，发送ajax请求，添加数据
		if(ev.keyCode == 13){
			$.ajax({//ajax的最大特点：可以局部渲染页面改变页面结构
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
					const $dom = $(`<li class="content-item" dada-id="${data.id}">${data.task}</li>`);
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

	//处理删除请求(由于每一个li都是动态添加的，所以需要用委托事件进行监听)
	$('.content').on('click','.content-item',function(){
		var $this = $(this);
		$.ajax({
			url:'/delete',
			type:'GET',
			dataType:'json',
			data:{
				id:$this.data('id')
			},
			success:data =>{
				if(data.code ==0){
					$this.remove();
				}else{
					console.log(data.massage)
				}
			},
			error:err =>{
				console.log(err)
			}
		})
	})	
})(jQuery);