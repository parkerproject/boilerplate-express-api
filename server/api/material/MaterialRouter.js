import * as express from 'express';
import controller from './MaterialController';

export default express
  .Router()
  .get('/', controller.all);
