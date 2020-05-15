import React, { Component } from 'react'
import { Search } from '../../components/search/Search'
import { Header } from "./Header";
import { Classify } from "../../components/Category/Classify"
import { CateWrap } from "./styled-components"
export class Category extends Component {

    render() {
        return (
            <CateWrap>
                <Header>
                </Header>
                <Search></Search>
                <Classify></Classify>
                {/* <Material CurrentItem="肉类" type="material"></Material> */}
                {/* <Switch>
                    <Route path="/category" render={() => { <Classify CurrentItem="热门" type="material"></Classify> }}></Route>
                    <Route path="/material" render={() => { <Material CurrentItem="肉类" type="material"></Material> }}></Route>
                    <Redirect from="/" to="/category"></Redirect>
                </Switch> */}
            </CateWrap>
        )
    }
}



export default Category;