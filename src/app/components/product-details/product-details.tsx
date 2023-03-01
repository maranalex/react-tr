import './product-details.scss';
import { Product } from '../../pages/products-overview-page/products-overview-page';
import React from 'react';

export interface ProductDetailsProps {
    product?: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
        <>
            <div className="product-details">
                <div className="product-details__main-information">
                    <div className="product-details__main-information__wrapper">
                        <div className="property-name">Name:</div>
                        <div className="property-value">{product?.name}</div>
                        <div className="property-name">Category:</div>
                        <div className="property-value">{product?.category}</div>
                        <div className="property-name">Price:</div>
                        <div className="property-value">{product?.price}</div>
                    </div>
                    <div className="product-details__image">
                        <img src={product?.image} alt="img" />
                    </div>
                </div>
                <div className="product-details__description">
                    <h3 className="product-details__description__title">Description</h3>
                    <div className="product-details__description__content">
                        {product?.description}
                    </div>
                </div>
            </div>
        </>
    );
};
