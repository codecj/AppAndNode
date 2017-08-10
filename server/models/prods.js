var prodModel = {
	createProd :' insert into prods(userID,userName,userPw) values (?,?,?)',//创建一个产品
	updateProd:'update prods set userName = ?, userPw = ? where userID = ?',//更新某一条数据
	delectProd:'delect from prods where id = ?',//删除某一条数据
	selectProd:'select * from prods where userName like '%com''//搜索一条数据
}
exports.prodModel = prodModel;