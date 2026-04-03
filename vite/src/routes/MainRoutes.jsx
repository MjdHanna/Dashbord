import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const ProductsPage = Loadable(lazy(() => import('views/products/index.jsx'))); //New Page
const OrdersPage = Loadable(lazy(() => import('views/orders/index.jsx'))); //New Page
const UsersPage = Loadable(lazy(() => import('views/users/index.jsx'))); //New Page
const Brandspage = Loadable(lazy(() => import('views/brands/index.jsx'))); //New Page
const OccasionsPage = Loadable(lazy(() => import('views/occasions/index.jsx'))); //New Page
const VendorsPage = Loadable(lazy(() => import('views/vendors/index.jsx'))); //New Page
const DriversPage = Loadable(lazy(() => import('views/drivers/index.jsx'))); //New Page
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />, // الصفحة الرئيسية اول ما يفتح الرابط localhost://3000
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'products',
      element: <ProductsPage />
    }, //New Page
    {
      path: 'orders',
      element: <OrdersPage />
    }, //New Page
    {
      path: 'users',
      element: <UsersPage />
    }, //New Page
    {
      path: 'brands',
      element: <Brandspage />
    },
    {
      path: 'occasions',
      element: <OccasionsPage />
    }, //New Page
    {
      path: 'vendors',
      element: <VendorsPage />
    },
    {
      path: 'drivers',
      element: <DriversPage />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    }
    // sample page routing

    // ==============================|| MAIN ROUTING ||============================== //
  ]
};

export default MainRoutes;
