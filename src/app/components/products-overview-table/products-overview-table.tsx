import {
    ProductsOverviewTableData,
    ProductsOverviewTableView
} from './products-overview-table-view';
import React from 'react';
import { Product } from '../../pages/products-overview-page/products-overview-page';

export interface ProductsOverviewTableProps {
    products: Array<Product>;
}

export const ProductsOverviewTable: React.FC<ProductsOverviewTableProps> = ({ products }) => {
    function createData(product: Product): ProductsOverviewTableData {
        return {
            id: product.id,
            productCategory: product.category,
            productName: product.name,
            price: product.price
        };
    }
    const rows = products.map(product => createData(product));
    return <ProductsOverviewTableView dataSource={rows} />;
};
