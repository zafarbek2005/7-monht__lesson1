import React, { useState } from 'react';
import axios from '../../Api';
import '../Create__product/create.scss'

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
    <section id='se' >
      
          <div className="Conteiner">

                <form onSubmit={handleProducts} >
                      <input 
                        type="text"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        placeholder='Name'
                        required
                      /> <br />
                      <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                        placeholder='Title'
                        required
                      /> <br />
                      <button type="submit">Submit</button>
                </form>
      </div>

      </section>
  
    </>
  );
};

export default ManageProduct;
