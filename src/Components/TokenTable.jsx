import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Table, Icon, Button } from 'antd';
const { Column } = Table;

class TokenTable extends Component {
  static propTypes = {
    onClickDelete: PropTypes.func.isRequired,
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
    const { onClickDelete, tokens } = this.props;

    return (
      <Table
        dataSource={tokens}
        rowKey={token => token.id}
      >
        <Column title="Token name" dataIndex="tokenName" key="tokenName" />
        <Column title="Token ticker" dataIndex="tokenTicker" key="tokenTicker" />
        <Column title="Total supply" dataIndex="totalSupply" key="totalSupply" />
        <Column title="Creation date" dataIndex="creationDate" key="creationDate" />
        <Column title="Issuer name" dataIndex="issuerName" key="issuerName" />
        <Column title="Template" dataIndex="template" key="template" />
        <Column
          title="Delete"
          key="action"
          render={token => (
            <span>
              <Button
                onClick={() => onClickDelete(token.id)}
                type="link"
              >
                <Icon type="delete" />
              </Button>
            </span>
          )}
        />
      </Table>
    );
  }
}

export default TokenTable;
