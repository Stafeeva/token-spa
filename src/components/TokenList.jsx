import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from "react-router-dom";

import SearchField from './SearchField.jsx';
import TokenTable from './TokenTable.jsx';

class TokenList extends Component {

  onClickExportToCSV = () => {
    console.log('clicked Export To CSV');
  }

  render () {
    return (
      <div>
        <h1>Token List</h1>
        <Row gutter={16} style={{ margin: '1rem 0 2rem' }}>
          <Col span={17}>
            <SearchField />
          </Col>
          <Col span={3}>
            <Link to="/tokens/add"><Button type="primary">Issue Token</Button></Link>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={this.onClickExportToCSV}>Export To CSV</Button>
          </Col>
        </Row>
        <TokenTable />
      </div>
    );
  }
}

export default TokenList;
