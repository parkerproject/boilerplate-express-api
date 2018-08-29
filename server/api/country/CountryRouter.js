import * as express from 'express';
import controller from './CountryController';

export default express
  .Router()
  .get('/', controller.all);
