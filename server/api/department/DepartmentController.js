import DepartmentModel from './DepartmentModel';

export class DepartmentController {
  all(req, res) {
    DepartmentModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new DepartmentController();
