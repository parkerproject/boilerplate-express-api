import * as express from 'express';
import controller from './MarketController';

export default express
  .Router()
  .get('/', controller.all);
