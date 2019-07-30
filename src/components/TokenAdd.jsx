import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Button } from 'antd';

import { addToken } from '../actions/tokens';
import { fetchCountries } from '../actions/countries';

import TokenForm from './TokenForm.jsx';

class TokenAdd extends Component {
  constructor(props) {
    super(props);

    this.props.fetchCountries();
  }

  saveToken = token => {
    this.props.addToken(token);
    this.props.history.push("/tokens");
  }

  onClickClose = () => {
    this.props.history.push("/tokens");
  }

  render() {
    const { onClickClose, saveToken } = this;

    return (
      <div>
        <h1>Issue Token</h1>
        <TokenForm countries={this.props.countries} saveToken={saveToken} />
        <Button
          type="primary"
          htmlType="button"
          onClick={onClickClose}
        >
          Go back
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCountries: () => dispatch(fetchCountries()),
  addToken: token => dispatch(addToken(token)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TokenAdd));
