import CountryModel from './CountryModel';

export class CountryController {
  all(req, res) {
    CountryModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
export default new CountryController();
