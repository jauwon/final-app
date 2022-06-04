import React, { useState } from "react";

import { Form, Card } from "react-bootstrap";

import "./AddNewReview.css";
import { commentsAPI } from "../components/mainAPI.js";

export const AddNewReview = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);
    console.log("onSubmit event product:", event.target.name);

    commentsAPI.post([name, product, comment]);
    setName("");
    setProduct("");
    setComment("");
  };

  function handleChange(event) {
    console.log("AddNewReview handleChange name", event.target.name);
    console.log("AddNewReview handleChange value", event.target.value);
    setName(`${event.target.name}: ${event.target.value}`);
  }
  function handle2Change(event) {
    console.log("AddNewReview handle2Change name", event.target.name);
    console.log("AddNewReview handle2Change value", event.target.value);
    setProduct(`${event.target.name}: ${event.target.value}`);
  }
  function handle3Change(event) {
    console.log("AddNewReview handle3Change name", event.target.name);
    console.log("AddNewReview handle3Change value", event.target.value);
    setComment(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <Card className="bg-transparent border-0" id="addReviewCard">
      <div id="addReviewHeader">
        <div className="addReviewBody">
          <h4>Add A New Review</h4>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={name.name}
            />
            <Form.Select
              id="productReviewDropdown"
              name="product"
              aria-label="Select A Product"
              onChange={handle2Change}
              value={product.product}
            >
              <option id="selectAProduct" value="Select A Product">
                Select A Product
              </option>
              <option id="productSelectMenu" value="Sneaker 1">
                Sneaker 1
              </option>
              <option id="productSelectMenu" value="Sneaker 2">
                Sneaker 2
              </option>
              <option id="productSelectMenu" value="Sneaker 3">
                Sneaker 3
              </option>
              <option id="productSelectMenu" value="Sneaker 4">
                Sneaker 4
              </option>
              <option id="productSelectMenu" value="Sneaker 5">
                Sneaker 5
          </option>
            </Form.Select>
            <input
              id="reviewCommentBox"
              name="comment"
              placeholder="comment"
              onChange={handle3Change}
              value={comment.comment}
            ></input>
            <br />
            <button id="submitReviewButton" type="submit">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};