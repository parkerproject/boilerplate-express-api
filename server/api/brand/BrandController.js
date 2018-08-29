import BrandModel from './BrandModel';

export class BrandController {
  all(req, res) {
    BrandModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new BrandController();
