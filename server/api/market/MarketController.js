import MarketModel from './MarketModel';

export class MarketController {
  all(req, res) {
    MarketModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new MarketController();
