import BrandModel from './MaterialModel';

export class MaterialController {
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
export default new MaterialController();
