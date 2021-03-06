/* eslint-disable no-undef */
'use strict';
require('dotenv').config();
process.env.logLevel = 'info';

import { TradepairQueries } from '../tradepairs/tradepairs';

describe('Tradepair', () => {
  let symbolCache: string = '';

  test('Get BCHABC-ETH symbol', async () => {
    const symbol = await TradepairQueries.idToSymbol('kucoin', 'BCHABC-ETH');

    for (let i = 0; i < 10; i++) {
      symbolCache = (await TradepairQueries.idToSymbol('kucoin', 'BCHABC-ETH')) as string;
    }

    expect(symbol == symbolCache).toBe(true);
  });
});
