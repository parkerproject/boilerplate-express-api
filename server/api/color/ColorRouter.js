import * as express from 'express';
import controller from './ColorController';

export default express
  .Router()
  .get('/', controller.all);
