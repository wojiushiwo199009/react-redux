import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import ContentDetail from "./ContentDetails";

class Content extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    constructor(){
        super()
        this.state = {themeColor:''}
    }

    componentWillMount(){
        const {store} = this.context
        this._updateThemeColor()
        store.subscribe(()=>this._updateThemeColor())
    }

    _updateThemeColor(){
        const {store} = this.context
        const state = store.getState()
        this.setState({themeColor:state.themeColor})
    }

    render(){
        return(
            <div>
                <p style={{color:this.state.themeColor}}>React.js小书内容</p>
                <ContentDetail />
                <ThemeSwitch />
            </div>
        )
    }
}
export default Content;