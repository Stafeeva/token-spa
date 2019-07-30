import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'antd';
const { Column } = Table;

import { deleteToken, fetchTokens } from '../actions';

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

  constructor(props) {
    super(props);

    this.props.fetchTokens();
  }

  render() {
    const { tokens, deleteToken } = this.props;

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
                onClick={() => deleteToken(token.id)}
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

const filterTokenList = (tokens, filterText) => {
  if (filterText === '' || filterText.length < 3) {
    return tokens;
  }

  const text = filterText.toLowerCase();

  return tokens.filter(token => {
    const name = token.tokenName.toLowerCase();
    const ticker = token.tokenTicker.toLowerCase();

    return name.includes(text) || ticker.includes(text);
  });
};

const mapStateToProps = ({ tokens : { filterText, tokenList }}) => ({
  tokens: filterTokenList(tokenList, filterText),
});

const mapDispatchToProps = dispatch => ({
  fetchTokens: () => dispatch(fetchTokens()),
  deleteToken: id => dispatch(deleteToken(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TokenTable);
