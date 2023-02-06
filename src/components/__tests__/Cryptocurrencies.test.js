import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cryptocurrencies from '../Cryptocurrencies';
import '@testing-library/jest-dom/extend-expect';


describe('Input value', () => {
    it('updates on change', () => {

      const setSearch = jest.fn((value) => {})
      const { queryByPlaceholderText } = render(<Cryptocurrencies setSearch={setSearch}/>)
      const searchInput = queryByPlaceholderText('Search Cryptocurrency')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
      expect(searchInput.value).toBe('test')
    })
  })