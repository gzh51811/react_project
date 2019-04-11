import React, { Component } from 'react';


class Category extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    cid: "a",
                    img: "https://img.cuixianyuan.com/mobile/category/05022966137745157.png",
                    cate: "仁果类"
                },
                {
                    cid: "b",
                    img: "https://img.cuixianyuan.com/mobile/category/05022966305517979.png",
                    cate: "核果类"
                },
                {
                    cid: "c",
                    img: "https://img.cuixianyuan.com/mobile/category/05162762949337252.png",
                    cate: "瓜果类"
                },
                {
                    cid: "d",
                    img: "https://img.cuixianyuan.com/mobile/category/05022966057207579.png",
                    cate: "柑橘类"
                },
                {
                    cid: "e",
                    img: "https://img.cuixianyuan.com/mobile/category/05022966220009381.png",
                    cate: "热带类"
                },
                {
                    cid: "f",
                    img: "https://img.cuixianyuan.com/mobile/category/05022966402446014.png",
                    cate: "浆果类"
                }
            ],
            details: [
                {
                    code: "a",
                    klist: [
                        {
                            kid: 0,
                            kcate: "全部"
                        },
                        {
                            kid: 1,
                            kcate: "国产苹果"
                        },
                        {
                            kid: 2,
                            kcate: "国产梨类"
                        },
                        {
                            kid: 3,
                            kcate: "进口苹果"
                        },
                        {
                            kid: 4,
                            kcate: "进口梨类"
                        },
                        {
                            kid: 5,
                            kcate: "山楂"
                        }

                    ]
                },
                {
                    code: "b",
                    klist: [
                        {
                            kid: 0,
                            kcate: "全部"
                        },
                        {
                            kid: 1,
                            kcate: "樱桃"
                        },
                        {
                            kid: 2,
                            kcate: "枣"
                        },
                        {
                            kid: 3,
                            kcate: "西梅"
                        },
                        {
                            kid: 4,
                            kcate: "枇杷"
                        },
                        {
                            kid: 5,
                            kcate: "桃"
                        },
                        {
                            kid: 6,
                            kcate: "杏仁"
                        }

                    ]
                },
                {
                    code: "c",
                    klist: [
                        {
                            kid: 0,
                            kcate: "全部"
                        },
                        {
                            kid: 1,
                            kcate: "国产苹果"
                        },
                        {
                            kid: 2,
                            kcate: "国产梨类"
                        },
                        {
                            kid: 3,
                            kcate: "进口苹果"
                        },
                        {
                            kid: 4,
                            kcate: "进口梨类"
                        },
                        {
                            kid: 5,
                            kcate: "山楂"
                        }

                    ]
                },
                {
                    code: "d",
                    klist: [
                        {
                            kid: 0,
                            kcate: "全部"
                        },
                        {
                            kid: 1,
                            kcate: "国产苹果"
                        },
                        {
                            kid: 2,
                            kcate: "国产梨类"
                        },
                        {
                            kid: 3,
                            kcate: "进口苹果"
                        },
                        {
                            kid: 4,
                            kcate: "进口梨类"
                        },
                        {
                            kid: 5,
                            kcate: "山楂"
                        }

                    ]
                },
                {
                    code: "e",
                    klist: [
                        {
                            kid: 0,
                            kcate: "全部"
                        },
                        {
                            kid: 1,
                            kcate: "国产苹果"
                        },
                        {
                            kid: 2,
                            kcate: "国产梨类"
                        },
                        {
                            kid: 3,
                            kcate: "进口苹果"
                        },
                        {
                            kid: 4,
                            kcate: "进口梨类"
                        },
                        {
                            kid: 5,
                            kcate: "山楂"
                        }

                    ]
                },
                {
                    code: "f",
                    klist: [
                        {
                            kid: 0,
                            kcate: "全部"
                        },
                        {
                            kid: 1,
                            kcate: "国产苹果"
                        },
                        {
                            kid: 2,
                            kcate: "国产梨类"
                        },
                        {
                            kid: 3,
                            kcate: "进口苹果"
                        },
                        {
                            kid: 4,
                            kcate: "进口梨类"
                        },
                        {
                            kid: 5,
                            kcate: "山楂"
                        }

                    ]
                }
            ],
            currentList: "a",
            currentCate: 0,
            goodslist: []
        }
    }

    changeCurrentList(cid) {

        this.setState({
            currentList: cid,
            currentCate: 0
        }, () => {

            let { currentList, currentCate } = this.state;

            this.props.currentCategory(currentList, currentCate)
        })




    }
    changeCurrentCate(kid) {
        this.setState({
            currentCate: kid
        }, () => {
            let { currentList, currentCate } = this.state;

            this.props.currentCategory(currentList, currentCate)
        })
    }

    render() {
        return (<>
            <div id="categroy_list">
                <div className="wrap_list">
                    <ul>
                        {
                            this.state.list.map(item => <li className={item.cid === this.state.currentList ? "active" : ""} key={item.cid} onClick={this.changeCurrentList.bind(this, item.cid)}>
                                <a className="" href="javascript:;" >
                                    <img src={item.img} alt="" />
                                    <span>{item.cate}</span>
                                </a>
                            </li>)

                        }
                    </ul>
                </div>
                <div className="guideSlider hideGuide"></div>

            </div>
            <div id="sec_class">
                <ul>
                    {
                        this.state.details.map(item =>
                            item.code === this.state.currentList ?
                                item.klist.map(cate =>
                                    <li className={cate.kid === this.state.currentCate ? "active" : ""} key={cate.kid} onClick={this.changeCurrentCate.bind(this, cate.kid)}><a className="" href="javascript:;">{cate.kcate}</a></li>
                                )
                                : ''

                        )




                    }


                </ul>
            </div>

        </>)
    }

}
export default Category;