import * as express from 'express';
import controller from './RetailerController';

export default express
  .Router()
  .get('/', controller.all);
