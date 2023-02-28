import { ProductDetails } from '../../components/product-details/product-details';
import './product-page.scss';
import { Button } from '@mui/material';
export function ProductPage() {
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
            <ProductDetails />
        </>
    );
}
