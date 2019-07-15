import Mock from 'mockjs'
import msite from './msite.json'
import category from './category'
import tab1 from './tab1'
import tab2 from './tab2'
import tab3 from './tab3'
import tab5 from './tab5'
import keyword from './keyword'

// console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/category', {code: 0, data: category})
Mock.mock('/msite', {code: 0, data: msite})
Mock.mock('/focus_list', {code: 0, data: msite.focusList})
Mock.mock('/cateList', {code: 0, data: msite.cateList})
Mock.mock('/tab1', {code: 0, data: tab1})
Mock.mock('/tab2', {code: 0, data: tab2})
Mock.mock('/tab3', {code: 0, data: tab3})
Mock.mock('/tab5', {code: 0, data: tab5})

Mock.mock('/keyword', {code: 0, data: keyword})



