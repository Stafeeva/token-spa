import React, { Component } from 'react';

import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

class TokenAdd extends Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { handleSubmit } = this;

    return (
      <div>
        <h1>Issue Token</h1>
        <Form onSubmit={handleSubmit}>
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
              rules: [{ required: true, message: 'Please input issuer name!' }],
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
                <Option value="ch">Switzerland</Option>
              </Select>,
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Issue Token
          </Button>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'newToken' })(TokenAdd);
