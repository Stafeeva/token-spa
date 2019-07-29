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

    this.state = {
      showSearchResults: false,
      filteredTokens: [],
    };
  }

  filterTokens = filter => {
    if (filter === '') {
      this.setState({
        showSearchResults: false,
        filteredTokens: [],
      });
    } else {
      this.setState({
        showSearchResults: true,
        filteredTokens: this.props.tokens.filter(token => token.tokenName.includes(filter) || token.tokenTicker.includes(filter)),
      });
    }
  }

  onClickExportToCSV = () => {
    console.log('clicked Export To CSV');
  }

  deleteToken = id => {
    this.props.dispatch(deleteToken(id));
  }


  render () {
    const {
      deleteToken,
      filterTokens,
      onClickExportToCSV,
    } = this;
    const { showSearchResults, filteredTokens } = this.state;
    const { tokens } = this.props;

    return (
      <div>
        <h1>Token List</h1>
        <Row gutter={16}>
          <Col span={17}>
            <SearchField onType={filterTokens}/>
          </Col>
          <Col span={3}>
            <Link to="/tokens/add"><Button type="primary">Issue Token</Button></Link>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={onClickExportToCSV}>Export To CSV</Button>
          </Col>
        </Row>
        <TokenTable tokens={showSearchResults ? filteredTokens : tokens} onClickDelete={deleteToken} />
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
