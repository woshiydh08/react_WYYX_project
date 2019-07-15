/*
与后台交互模块
 */
import ajax from './ajax'
//代理接口
const BASE = ''
const BASE5000 = '/api'
const BASE163 = '/163'

//获取商品列表
export const reqCategory = () => ajax(BASE + '/category')
// 获取推荐页面信息
export const reqMsite = () => ajax('/msite')
//获取轮播图信息
export const reqFocusList = () => ajax(BASE + '/focus_list')
//识物tab
export const reqTab1 = () => ajax(BASE + '/tab1')
export const reqTab2 = () => ajax(BASE + '/tab2')
export const reqTab3 = () => ajax(BASE + '/tab3')
export const reqTab4 = () => ajax(BASE + '/tab4')
export const reqTab5 = () => ajax(BASE + '/tab5')
export const reqKeyword = () => ajax(BASE + '/keyword')

export const reqTabs = () => ajax(BASE + '/topic/v1/find/getTabs.json')

//用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE5000 +'/login_pwd', {name, pwd, captcha}, 'POST')
//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE5000 + '/sendcode', {phone})
//手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE5000 + '/login_sms', {phone, code}, 'POST')
//用户登出
export const reqLogout = () => ajax(BASE5000 + '/logout')

//网易模糊搜索
export const reqFuzzyMsg = (keywordPrefix) => ajax(BASE163 + '/xhr/search/searchAutoComplete.json', {keywordPrefix}, 'POST')


