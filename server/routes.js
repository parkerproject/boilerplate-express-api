import examplesRouter from './api/examples/router';

export default function routes(app) {
  app.use('/v1/examples', examplesRouter);
}
