import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsOverviewPage } from '../pages/products-overview-page/products-overview-page';
import { ProductDetails } from '../components/product-details/product-details';
import { ProductPage } from '../pages/product-page/product-page';

const router = createBrowserRouter([
    {
        path: '/products-overview',
        element: <ProductsOverviewPage />
    },
    {
        path: '/product-details/:id',
        element: <ProductPage />
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
