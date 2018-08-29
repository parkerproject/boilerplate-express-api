import * as express from 'express';
import controller from './CategoryController';

export default express
  .Router()
  .get('/', controller.all);
