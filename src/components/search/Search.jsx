import React, { Component } from 'react'
import { InputItem, List } from 'antd-mobile'


export class Search extends Component {
    constructor(props){
        super(props)

        
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    render() {
        return (
            <div>

                <List >
                    <InputItem focus={()=>{}}
                        // {...getFieldProps('input3')}
                        placeholder="想吃什么,这里搜"
                    />
                </List>
            </div>
        )
    }
}

export default Search
