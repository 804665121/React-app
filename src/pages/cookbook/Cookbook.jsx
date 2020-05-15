import React, { Component } from 'react'
import { HeaderWarp } from './styledCookbook'
import { Search } from '../../components/search/Search'
import { HotCate } from './HotCate'
import { hotcate } from '../../mock/mock'
import { HotList } from './HotList'

import { Carousel } from 'antd-mobile'
export class Cookbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        // simulate img loading

    }

    render() {
        const carouselItem = hotcate.carousel.map(val => {
            return (
                <a
                    key={val}
                    href=""
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                    <img
                        src={val.img}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                </a>
            )
        })
        return (
            <div>
                <HeaderWarp>
                    美食大全
                </HeaderWarp>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {carouselItem}
                </Carousel>
                <Search></Search>
                <HotCate></HotCate>
                <HotList></HotList>

            </div>
        )
    }
}

export default Cookbook;
