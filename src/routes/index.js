import Layout from 'layouts';
import CatalogRoute from './Catalog';


export const createRoutes = store => ({
  path: '/',
  component: Layout,
  indexRoute: CatalogRoute(store),
});

export default createRoutes;
