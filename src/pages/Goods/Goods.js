import React from 'react';

import url from 'url';

import withAxios from '../../hoc/withAxios'


let Goods = (props) => {

    console.log(props)

    return <div className="goods">
        商品
    </div>
}

export default withAxios(Goods);