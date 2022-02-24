import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';

import Dog from '../../../Imgs/dog.jpg';
import Cat from '../../../Imgs/cat.jpg';
import Snail from '../../../Imgs/snail.jpg';

function Gallery (){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <div className="card-background">
            <div className="title-spec">
                <h3>Gallery</h3>
            </div>
            <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={Dog}
                alt="Cão"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={Cat}
                alt="Gato"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={Snail}
                alt="Caracol"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
    
}
export default Gallery;