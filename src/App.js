import React, { Component } from 'react';
import Header from './containers/Header'
import Content from './containers/Content'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}
export default App