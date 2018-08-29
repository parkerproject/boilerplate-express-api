import PrintModel from './PrintModel';

export class PrintController {
  all(req, res) {
    PrintModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new PrintController();
