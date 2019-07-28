import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Row, Col, Button } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import SearchField from './SearchField.jsx';
import TokenTable from './TokenTable.jsx';

import { fetchTokens } from '../actions';

class TokenList extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchTokens());
  }

  @autobind filterTokens(filter) {
    console.log('tokens', tokens);

    this.setState({
      tokens: tokens.filter(token => token.tokenName.includes(filter)),
    });
  }

  @autobind onClickIssueToken() {
    console.log('clicked Issue Token');
  }

  @autobind onClickExportToCSV() {
    console.log('clicked Export To CSV');
  }


  render () {
    const { filterTokens, onClickExportToCSV, onClickIssueToken } = this;
    const { tokens } = this.props;

    return (
      <div>
        <h1>Token List</h1>
        <Row gutter={16}>
          <Col span={18}>
            <SearchField onType={filterTokens}/>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={onClickIssueToken}><Link to="/tokens/add">Issue Token</Link></Button>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={onClickExportToCSV}>Export To CSV</Button>
          </Col>
        </Row>
        <TokenTable tokens={tokens} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokens: state.tokens,
  };
};

export default connect(mapStateToProps)(TokenList);
