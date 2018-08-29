import ProductModel from './ProductModel';

export class ProductController {
  all(req, res) {
    ProductModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new ProductController();
