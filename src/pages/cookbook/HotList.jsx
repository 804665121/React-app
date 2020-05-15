import React, { Component } from 'react'
import { HorListWarp } from './styledCookbook'
export class HotList extends Component {
    render() {
        return (
            <HorListWarp>
                <header>精品好菜</header>
                <div >
                    {

                        [1, 2, 2, 3, 1].map((val, i) => {
                            return (

                                <figure>
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589519975778&di=6e4b3aa15b84736696a1dbd96320531a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F688e23627926153311cbb393bcf7cf5828fdab3b1f42c-Kkb8Ep_fw658"></img>
                                    <ifgcaption>
                                        <h3>爆炒鱿鱼</h3>
                                        <p>食谱秀食材频道为您提供宴席菜品大全的做法大全,宴席菜品大全的家常做法等最详细的图文介绍,让您轻松学做美味佳肴!</p>
                                    </ifgcaption>
                                </figure>

                            )
                        })

                    }
                </div>
            </HorListWarp >
        )
    }
}
export default HotList