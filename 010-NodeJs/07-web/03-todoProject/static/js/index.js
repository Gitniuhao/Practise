;(function($){
	var $input = $('.list-input');
	$input.on('keydown',function(ev){
		if(keyCode == 13){
			$.ajax({
			url:'add/',
			type:'post',
			dataType:'json',
			success:function(data){
				console.log(data);
			},
			error:function(err){
				console.log(err);
			}
		 })
	   }
	})	
})(jQuery);