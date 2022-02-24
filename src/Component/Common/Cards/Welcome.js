import React, {useState} from 'react';
import {Row,Col} from 'react-bootstrap';
import { InView } from 'react-intersection-observer';

import TopDog from '../../../Imgs/topdog.gif';
import TopDogPic from '../../../Imgs/topdog.jpg';

function Welcome(){
const [inView, setInView] = React.useState(false)

     return(
        <div className="card-background">
            <div className="title-spec">
                <h3>Welcome</h3>
                <br/>
            </div>
            <div>
                <Row>
                    <Col>
                        <p>Linha 1 Texto grande para perceber
                        que ha cenas sfldkgjdfçlkgjgd</p>
                        <p>Linha 2 Texto grande para
                        perceber que ha cenas sfldkgjdfçlkgjgd</p>
                    </Col>
                    <Col>
                        <div inView={inView}>
                            {inView &&
                                 <InView onChange={setInView}>
                                <img
                                className="d-block w-100"
                                src={TopDog}
                                height='auto'
                                alt="cao"/>
                                </InView>
                            }
                            {!inView &&
                                <InView onChange={setInView}>
                                <img
                                className="d-block w-100"
                                src={TopDogPic}
                                height='auto'
                                alt="cao"/>
                                </InView>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </div>  
    );


}

export default Welcome;


/**


 */