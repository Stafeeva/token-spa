import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Modal, Button } from 'antd';

import { addToken } from '../actions/tokens';
import { fetchCountries } from '../actions/countries';

import TokenForm from './TokenForm.jsx';

class TokenAdd extends Component {

  static propTypes = {
    addToken: PropTypes.func.isRequired,
    countries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    })).isRequired,
    fetchCountries: PropTypes.func.isRequired,
  }

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
    const { countries } = this.props;

    return (
      <div style={{ marginTop: '1rem' }}>
        <h1>Issue Token</h1>
        <TokenForm
          countries={countries}
          saveToken={saveToken}
        />
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
