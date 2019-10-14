var http = require('http');
var fs  = require('fs');
var url  = require('url');

var server = http.createServer(function(req, res){
	// console.log(req.method);
	// res.setHeader('Set-Cookie',['userName=haogege','age=20'])
	var oDate = new Date('2019/10/14 18:52:30').toUTCString();
	//Expires设置的是绝对时间
	// res.setHeader('Set-Cookie',['userName=haogege;Expires='+oDate])
	//Max-Age设置的相对时间
	// res.setHeader('Set-Cookie',['userName=haogege;Max-Age=10'])
	var urlStr = req.url;
	if(req.method == 'POST'){
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			console.log('get post data::',body);
			//根据数据做处理....
			res.end(body);
		})
	}else if(req.method == 'GET'){
		if(urlStr.search(/\?/) != -1){
			var parm = url.parse(urlStr,true).query;
			console.log(typeof parm)
			//根据数据做处理....
			var json = JSON.stringify(parm);
			res.end(json);
		}
		if(urlStr == '/favicon.ico'){
			res.end('favicon.ico')
		}
		var filePath  = './'+urlStr;
		fs.readFile(filePath,function(err,data){
			if(!err){
				res.end(data);
			}else{
				res.statusCode = 404;
				res.end('not found...')
			}
		})
	}
	
});

server.listen(3000, '127.0.0.1', function(){
  console.log("Server running at http://127.0.0.1:3000");
});