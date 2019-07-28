import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Token SPA</h1>

        <Button type="primary">Primary</Button>

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
