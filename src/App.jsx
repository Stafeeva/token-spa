import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middleware from './middleware';

import Layout from './components/Layout.jsx';
import TokenList from './components/TokenList.jsx';
import TokenAdd from './components/TokenAdd.jsx';

const store = createStore(
  rootReducer,
  middleware
);

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/tokens" component={TokenList} />
          <Route path="/tokens/add" component={TokenAdd} />
        </Layout>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
