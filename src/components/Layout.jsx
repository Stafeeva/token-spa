import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Menu } from 'antd';

const Layout = props => (
  <Row gutter={36} style={{ marginTop: '1rem' }}>
    <Col span={6}>
      <Menu>
        <Menu.Item><Link to="/tokens/add">Issue Token</Link></Menu.Item>
        <Menu.Item><Link to="/tokens">Token List</Link></Menu.Item>
      </Menu>
    </Col>
    <Col span={18}>
      {props.children}
    </Col>
  </Row>
);

export default Layout;
