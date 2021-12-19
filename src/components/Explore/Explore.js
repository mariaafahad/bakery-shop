import React, { useEffect, useState } from 'react';
import Explorer from './Explorer';

const Explore = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('https://immense-cove-10373.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <div className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {
                allProducts.map(products => <Explorer
                    key={products.id}
                    products={products}

                ></Explorer>)
            }
        </div>
    );
};

export default Explore;