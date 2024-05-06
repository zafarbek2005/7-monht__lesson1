import React from 'react'

const Single__roat = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

  

    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) {
        return <div>Loading ...</div>
     
    }

    
  return (
   <>
   
   
   
   
   
   </>
  )
}

export default Single__roat