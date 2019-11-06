class Controller {
	index(req,res,...args){
		res.setHeader('content-type','text/html;charset="utf-8"');
		res.end('<h1><a href="/Item/index">Go ToDoList</a></h1>')
	}
}
module.exports = new Controller();