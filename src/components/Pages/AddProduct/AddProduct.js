import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = data => {

        data.preventDefault();
        console.log(data);
        axios.post('http://localhost:5000/addproduct', data)
            .then(res => {
                console.log(res);
                if (res) {
                    history.push('/newService')
                }
            })
    }
    return (
        <div className="add-service">
            <form onSubmit={() => handleSubmit(onSubmit)}>
                <input className="border-gray-700"{...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("ingredients")} placeholder="Ingredients" />
                <input type="text" {...register("price")} placeholder="Size" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;