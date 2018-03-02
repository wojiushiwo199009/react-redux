
import React, { Component } from "react"
import PropTypes from 'prop-types'

class Header extends Component{
    static contextTypes = {
        store: PropTypes.object
    }
    constructor(){
        super()
        this.state = {themeColor:'',name:''}
    }

    componentWillMount(){
        const {store} = this.context
        this._updateThemeColor()
        store.subscribe(()=>this._updateThemeColor())
    }
   
    _updateThemeColor(){
        // console.log(this.context)
        const {store} = this.context
        const state = store.getState()
        // console.log(state)
        this.setState({ themeColor: state.themeColor, name: state.name})
    }

    render(){
        return (
            <h1 style={{color:this.state.themeColor}}>  <p>{this.state.name}</p>   React.js小书</h1>
        )
    }
}
export default Header