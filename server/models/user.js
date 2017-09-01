// //创建用户模型
// var userModel = {
// 	createUser :' insert into user(userID,userName,userPw) values (?,?,?)'//创建
// 	// updateUser:'update prods set userName = ?, userPw = ? where userID = ?',//更新某一条数据
// 	// delectUser:'delect from prods where id = ?',//删除某一条数据
// 	// selectUser:'select * from prods where userName like '%com''//搜索一条数据
// }
// exports.userModel = userModel;


// 写sql语句，自定义操作数据库的方法

const dbUtils = require('../utils/db-util')
// const dbUtils = require('./db-util')

const user = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    console.log(model)
    let result = await dbUtils.insertData( 'user_info', model )
    return result
  },

  /**
   * 查找一个存在用户的数据
   * @param  {obejct} options 查找条件参数
   * @return {object|null}        查找结果
   */
  async getExistOne(options ) {
    let _sql = `
    SELECT * from user_info
      where email="${options.email}" or name="${options.name}"
      limit 1`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 根据用户名和密码查找用户
   * @param  {object} options 用户名密码对象
   * @return {object|null}         查找结果
   */
  async getOneByUserNameAndPassword( options ) {
    let _sql = `
    SELECT * from user_info
      where password="${options.password}" and email="${options.email}"
      limit 1`
    let result = await dbUtils.query( _sql )

    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  ////////////////////////
  async all() {
    console.log("model")
    let _sql = `
    SELECT * from user_info
    `
    let result = await dbUtils.query( _sql )
    console.log(result)
    return result
  },
  ////////////////////////
  /**
   * 根据用户名查找用户信息
   * @param  {string} userName 用户账号名称
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {

    let result = await dbUtils.select(
      'user_info',
      ['id', 'email', 'name', 'detail_info', 'create_time', 'modified_time', 'modified_time' ])
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },



}


module.exports = user
