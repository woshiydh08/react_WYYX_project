import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";

import {Link} from 'react-router-dom'

import {getCategory} from "../../store/actions";


import './Category.styl'
class Category extends Component {
  state = {
    currentIndex:'0',
    currentType: '1',
    currentArr: this.category
  };
  changeIndex(index,type,item){
    this.setState({
      currentIndex:index,
      currentType:type,
      currentArr:item
    })
  }

  componentDidMount(){
    this.props.getCategory()
  };

  render() {
    const {category} = this.props
    return (
      <div className="cateBody">
        <header>
          <div className="header-item">
            <div className="search">
              <i className="icon"></i>
              <span className="placeholder">搜索商品, 共19973款好物</span>
            </div>
          </div>
        </header>
        <div className="cateNav">
          <ul className="cateNavVert">
            {category ?
              category.map((item,index) =>{
                return (
                  <Link className="item" onClick={() => this.changeIndex(index,item.type,item)} key={index} to={'/category'}>
                    <div>{item.name}</div>
                  </Link>
                )
              }) : null
            }
          </ul>
        </div>
        <div className="cateList">
          {category[0]? <img className="banner" src={category[this.state.currentIndex].bannerUrl}/> : null}
          {category[0]? (
            <div className="cateListInner">
              {this.state.currentType == 1 ?
                (<div>
                    <ul className="listType1">
                      {
                        category[this.state.currentIndex].subCateList.map((item,index) =>{
                            return (
                              <li className="itemType1" key={index}>
                                <div className="cateImgWrapper">
                                  <img src={item.bannerUrl} alt=""/>
                                </div>
                                <div className="name">{item.name}</div>
                              </li>
                            )
                          }
                        )
                      }
                    </ul>
                  </div>
                ):(
                  <div className="listType0">
                    {
                      category[this.state.currentIndex].subCateList.map((item,index) =>{
                          return (
                            <li key={index}>
                              <div className="title">{item.name}</div>
                              <ul>
                                {item.categoryList.map((i,index) => {
                                  return(
                                    <li className="itemType0" key={index}>
                                      <img src={i.wapBannerUrl} alt=""/>
                                      <span className="txt">{i.name}</span>
                                    </li>
                                  )
                                  })
                                }

                              </ul>
                            </li>
                          )
                        }
                      )
                    }

                  </div>
                )
              }
            </div>
          ) : null
          }

    </div>
  </div>
    )
  }
}

export default connect(
  state => ({category:state.category}),
  {getCategory}
)(Category)