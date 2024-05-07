import React, { useState } from 'react';
import axios from '../../Api';

const Initialstate = {
  name: "",
  title: "",
};

const ManageProduct = () => {
  const [data, setData] = useState(Initialstate);

  const handleProducts = (e) => {
    e.preventDefault();
    axios
      .post("/products", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleProducts}>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ManageProduct;
