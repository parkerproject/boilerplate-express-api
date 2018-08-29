import retailerRouter from './api/retailer/RetailerRouter';
import brandRouter from './api/brand/BrandRouter';
import colorRouter from './api/color/ColorRouter';
import materialRouter from './api/material/MaterialRouter';
import printRouter from './api/print/PrintRouter';
import countryRouter from './api/country/CountryRouter';
import categoryRouter from './api/category/CategoryRouter';
import subCategoryRouter from './api/subcategory/SubCategoryRouter';
import departmentRouter from './api/department/DepartmentRouter';
import marketRouter from './api/market/MarketRouter';
import productRouter from './api/product/ProductRouter';

export default function routes(app) {
  app.use('/api/v1/list/retailers', retailerRouter);
  app.use('/api/v1/list/brands', brandRouter);
  app.use('/api/v1/list/colors', colorRouter);
  app.use('/api/v1/list/materials', materialRouter);
  app.use('/api/v1/list/prints', printRouter);
  app.use('/api/v1/list/countries', countryRouter);
  app.use('/api/v1/list/categories', categoryRouter);
  app.use('/api/v1/list/subcategories', subCategoryRouter);
  app.use('/api/v1/list/departments', departmentRouter);
  app.use('/api/v1/list/markets', marketRouter);
  app.use('/api/v1/products', productRouter);
}
