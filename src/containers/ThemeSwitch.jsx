import {connect} from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'
 
const mapStateToProps=(state)=>{
    console.log(state,'state')
    return {
        themeColor:state.themeColor,
        themeFontSize:state.themeFontSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color, fontSize)=>{
            dispatch({ type: 'CHANGE_COLOR', themeColor: color,themeFontSize:fontSize})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
