/**
 * 用户业务操作
 */

const userModel = require('../models/user')
const userCode = require('../common/codeReason')

//所有的操作数据库在这里写，在dao里面调用返回的数据
const user = {

  /**
   * 创建用户
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async create( user ) {
    let result = await userModel.create(user)
    return result
  },

  /**
   * 查找存在用户信息
   * @param  {object} formData 查找的表单数据
   * @return {object|null}      查找结果
   */
  async getExistOne( formData ) {
    let resultData = await userModel.getExistOne({
      'email': formData.email,
      'name': formData.userName
    })
    return resultData
  },

  /**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
   */
  async signIn( formData ) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'email': formData.email})
    return resultData
  },


  /**
   * 根据用户名查找用户业务操作
   * @param  {string} userName 用户名
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {
    
    let resultData = await userModel.getUserInfoByUserName( userName ) || {}
    let userInfo = {
      // id: resultData.id,
      email: resultData.email,
      userName: resultData.name,
      detailInfo: resultData.detail_info,
      createTime: resultData.create_time
    }
    return userInfo
  },

///////////////////
async all() {
    console.log("services")
    let resultData = await userModel.all()
    
    return resultData
  },
///////////////////
  /**
   * 检验用户注册数据
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    }
    if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.username) === false ) {
      result.message = userCode.ERROR_USER_NAME

      return result
    }
    if ( !/[\w+]{6,16}/.test( userInfo.email ) ) {
      result.message = userCode.ERROR_EMAIL
      return result
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.message = userCode.ERROR_PASSWORD
      return result
    }
    // if ( userInfo.password !== userInfo.confirmPassword ) {
    //   result.message = userCode.ERROR_PASSWORD_CONFORM
    //   console.log(result)

    //   return result
    // }

    result.success = true
    return result
  }

}

module.exports = user
