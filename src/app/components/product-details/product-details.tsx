import './product-details.scss';
export function ProductDetails() {
    return (
        <>
            <div className="product-details">
                <div className="product-details__main-information">
                    <div className="product-details__main-information__wrapper">
                        <div className="property-name">Name:</div>
                        <div className="property-value">productName</div>
                        <div className="property-name">Category:</div>
                        <div className="property-value">productCategory</div>
                        <div className="property-name">Price:</div>
                        <div className="property-value">productPrice</div>
                    </div>
                    <div className="product-details__image">
                        <img
                            src="https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg"
                            alt="img"
                        />
                    </div>
                </div>
                <div className="product-details__description">
                    <h3 className="product-details__description__title">Description</h3>
                    <div className="product-details__description__content">productDescription</div>
                </div>
            </div>
        </>
    );
}
