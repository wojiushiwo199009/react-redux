import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class ThemeSwitch extends Component{
    static propTypes = {
        themeColor: PropTypes.string,
        themeFontSize:PropTypes.string,
        onSwitchColor: PropTypes.func
    }
    handleSwitchColor(color,fontSize){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color,fontSize)
        }
    }
    render(){
        return (
            <div>
                <button key='red' style={{ color: this.props.themeColor,fontSize:this.props.fontSize}} onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
                <button key='blue' style={{ color: this.props.themeColor, fontSize: this.props.fontSize}} onClick={this.handleSwitchColor.bind(this,'blue')}>Blue</button>
            </div>
        )
    }
}