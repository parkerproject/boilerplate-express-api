import * as express from 'express';
import controller from './BrandController';

export default express
  .Router()
  .get('/', controller.all);
