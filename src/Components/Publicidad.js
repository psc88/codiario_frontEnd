import React from 'react';
import { Image, Carousel } from 'react-bootstrap';
import publicidad1 from '../img/Publicidad/publicidad1.jpg'
import publicidad2 from '../img/Publicidad/publicidad2.jfif'
import publicidad3 from '../img/Publicidad/publicidad3.jpg'



const Publicidad = () => {
    return (
        <Carousel fade>
            <Carousel.Item className='d-flex justify-content-center'>
                <Image src={publicidad1} className='d-block w-100' fluid></Image>
            </Carousel.Item>
            <Carousel.Item className='d-flex justify-content-center'>
                <Image src={publicidad2} className='d-block w-100' fluid></Image>
            </Carousel.Item>
            <Carousel.Item className='d-flex justify-content-center'>
                <Image src={publicidad3} className='d-block w-100' fluid></Image>
            </Carousel.Item>
        </Carousel>
    );
};

export default Publicidad;