import * as express from 'express';
import controller from './PrintController';

export default express
  .Router()
  .get('/', controller.all);
