const retailerRouter = require('./api/retailer/RetailerRouter');
const brandRouter = require('./api/brand/BrandRouter');
const colorRouter = require('./api/color/ColorRouter');
const materialRouter = require('./api/material/MaterialRouter');
const printRouter = require('./api/print/PrintRouter');
const countryRouter = require('./api/country/CountryRouter');
const categoryRouter = require('./api/category/CategoryRouter');
const subCategoryRouter = require('./api/subcategory/SubCategoryRouter');
const departmentRouter = require('./api/department/DepartmentRouter');
const marketRouter = require('./api/market/MarketRouter');
const productRouter = require('./api/product/ProductRouter');

const API_BASE = '/api/v1';

module.exports = function routes(app) {
  app.use(`${API_BASE}/list/retailers`, retailerRouter);
  app.use(`${API_BASE}/list/brands`, brandRouter);
  app.use(`${API_BASE}/list/colors`, colorRouter);
  app.use(`${API_BASE}/list/materials`, materialRouter);
  app.use(`${API_BASE}/list/prints`, printRouter);
  app.use(`${API_BASE}/list/countries`, countryRouter);
  app.use(`${API_BASE}/list/categories`, categoryRouter);
  app.use(`${API_BASE}/list/subcategories`, subCategoryRouter);
  app.use(`${API_BASE}/list/departments`, departmentRouter);
  app.use(`${API_BASE}/list/markets`, marketRouter);
  app.use(`${API_BASE}/products`, productRouter);
};
