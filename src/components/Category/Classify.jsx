import React, { Component } from 'react'
import { ClassifyWarp } from "./styledclassify";

export class Classify extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    changeSelect = index => {
        return () => {
            this.setState({
                index: index
            })
        }


    }
    render() {
        return (
            <ClassifyWarp>
                <div>
                    <ul>
                        {
                            Array.from(new Array(20)).map((val, key) => {
                                return (
                                <li className={key == this.state.index ? "active" : ""} onClick={this.changeSelect(key)}>热门{key}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>寿司</li>
                        <li>烧饼</li>
                        <li>肉卷</li>
                        <li>煎饼</li>
                        <li>寿司</li>
                        <li>烧饼</li>
                        <li>肉卷</li>
                        <li>煎饼</li>
                    </ul>

                </div>


            </ClassifyWarp>
        )
    }
}

export default Classify;