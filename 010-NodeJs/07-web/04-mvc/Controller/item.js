class Controller{
	index(req,res,...args){
		res.end('do something..')
	}
}
module.exports = new Controller();