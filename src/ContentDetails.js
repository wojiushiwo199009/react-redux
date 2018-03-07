import React,{ Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'

class ContentDetail extends Component{

    static propTypes = {
        themeColor : PropTypes.string
    }
   
    render(){
        return (
            <div style={{ color: this.props.themeColor }}>
                <p>123并且灵活地把 React.js 应用到实际项目当中。如果你有一定的 HTML、CSS、JavaScript 基础并且希望学习 React.js，</p>
                <p>而又觉得 React.js 当中有些概念比难以接受和理解，希望能够从零开始学习，那么本书很适合你。</p>
                <p>但如果你已经对前端已经非常熟悉并且用过不少的前端框架和相关的组件化技术，建议你直接看官网文档。</p >
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
ContentDetail = connect(mapStateToProps)(ContentDetail)
export default ContentDetail