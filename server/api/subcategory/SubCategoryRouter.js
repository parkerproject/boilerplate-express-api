import * as express from 'express';
import controller from './SubCategoryController';

export default express
  .Router()
  .get('/', controller.all);
