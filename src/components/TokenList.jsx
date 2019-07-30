import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import SearchField from './SearchField.jsx';
import TokenTable from './TokenTable.jsx';

import { deleteToken, fetchTokens } from '../actions';

class TokenList extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchTokens());
  }

  onClickExportToCSV = () => {
    console.log('clicked Export To CSV');
  }

  deleteToken = id => {
    this.props.dispatch(deleteToken(id));
  }

  render () {
    const { deleteToken, onClickExportToCSV } = this;
    const { tokens } = this.props;

    return (
      <div>
        <h1>Token List</h1>
        <Row gutter={16}>
          <Col span={17}>
            <SearchField />
          </Col>
          <Col span={3}>
            <Link to="/tokens/add"><Button type="primary">Issue Token</Button></Link>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={onClickExportToCSV}>Export To CSV</Button>
          </Col>
        </Row>
        <TokenTable tokens={tokens} onClickDelete={deleteToken} />
      </div>
    );
  }
}

const filterTokenList = (tokens, filterText) => {
  if (filterText === '' || filterText.length < 3) {
    return tokens;
  }

  return tokens.filter(token => token.tokenName.includes(filterText));
}

const mapStateToProps = ({ tokens : { filterText, tokenList }}) => ({
  tokens: filterTokenList(tokenList, filterText),
});

export default connect(mapStateToProps)(TokenList);
