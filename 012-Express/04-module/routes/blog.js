const express = require('express');
const router = express.Router();

router.get('/',(req,res) => res.send('Get the data of blog...'))//查询
router.put('/',(req,res) => res.send('Put the data of blog...'))//新增
router.post('/',(req,res) => res.send('Post the data of blog...'))//修改
router.delete('/',(req,res) => res.send('Delete the data of blog...'))//删除

module.exports = router;