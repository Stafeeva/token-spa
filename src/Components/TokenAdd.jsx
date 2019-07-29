import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Button } from 'antd';

import TokenForm from './TokenForm.jsx';

import { addToken } from '../actions';

class TokenAdd extends Component {
  saveToken = token => {
    this.props.dispatch(addToken(token));
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
        <TokenForm saveToken={saveToken} />
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

export default withRouter(connect()(TokenAdd));
