import RetailerModel from './RetailerModel';

export class RetailerController {
  all(req, res) {
    RetailerModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new RetailerController();
