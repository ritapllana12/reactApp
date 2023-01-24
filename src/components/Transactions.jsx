import React from 'react';
import { Typography } from 'antd';
import Address from './Address';

const { Title } = Typography;

const Transactions = () => (
  <>
    <Title level={2} className="heading">Address Search</Title>
    <Title level={3} className="home-title">Enter a BTC address to view transaction history</Title>
    <div className="home-heading-container">
      <Address />
    </div>
  </>
      );
  export default Transactions;
