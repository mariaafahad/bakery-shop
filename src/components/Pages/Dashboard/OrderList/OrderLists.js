import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import OrderList from './OrderList';

const OrderLists = () => {

    const { user } = useAuth();
    const [lists, setLists] = useState([])
    useEffect(() => {
        const url = `https://immense-cove-10373.herokuapp.com/purchase?email=${user.email}`
        fetch(url)
            .then(res => res.json())

            .then(data => setLists(data));
    }, [user.email])

    let total = 0;
    for (let i = 0; i < lists.length; i++) {
        const product = lists[i];
        console.log(product.price)
        total = total + parseInt(product.price);
    }
    return (
        <div>
            <h1 className="text-4xl mt-20 text-green-400">Parcahse count: {lists.length} items</h1>
            <h1 className="text-4xl mt-20 text-red-400">Purchese total price: {total}</h1>
            <div className="flex justify-around">
                {lists.map(list =>

                    <OrderList

                        list={list}


                    ></OrderList>
                )
                }

            </div>


        </div>
    );
};

export default OrderLists;