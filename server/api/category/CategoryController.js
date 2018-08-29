import CategoryModel from './CategoryModel';

export class CategoryController {
  all(req, res) {
    CategoryModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new CategoryController();
