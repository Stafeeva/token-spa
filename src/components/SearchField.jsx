import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'antd';

class SearchField extends Component {
  static propTypes = {
    onType: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }
  }

  onChangeSearch = event => {
    const { value } = event.target;
    const { onType } = this.props;

    this.setState({
      search: value,
    });

    if (value.length > 2 || value === '') {
      onType(value);
    }
  }

  render() {
    const { search } = this.state;
    const { onChangeSearch } = this;

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

export default SearchField;
