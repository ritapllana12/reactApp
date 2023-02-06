jest.mock('axios');



describe('Has top 10 Cryptos in the world', () => {
    it('expects an object', async () => {
      const substr1 = 'Top 10 Cryptos'
      const sub = 'Top 10 Cryptos In The World'
      expect.stringContaining(substr1);
      expect(sub).toContain(substr1);
     });
  });




