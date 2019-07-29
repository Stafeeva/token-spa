import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Table } from 'antd';

const columns = [
  {
    title: 'Token name',
    dataIndex: 'tokenName',
    key: 'tokenName',
  },
  {
    title: 'Token ticker',
    dataIndex: 'tokenTicker',
    key: 'tockenTicker',
  },
  {
    title: 'Total supply',
    dataIndex: 'totalSupply',
    key: 'totalSupply',
  },
  {
    title: 'Creation date',
    dataIndex: 'creationDate',
    key: 'creationDate',
  },
  {
    title: 'Issuer name',
    dataIndex: 'issuerName',
    key: 'issuerName',
  },
  {
    title: 'Template',
    dataIndex: 'template',
    key: 'template',
  },
];

class TokenTable extends Component {
  static propTypes = {
    tokens: PropTypes.arrayOf(PropTypes.shape({
      tokenName: PropTypes.string.isRequired,
      tokenTicker: PropTypes.string.isRequired,
      totalSupply: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      issuerName: PropTypes.string.isRequired,
      template: PropTypes.string.isRequired,
    })),
  }

  render() {
    const { tokens } = this.props;

    return (
      <Table dataSource={tokens} columns={columns} rowKey={token => token.id} />
    );
  }
}

export default TokenTable;
