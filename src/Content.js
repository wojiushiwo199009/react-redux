import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from 'react-redux'
import ContentDetail from "./ContentDetails";

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }

    render(){
        return(
            <div>
                <p style={{color:this.props.themeColor}}>React.js小书内容</p>
                <ContentDetail />
                <ThemeSwitch />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        themeColor:state.themeColor
    }
}
Content = connect(mapStateToProps)(Content)
export default Content;