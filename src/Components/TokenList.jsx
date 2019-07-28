import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Row, Col, Button } from 'antd';

import SearchField from './SearchField.jsx';

class TokenList extends Component {
  @autobind filterTokens(filter) {
    console.log('filtering...', filter);
  }

  @autobind onClickIssueToken() {
    console.log('clicked Issue Token');
  }

  @autobind onClickExportToCSV() {
    console.log('clicked Export To CSV');
  }


  render () {
    const { filterTokens, onClickExportToCSV, onClickIssueToken } = this;

    return (
      <div>
        <h1>Token List</h1>
        <Row gutter={16}>
          <Col span={18}>
            <SearchField onType={filterTokens}/>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={onClickIssueToken}>Issue Token</Button>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={onClickExportToCSV}>Export To CSV</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TokenList;
