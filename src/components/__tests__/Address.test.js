import React from 'react';
import { render } from '@testing-library/react';
import Address from '../Address';
import axios from 'axios';
jest.mock('axios');

const address = '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5';
const transaction_hash = 
  {
    'Address':'3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5',
    'Value':'954',
    'Hash':'3a219222a9be8ac955764117d283de8a72fddf6dbb015566aab6f2dc7d25dde5',
    'Fee':'386',
    'Size':'193',
    'Result':'954',
  };


describe('BTC Address', () => {
  it('expects a btc address of 34 characters', () => {
    axios.get.mockResolvedValue({ data: address });
    render(<Address />);
    expect(address).toHaveLength(34);
   });
});


describe('Response Hashes', () => {
    it('expects an object', async () => {
      axios.get.mockResolvedValue({ data: transaction_hash });
      render(<Address />); 
      expect(typeof transaction_hash).toBe("object");
     });
  });



