import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

import './token-form.css';

const DATE_FORMAT = 'DD MMM YYYY';

class TokenForm extends Component {

  static propTypes = {
    saveToken: PropTypes.func.isRequired,
  }

  handleSubmit = event => {
    event.preventDefault();

    const { form: { validateFields }, saveToken } = this.props;

    validateFields((err, values) => {
      if (!err) {
        const newToken = values;

        newToken.creationDate = moment().format(DATE_FORMAT);
        saveToken(newToken);
      }
    });
  };

  getCountriesOptions = () => {
    const { countries } = this.props;

    return countries.map(country => (
      <Option
        key={country.code}
        value={country.code}
      >
        {country.name}
      </Option>
    ));
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { getCountriesOptions, handleSubmit } = this;

    return (
      <Form onSubmit={handleSubmit} className="token-form">
        <Form.Item>
          {getFieldDecorator('tokenName', {
            rules: [{ required: true, message: 'Please input token name' }],
          })(
            <Input
              placeholder="Token name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('tokenTicker', {
            rules: [{ required: true, message: 'Please input token ticker' }],
          })(
            <Input
              placeholder="Token ticker"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('totalSupply', {
            rules: [{ required: true, message: 'Please input total supply' }],
          })(
            <Input
              placeholder="Total supply"
              type="number"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('issuerName', {
            rules: [{ required: true, message: 'Please input issuer name' }],
          })(
            <Input
              placeholder="Issue name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('template', {
            rules: [{ required: true, message: 'Please select a template' }],
          })(
            <Select
              initialValue="erc20"
              placeholder="Template"
            >
              <Option value="erc20">ERC20</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('country', {
            rules: [{ required: true, message: 'Please select a country' }],
          })(
            <Select
              placeholder="Country"
            >
              {getCountriesOptions()}
            </Select>,
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Issue Token
        </Button>
      </Form>
    );
  }
}

export default Form.create({ name: 'newToken' })(TokenForm);
