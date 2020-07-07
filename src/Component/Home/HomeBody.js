import React, { Component } from 'react'

import {Carousel} from 'react-bootstrap'
import logo1 from './aa.jpg';
import logo2 from './bb.png';
import './Homebody.css'


export class HomeBody extends Component {
    render() {
        return (
            <div>
                   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="Third slide"
    />



  </Carousel.Item>
</Carousel>   
            </div>
        )
    }
}

export default HomeBody
