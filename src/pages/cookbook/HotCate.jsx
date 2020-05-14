import React, { Component } from 'react'
import { Grid } from 'antd-mobile'

import { HotCateWrap } from './styledCookbook'

export class HotCate extends Component {
    render() {
        const data = Array.from(new Array(9)).map((_val, i) => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
            text: `菜品${i}`,
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
