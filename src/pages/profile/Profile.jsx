import React, { Component } from 'react'
import { Switch } from 'antd-mobile';

// 在组件里面使用
// 导入store
import { store } from '../../store'

// 导入action构建函数
import { sendAction } from '../../action'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
    changeAction = () => {
        //先调用sendAction()拿到action对象
        const action = sendAction();
        console.log(store)
        //发送一个action  利用store
        store.dispatch(action)
    };
    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState())
            // 修改页面的值
            this.setState({})
        })
    }
    render() {
        return (
            <div>
                是否开启地图
                <Switch
                    checked={this.state.checked}
                    onChange={() => {
                        this.setState({
                            checked: !this.state.checked,
                        });
                    }}
                />
                <button onClick={this.changeAction}>点击看看</button>
                <div>{store.getState().value}</div>
            </div>
        )
    }
}
