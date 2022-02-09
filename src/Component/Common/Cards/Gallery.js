import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import Dog from '../../../Imgs/dog.jpg';
import Cat from '../../../Imgs/cat.jpg';
import Snail from '../../../Imgs/snail.jpg';

class Gallery extends Component{
    constructor(props){
        super(props)
        this.state={
            index: 0
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e){
        this.setState({index: selectedIndex});
    }

    carousel(){
        return(
            <Carousel className="carousel" activeIndex={this.state.index} onSelect={this.handleSelect}>
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
        );

    }
    render(){
        return(
            <div className="card-background">
                <div className="title-spec">
                    <h3>Gallery</h3>
                </div>
                {this.carousel()}
            </div>
        );
    }
}
export default Gallery;