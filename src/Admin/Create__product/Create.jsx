import React,{useState,useEffect} from 'react'
import { Saidbar } from '../Saidbar/Saidbar'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './create.scss'
import axios from '../../Api';


const Create = () => {

  const [data, setData] = useState(null);
  const [reload,setreload] = useState(false)

  useEffect(() => {
      axios.get("/products")
          .then(res => setData(res.data))
          .catch(err => console.log("error"));
  }, [reload]); 

  const handleDelete = id => {
      if (window.confirm("Are you sure?")) {
          axios.delete(`/products/${id}`)
              .then(res => {
                  setreload(p => !p)
                  console.log(res);
                 
              })
              .catch(err => console.log(err));
      }
  };

  
  const users = data?.map(e => (

    <MDBCard >
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage  src={e.avatar} fluid alt='...' />
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} ></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>{e.name}</MDBCardTitle>
      <MDBCardText>
        {e.title}
      </MDBCardText>
      <MDBBtn href='' onClick={() => handleDelete(e.id)}>Delete</MDBBtn>
    </MDBCardBody>
  </MDBCard>


));
  return (
    <>
    <Saidbar/>

    <section className='Conteiner wrapper'>
      {users}
    </section>
    
    
    </>
  )
}

export default Create