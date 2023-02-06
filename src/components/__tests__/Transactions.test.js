jest.mock('axios');


describe('Has top 10 Cryptos in the world', () => {
    it('expects an object', async () => {
      const substr1 = 'Enter a BTC address'
      const ss = 'Enter a BTC address to view transaction history'
      expect.stringContaining(substr1);
      expect(ss).toContain(substr1);
     });
  });

