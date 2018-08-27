import RetailerService from './service';

export class RetailerController {
  all(req, res) {
    RetailerService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    RetailerService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    RetailerService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r));
  }
}
export default new RetailerController();
