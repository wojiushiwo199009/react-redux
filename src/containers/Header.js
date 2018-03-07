import {connect} from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state)=>{
    return {
        themeColor:state.themeColor,
        themeFontSize:state.themeFontSize
    }
}
export default connect(mapStateToProps)(Header)