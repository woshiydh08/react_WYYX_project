import {
  reqCategory,
  reqMsite,
  reqFocusList,
  reqTab1,
  reqTab2,
  reqTab3,
  reqTab4,
  reqTab5,
  reqSendCode,
  reqLogout,
  reqFuzzyMsg,
  reqKeyword
} from '../api'



/*
包含n个action creator函数的模块
 */
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





/*同步action*/
//例子
export const inrement = (number) => ({type: INCREMENT, data: number})

//同步首页action
export const setFocusList = (data) =>({type: SET_FOCUS_LIST, data: data})
export const setCateList = (data) =>({type: SET_CATE_LIST, data: data})
export const setTagList = (data) =>({type: SET_TAG_LIST, data: data})
export const setPolicyDescList = (data) =>({type: SET_POLICY_DESC_LIST, data: data})
export const setKingKongModule = (data) =>({type: SET_KING_KONG_MODULE, data: data})
export const setBigPromotionModule = (data) =>({type: SET_BIG_PROMOTION_MODULE, data: data})
//同步分类页action
export const setCategory = (data) =>({type: SET_CATEGORY, data: data})

//同步识物页action
export const setTab1 = (data) =>({type: SET_TAB1, data: data})
export const setTab2 = (data) =>({type: SET_TAB2, data: data})
export const setTab3 = (data) =>({type: SET_TAB3, data: data})
export const setTab5 = (data) =>({type: SET_TAB5, data: data})
//保存用户
export const saveUser = (data) =>({type: SAVE_USER, data: data})



// 异步action
export const incrementAsync = (number) => {
  return dispatch => {
    // 1. 执行异步代码
    setTimeout(() => {
      // 2. 有了结果后, 分发同步action
      dispatch(inrement(number))
    }, 1000)

  }
}

//请求首页数据
export function getMsite(cb) {
  return async dispatch => {
    const result = await reqMsite()
    const {focusList,cateList,tagList,policyDescList,kingKongModule,bigPromotionModule} = result.data
    dispatch(setFocusList(focusList));
    dispatch(setCateList(cateList));
    dispatch(setTagList(tagList));
    dispatch(setPolicyDescList(policyDescList));
    dispatch(setKingKongModule(kingKongModule));
    dispatch(setBigPromotionModule(bigPromotionModule));
    cb()
  }
}

//请求分类页数据
export function getCategory() {
  return async dispatch => {
    const result = await reqCategory()
    dispatch(setCategory(result.data));
  }
}

export function getTab1() {
  return async dispatch => {
    const result = await reqTab1()
    dispatch(setTab1(result.data));
  }
}

export function getTab2() {
  return async dispatch => {
    const result = await reqTab2()
    dispatch(setTab2(result.data.result));
  }
}
export function getTab3() {
  return async dispatch => {
    const result = await reqTab3()
    dispatch(setTab3(result.data.result));
  }
}
export function getTab5() {
  return async dispatch => {
    const result = await reqTab5()
    dispatch(setTab5(result.data.result));
  }
}
