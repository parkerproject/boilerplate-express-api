import retailerRouter from './api/retailer/RetailerRouter';

export default function routes(app) {
  app.use('/api/v1/list/retailers', retailerRouter);
}
