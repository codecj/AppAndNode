
/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('../dao/userDao')

const routers = router
  .get('/user/getUserInfo', userInfoController.getLoginUserInfo)
  .post('/user/signIn', userInfoController.signIn)
  .post('/user/signUp', userInfoController.signUp)
 .post('/user/all', userInfoController.all)
  
module.exports = routers
