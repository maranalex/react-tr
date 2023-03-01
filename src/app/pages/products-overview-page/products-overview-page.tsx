import { ProductsOverviewTable } from '../../components/products-overview-table/products-overview-table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API } from '../../api/api-config';

export function ProductsOverviewPage() {
    const [products, setProducts] = useState<Array<Product>>([]);
    function getProducts() {
        axios
            .get<Array<Product>>(API + '/products')
            .then(result => {
                setProducts(result.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <ProductsOverviewTable products={products} />;
}

export interface Product {
    id: string;
    category: string;
    description: string;
    image: string;
    name: string;
    price: number;
}
