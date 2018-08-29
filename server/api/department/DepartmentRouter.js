import * as express from 'express';
import controller from './DepartmentController';

export default express
  .Router()
  .get('/', controller.all);
