import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

class Root extends Component {
  render() {
    return (
      <div>
        The Pizza Task
      </div>
    )
  }
}

ReactDOM.render( 
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
