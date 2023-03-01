import { ProductDetails } from '../../components/product-details/product-details';
import './product-page.scss';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../api/api-config';
import React, { useEffect, useState } from 'react';
import { Product } from '../products-overview-page/products-overview-page';
import './product-page.scss';

export const ProductPage: React.FC = () => {
    const [product, setProduct] = useState<Product>();
    const { id = '' } = useParams();

    useEffect(() => {
        getProductById(id);
    }, []);

    function getProductById(id: string) {
        axios
            .get(API + `/products/${id}`)
            .then(result => setProduct(result.data))
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="product-page__top-bar">
                <h1>Product: productName</h1>
                <div className="product-page__buttons-wrapper">
                    <Button variant="contained">Edit</Button>
                    <Button variant="contained" color="error">
                        Delete
                    </Button>
                </div>
            </div>
            <ProductDetails product={product} />
        </>
    );
};
