import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
const axios = require('axios');
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

import './token-form.css';

const DATE_FORMAT = 'DD MMM YYYY'
const COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';

class TokenForm extends Component {
  static propTypes = {
    saveToken: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { form: { validateFields }, saveToken } = this.props;

    validateFields((err, values) => {
      const newToken = values;

      newToken.creationDate = moment().format(DATE_FORMAT);

      if (!err) {
        saveToken(newToken);
      }
    });
  };

  fetchCountries = () => {
    axios.get(COUNTRIES_API).then(response => {
       this.setState({
         countries: response.data,
       });
    }).catch(err => console.log(err));
  }

  getCountriesOptions = () => {
    if (this.state.countries.length < 1) {
      this.fetchCountries();
    }

    return this.state.countries.map(country => (
      <Option
        key={country.alpha2Code}
        value={country.alpha2Code}
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
