import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./ViewProducts.css";

import ProductsButton from "../components/ProductsButton";

//Page Background

import jordan1brotherhood from "../images/jordan 1 brotherhood.jpg";
import jordan1offwhite from "../images/jordan 1 off white.jpg";
import jordan4black from "../images/jordan 4 black cement.jpg";
import jordan4offwhite from "../images/jordan 4 off white.webp";
import jordan4whiteoreo from "../images/jordan 4 white oreo.jpg";
import jordan11spacejam  from "../images/jordan 11 space jam.jpg";

function ViewProducts() {
  return (
    <div>
      {" "}
      <h1 id="homePage_title">Check out these beautiful sneakers</h1>
      <Container>
        <Row>
          <Col id="product">
            <img id="productThumbnail" alt="" src={jordan1brotherhood} />
            <br />
            <desc className="productDescription">The Sneaker that is an ode to Michael Jordan's fraternity!</desc>
            <ProductsButton />
          </Col>
          <Col xs={3} id="product">
            <img id="productThumbnail" alt="" src={jordan1offwhite} />
            <br />
            <desc className="productDescription">
            This sneaker is a grail to most sneaker heads!
            </desc>
            <ProductsButton />
          </Col>
          <Col id="product">
            <img id="productThumbnail" alt="" src={jordan4black} />
            <br />
            <desc className="productDescription">
         This is a sneaker heads dream!
            </desc>
            <ProductsButton />
          </Col>
        </Row>
        <Row>
          <Col id="product">
            <img id="productThumbnail" alt="" src={jordan4offwhite} />
            <br />
            <desc className="productDescription">
              This is a sneaker that you can wear with anything!
            </desc>
            <ProductsButton />
          </Col>
          <Col id="product">
            <img id="productThumbnail" alt="" src={jordan4whiteoreo} />
            <br />
            <desc className="productDescription">
              A true sneaker gem!
            </desc>
            <ProductsButton />
          </Col>
          <Col xs={5} id="product">
            <img id="productThumbnail" alt="" src={jordan11spacejam} />
            <br />
            <desc className="productDescription">
              This sneaker stands the test of time!
            </desc>
            <ProductsButton />
          </Col>
        </Row>
       
      </Container>
      
      </div>
    
  );
}

export default ViewProducts;