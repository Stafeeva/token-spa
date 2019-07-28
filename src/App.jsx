import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './Components/Layout.jsx';
import TokenList from './Components/TokenList.jsx';
import TokenAdd from './Components/TokenAdd.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>

          <Route exact path="/" component={TokenList} />
          <Route exact path="/tokens" component={TokenList} />
          <Route path="/tokens/add" component={TokenAdd} />
        </Layout>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
