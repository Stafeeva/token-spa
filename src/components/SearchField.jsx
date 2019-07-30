import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Input } from 'antd';

import { filterTokens } from '../actions/tokens';

class SearchField extends Component {

  onChangeSearch = event => {
    const { value } = event.target;
    const { dispatch } = this.props;

    dispatch(filterTokens(value));
  }

  render() {
    const { onChangeSearch } = this;
    const { search } = this.props;

  return (
      <Input
        prefix={<Icon type="search" />}
        onChange={onChangeSearch}
        value={search}
        type="text"
        placeholder="Token name or ticker"
      />
    );
  }
}

const mapStateToProps = state => ({
  search: state.tokens.filterText,
});

export default connect(mapStateToProps)(SearchField);
