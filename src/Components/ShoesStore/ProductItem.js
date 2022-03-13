import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let { product, watch } = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={product.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        watch(product);
                    }}>Add To Carts</button>
                </div>
            </div >
        );
    }
}

export default ProductItem;