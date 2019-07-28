import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Layout from './Components/Layout.jsx';
import TokenList from './Components/TokenList.jsx';

class App extends Component {
  render() {
    return (
      <Layout>
        <TokenList />
      </Layout>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
