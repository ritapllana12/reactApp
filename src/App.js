import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Space } from 'antd';

import { Homepage, Cryptocurrencies, Navbar, Transactions } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/transactions">
              <Transactions />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Space />
      </div>
    </div>
  </div>
);

export default App;
