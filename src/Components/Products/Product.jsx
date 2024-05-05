import React, { useEffect, useState } from 'react';
import './product.css';
import axios from '../../Api';

const Product = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("/products")
            .then(res => setData(res.data))
            .catch(err => console.log("error"));
    }, []); // Empty dependency array to run once on component mount

    const handleDelete = id => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`/products/${id}`)
                .then(res => {
                    console.log(res);
                    // Update state or UI after successful delete if needed
                })
                .catch(err => console.log(err));
        }
    };

    const users = data?.map(e => (
        <div className="card" key={e.id}>
            <img src={e.avatar} alt="" />
            <h3>{e.name}</h3>
            <p>${e.narxi}</p>
            <button onClick={() => handleDelete(e.id)}>delete</button> {/* Pass function reference */}
        </div>
    ));

    return (
        <div className="wrapper">
            {users}
        </div>
    );
};


export default Product;
