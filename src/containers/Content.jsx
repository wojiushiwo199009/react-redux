import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import ContentDetails from './ContentDetails'
import{connect} from 'react-redux'

class Content extends Component{
    static propTypes={
        themeColor: PropTypes.string
    }
    render(){
        return(
            <div>
                <p style={{color:this.props.themeColor}}>React.js小书内容</p>
                <ContentDetails />
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
export default connect(mapStateToProps)(Content)