import React, { Component } from 'react'
import { Grid } from 'antd-mobile'

import { HotCateWrap } from './styledCookbook'

import { hotcate} from '../../mock/mock'

export class HotCate extends Component {
    render() {
        const data = Array.from(hotcate.cate).map((val, i) => ({
            icon: val.icon,
            text: val.text,
        }));
        return (
            <HotCateWrap>
                <header>  热门分类</header>
                <Grid data={data}
                    columnNum={3}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div className="item">
                            <img src={dataItem.icon} alt="" />
                            <span>{dataItem.text}</span>
                        </div>
                    )}
                />

            </HotCateWrap>
        )
    }
}

export default HotCate
