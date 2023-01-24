import React, { useState } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { io } from 'socket.io-client';

const Address = () => {
  const [trans, setTrans] = useState(null);
  const [state, setState] = useState({
    btcAddress: '',
    btcBalance: '',
    errorMsg: '',
    isLoading: '',
    transactions: '',
  });
  const [listenHash, setListenHash] = useState([]);
  const sockett = io('wss://ws.blockchain.info/mercury-gateway/v1/ws', {
    transports: ['websocket'],
    origin: 'https://exchange.blockchain.com',
  });

  const handleSubscription = (hash) => {
    if (listenHash.includes(hash)) return;
    setListenHash([...listenHash, hash]);
    sockett.on('connect', () => {
      console.log('Connected to the server');
      listenHash.forEach((h) => {
        sockett.emit('subscribe', 'hashtx', h);
      });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.btcAddress?.length !== 34) {
      setState({ ...state, errorMsg: 'BTC Address has to be 34 characters' });
      return;
    }
    const urlBalance = `https://blockchain.info/q/addressbalance/${state.btcAddress}`;
    fetch(urlBalance)
      .then((res) => res.json())
      .then((json) => setState({ ...state, btcBalance: `BTC Balance: ${json / 100000000}` }));

    const urlTransactions = `https://blockchain.info/rawaddr/${state.btcAddress}`;
    axios
      .get(urlTransactions)
      .then((response) => {
        console.log('responsee', response);
        setTrans(response.data);
      })
      .then((response) => response.data.txs.inputs.prev_out.map((transaction) => ({
          value: `${transaction.inputs.prev_out.value}`,
          addr: `${transaction.inputs.prev_out.addr}`,
        })))
      .then((transactionss) => {
        setState({
          ...state,
          transaction: transactionss,
          isLoading: false,
        });
      })
      .catch((error) => setState({ ...state, error, isLoading: false }));
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    setState({
      ...state,
      btcAddress: event.target.value,
    });
  };

  return (
    <div className="search-crypto">
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter BTC Address"
          name="btcAddress"
          onChange={handleInputChange}
          autoFocus
        />
        <div className="search-button">
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </form>
      <h3>{state.errorMsg}</h3>
      <br />
      <h4>{state.btcAddress}</h4>
      <h4>{state.btcBalance}</h4>
      <div className="mainTransCont">
        {!state.isLoading ? (
          trans?.txs?.map((transaction) => (
            <div className="transactionCont">
              <div className="title">
                <p>TITULLI</p>
                <button type="submit" onClick={() => handleSubscription(transaction.hash)}> Subscribe</button>
              </div>
              <div className="body">
                <p><b>Value:</b>{transaction.balance}</p>
                <p><b>Hash:</b>{transaction.hash}</p>
              </div>
            </div>
          ))
        ) : (
          <p />
        )}
      </div>
    </div>
  );
};

export default Address;
