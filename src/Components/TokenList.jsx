import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import SearchField from './SearchField.jsx';

class TokenList extends Component {
  @autobind filterTokens(filter) {
    console.log('filtering...', filter);
  }

  render () {
    const { filterTokens } = this;

    return (
      <div>
        <h1>Token List</h1>
        <SearchField onType={filterTokens}/>
      </div>
    );
  }
}

export default TokenList;
