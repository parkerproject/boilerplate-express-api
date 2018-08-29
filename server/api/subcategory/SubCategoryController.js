import SubCategoryModel from './SubCategoryModel';

export class SubCategoryController {
  all(req, res) {
    SubCategoryModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new SubCategoryController();
