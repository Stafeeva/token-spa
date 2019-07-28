import React from 'react';
import { Row, Col, Menu } from 'antd';

// import Menu from './Menu.jsx';

const Layout = (props) => (
  <Row gutter={24}>
    <Col span={6}>
      <Menu>
        <Menu.Item>Issue Token</Menu.Item>
        <Menu.Item>Token List</Menu.Item>
      </Menu>
    </Col>
    <Col span={18}>
      {props.children}
    </Col>
  </Row>
);

export default Layout;
