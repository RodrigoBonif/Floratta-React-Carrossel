import Carousel from 'react-bootstrap/Carousel';
import './Carrosel.css'
import { useEffect, useState } from 'react';

function Carrossel() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/plantas.json').then((response) => response.json()).then(setData)
    }, [])

    if (!data || !data.length  ) return null;

  return (
    <Carousel>
        {data.map((item) => {
        
        const {id,name,cientificName,description,image} = item;

        return (
        <Carousel.Item key={id} className='Carrossel'>
            <img
            className="d-block img-carrossel"
            src={image}
            alt={name}
            />
            <Carousel.Caption className='box-text-carrossel'>
            <h1>{name}</h1>
            <h4>{cientificName}</h4>
            <hr></hr>
            <p>{description}</p>
            </Carousel.Caption>
        </Carousel.Item>
        )})}
    </Carousel>
  );
}

export default Carrossel;