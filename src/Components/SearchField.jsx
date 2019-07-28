import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { Input } from 'antd';

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

  @autobind onChangeSearch(event) {
    const { value } = event.target;
    const { onType } = this.props;

    this.setState({
      search: value,
    });

    onType(value);
  }

  render() {
    const { search } = this.state;
    const { onChangeSearch } = this;

    return (
      <div>
        <Input onChange={onChangeSearch} value={search} type="text" placeholder="Search" />
      </div>
    );
  }
}

export default SearchField;
