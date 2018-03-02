import React, { Component } from 'react'
import PropTypes from "prop-types";

class ThemeSwitch extends Component{
    static contextTypes = {
        store:PropTypes.object
    }
    constructor(){
        super()
        this.state = {themeColor:''}
    }
    
    componentWillMount(){
        const {store} = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor(){
        const {store} = this.context
        const state = store.getState()
        console.log(state,'s')
        this.setState({
            themeColor:state.themeColor,
            name:state.name
        })
    }

    handleSwitchColor(color,name){
        const {store} = this.context
        store.dispatch({
            type:'CHANGE_COLOR',
            themeColor:color,
            name:name
        })
    }

    render(){
        return(
            <div>
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'red','gjx')}>Red</button> 
                <button style={{color:this.state.themeColor}} onClick={this.handleSwitchColor.bind(this,'blue','')}>Blue</button> 
            </div>
        )
    }
}
export default ThemeSwitch;