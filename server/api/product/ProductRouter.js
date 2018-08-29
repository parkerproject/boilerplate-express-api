import * as express from 'express';
import controller from './ProductController';

export default express
  .Router()
  .get('/', controller.all);
