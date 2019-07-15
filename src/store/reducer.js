/*
产生初始状态或新的状态的reducer函数
 */
import {combineReducers} from 'redux'

import {
  INCREMENT,
  SET_FOCUS_LIST,
  SET_CATE_LIST,
  SET_TAG_LIST,
  SET_POLICY_DESC_LIST,
  SET_KING_KONG_MODULE,
  SET_BIG_PROMOTION_MODULE,
  SET_CATEGORY,
  SET_TAB1,
  SET_TAB2,
  SET_TAB3,
  SET_TAB5,
  SAVE_USER
} from './action-types'


//首页
const initMsite = {};
function msite(state=initMsite, action) {
  switch (action.type) {
    case SET_FOCUS_LIST :
      state.focusList = action.data
      return {...state,focusList:action.data}

    case SET_CATE_LIST :
      state.cateList = action.data
      return {...state,cateList:action.data}

    case SET_TAG_LIST :
      state.tablist = action.data
      return {...state,tablist:action.data}

    case SET_POLICY_DESC_LIST :
      state.policyDescList = action.data
      return {...state,policyDescList:action.data}

    case SET_KING_KONG_MODULE:
      state.kingKongModule = action.data.kingKongList
      return {...state,kingKongModule:action.data.kingKongList}

    case SET_BIG_PROMOTION_MODULE:
      state.bigPromotionModule = action.data.kingKongList
      return {...state,bigPromotionModule:action.data.bigPromotionList}

    default:
      return state
  }
}

//分类页
const initCategory = [];
function category(state = initCategory, action) {
  switch (action.type) {
    case SET_CATEGORY :
      state = action.data
      return state
    default:
      return state
  }
}

// 识物页
const initTab1 = {};
function tab1(state = initTab1, action) {
  switch (action.type) {
    case SET_TAB1 :
      state = action.data
      return state
    default:
      return state
  }
}
const initTab2 = {};
function tab2(state = initTab2, action) {
  switch (action.type) {
    case SET_TAB2 :
      state = action.data
      return state
    default:
      return state
  }
}
const initTab3 = {};
function tab3(state = initTab3, action) {
  switch (action.type) {
    case SET_TAB3 :
      state = action.data
      return state
    default:
      return state
  }
}
const initTab5 = {};
function tab5(state = initTab5, action) {
  switch (action.type) {
    case SET_TAB5 :
      state = action.data
      return state
    default:
      return state
  }
}

//同步用户信息
const initUser = {};
function user(state = initUser, action) {
  switch (action.type) {
    case SAVE_USER:
      state = action.data;
      return state;
    default:
      return state
  }
}

// 向外暴露是整合多个reducer产生的新的reducer
// 新的reducer管理的状态: {xxx: xxx(), yyy: yyy(), count: count()}
export default combineReducers({
  msite,
  category,
  tab1,
  tab2,
  tab3,
  tab5,
  user
})