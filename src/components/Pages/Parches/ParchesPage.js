import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../Hooks/useAuth';


const ParchesPage = () => {

    const { products, user } = useAuth();
    const { id } = useParams()
    console.log('hhghgh', id);

    const history = useHistory();

    const [item, setItem] = useState([])

    useEffect(() => {
        console.log('grtting');
        fetch(`https://immense-cove-10373.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    // To get the specific product
    const selectedProduct = products?.filter(product => product.id === id);
    console.log(products, "Products");
    console.log(selectedProduct, "selectedProduct");


    const initialInfo = { userName: user.displayName, email: user.email }
    const [info, setInfo] = useState(initialInfo);
    const [address, setAddres] = useState("");

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInformation = { ...info, ...address };
        newInformation[field] = value;
        console.log(newInformation);
        setInfo(newInformation);
    }


    const handleSubmit = e => {
        // collect data
        const information = {
            ...item,
            ...info,
            address

        }

        // send to the server
        fetch('https://immense-cove-10373.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Purchased successfully')
                    history.push('/dashboard')
                }
            });

        e.preventDefault();
    }
    return (
        <div class="max-w-2xl p-6 bg-white items-center">
            <div class="flex items-center justify-between">
                <h1>Parchase Details</h1>
            </div>
            <div class="mt-4">
                <form
                    onSubmit={handleSubmit}
                >
                    <div class="mb-5">
                        <label for="name" class="block font-bold text-gray-600">Name</label>
                        <input
                            onBlur={handleOnBlur}
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            class="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-purple-600"

                        />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block font-bold text-gray-600">Email</label>
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={user?.email}
                            type="text"
                            name="email"
                            class="w-full p-2 border border-gray-300 rounded-l shadow"
                        />

                    </div>
                    <div class="mb-5">
                        <label for="name" class="block font-bold text-gray-600">Product Name</label>
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={item.name}
                            type="text"
                            name="name"
                            class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="" />

                    </div>
                    <div class="mb-5">
                        <label for="price" class="block font-bold text-gray-600">Price</label>
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={item.price}
                            type="text"
                            name="price"
                            class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="" />

                    </div>
                    <div class="mb-5">
                        <label for="price" class="block font-bold text-gray-600">Address</label>
                        <input
                            onBlur={(e) => setAddres(e.target.value)}
                            type="text"
                            name="text"
                            class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="" />

                    </div>
                    <button type="submit"
                        class="block w-full p-3 font-bold text-white bg-blue-500 rounded-l">Submit</button>
                </form>
            </div>
        </div>


    );
};

export default ParchesPage;