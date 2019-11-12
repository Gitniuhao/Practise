const express = require('express');
//路由模块化
//1.用express.Router实例化一个router对象
const router = express.Router();
//2.使用router.method('path',handler)处理路由
router.get('/',(req,res) => res.send('Get the data of user...'))//查询
router.put('/',(req,res) => res.send('Put the data of user...'))//新增
router.post('/',(req,res) => res.send('Post the data of user...'))//修改
router.delete('/',(req,res) => res.send('Delete the data of user...'))//删除
//3.导出router对象
//4.下接引入界面：app.js
module.exports = router;