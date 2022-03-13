import React, { Component } from 'react';
import ProductItem from './ProductItem.js';

class ProductList extends Component {
    renderProduct = () => {
        let { arrSP, details } = this.props;
        return arrSP.map((sp) => {
            return <div className="col-4 p-2" key={`sanPham${sp.id}`}>
                <ProductItem product={sp} watch={details} />
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        );
    }
}

export default ProductList;

