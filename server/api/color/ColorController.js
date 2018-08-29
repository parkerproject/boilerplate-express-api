import ColorModel from './ColorModel';

export class ColorController {
  all(req, res) {
    ColorModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new ColorController();
