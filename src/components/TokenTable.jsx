import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Icon, Modal, Table } from 'antd';
import { deleteToken, fetchTokens } from '../actions/tokens';

const { Column } = Table;
const { confirm } = Modal;

class TokenTable extends Component {

  static propTypes = {
    deleteToken: PropTypes.func.isRequired,
    fetchTokens: PropTypes.func.isRequired,
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

  showConfirm = id => {
    const { deleteToken } = this.props;

    confirm({
      title: 'Do you want to delete these token?',
      okText: 'Delete',
      okType: 'danger',

      onOk() {
        deleteToken(id);
      },
    });
  }

  render() {
    const { tokens } = this.props;
    const { showConfirm } = this;

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
                onClick={() => showConfirm(token.id)}
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

const mapStateToProps = ({ tokens: { filterText, tokenList } }) => ({
  tokens: filterTokenList(tokenList, filterText),
});

const mapDispatchToProps = dispatch => ({
  fetchTokens: () => dispatch(fetchTokens()),
  deleteToken: id => dispatch(deleteToken(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TokenTable);
