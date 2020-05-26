import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

import store from './store'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render( 
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
