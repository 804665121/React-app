import React, { Component } from 'react'
import {HeaderWrap} from './styled-components'


export class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dir: 'left'
        }
    }
    changeSelect = dir => {  //点击切换的时候进行路由跳转
        return () => {
            this.setState({
                dir
            })

            // this.props.history.push(`/${dir}`)
        }


    }
    render() {
        return (
            <HeaderWrap>
              
                    <ul>
                        <li className={this.state.dir == "left" ? "actions" : ""} onClick={this.changeSelect('left')}>分类</li>
                        <li className={this.state.dir == "right" ? "actions" : ""} onClick={this.changeSelect('right')}>食材</li>
                    </ul>

            </HeaderWrap>
        )
    }
}



export default Header