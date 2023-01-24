import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { isFetching } = useGetCryptosQuery(10);

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">Global Crypto</Title>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
    </>
  );
};

export default Homepage;

