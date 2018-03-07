import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
