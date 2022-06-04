import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import { commentsAPI } from "../components/mainAPI.js";


import "./reviews.css";

import { AddNewReview } from "../components/AddNewReview";

//users
import headshot from "../images/headshot.jpg";

//product images
import jordan1offwhite from "../images/jordan 1 off white.jpg";
import jordan4black from "../images/jordan 4 black cement.jpg";
import jordan4offwhite from "../images/jordan 4 off white.webp";
import jordan1brotherhood from "../images/jordan 1 brotherhood.jpg";
import jordan11 from "../images/jordan 11 space jam.jpg";

function Reviews() {
  const [reviewData, setAPIData] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [reviewProductId, setReviewProductId] = useState("");

  const deleteReview = async (event) => {
    event.preventDefault();
    const deleteButtonId = event.target.value;
    commentsAPI.apiDelete(deleteButtonId).then((response) => {
      setAPIData([response]);
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit event", event);
    console.log("onSubmit event product:", event.target.name);

    commentsAPI.apiEdit([reviewProductId], [newComment]);
    setNewComment("");
    setReviewProductId("");
  };

  function handleChange(event) {
    console.log("reviews handleChange event:", event);
    console.log("reviews handleChange name:", event.target.name);
    console.log("reviews onSubmit id:", event.target.classList.value);
    console.log("reviews handleChange value:", event.target.value);
    setNewComment(`${event.target.name}: ${event.target.value}`);
    setReviewProductId(`_id: ${event.target.classList.value}`);
  }

  useEffect(() => {
    commentsAPI
    .get("https://629a53bb7b866a90ec4d8fcf.mockapi.io/api/v1/users")
     .then((response) => {
        setAPIData(response);
      });
  }, []);

  return (
    <div className="reviewPage">
      <div className="reviewsTitle">
          What do you think of our sneakers?
      </div>

<div>
<AddNewReview />

    
          <br />
          <div className="reviews-list">
            <h1 id="commentsTitle">Reviews</h1>
          </div>
          <br />
          <div className="reviewBody">
            {[...reviewData].reverse().map((data, index) => {
              return (
                <Container id="reviewContainer" key={index}>
                  <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}></Col>
                    <Col xs={2} id="reviewColumns reviewDataName">
                      <div id="reviewUserHeader">
                        {data.name.slice(6)}
                        <br />
                        <img id="reviewUserImage" alt="" src={headshot.jpg} />
                      </div>
                    </Col>
                    <Col xs={2} id="reviewColumns reviewDataProduct">
                      <div>{data.product.slice(8)}</div>
                      <div>
                        {(() => {
                          if (data.product === `product: Sneaker 1`) {
                            return (
                              <img id="reviewProductImage" alt="" src={jordan1offwhite} />
                            );
                          } else if (data.product === `product: Sneaker 2`) {
                            return (
                              <img id="reviewProductImage" alt="" src={jordan4black} />
                            );
                          } else if (data.product === `product: Sneaker 3`) {
                            return (
                              <img id="reviewProductImage" alt="" src={jordan4offwhite} />
                            );
                          } else if (data.product === `product: Sneaker 4`) {
                            return (
                              <img id="reviewProductImage" alt="" src={jordan1brotherhood} />
                            );
                          } else if (data.product === `product: Sneaker 5`) {
                            return (
                              <img id="reviewProductImage" alt="" src={jordan11} />
                            );
                          } else {
                            <p>Error!!!</p>;
                          }
                        })()}
                      </div>
                    </Col>
                    <Col xs={2} id="reviewActionButtons">
                      <div className="editButtonTitle">
                        {showEditForm ? (
                          <div className="editReviewBody">
                            <h3>Edit Existing Review</h3>
                            <form onSubmit={onSubmit}>
                              <input
                                className={data._id}
                                id="reviewCommentBox"
                                name="comment"
                                placeholder="comment"
                                onChange={handleChange}
                                value={newComment.comment}
                              ></input>
                              &nbsp;
                              <Button variant="success" type="submit">
                                Submit New Review
                              </Button>
                            </form>
                          </div>
                        ) : null}
                      </div>
                      <br />
                      <br />
                      <Button
                        className="btn btn-danger"
                        onClick={deleteReview}
                        value={data._id}
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={1}></Col>
                  </Row>
                  <Row>
                    <Col xs={4}></Col>
                    <Col xs={4} id="reviewColumns">
                      <div id="reviewDataComment">
                        {data.comment.slice(9)}{" "}
                        <span>
                          {" "}
                          <Button
                            className="btn btn-info"
                            onClick={() => setShowEditForm(true)}
                          >
                            Edit Review
                          </Button>
                        </span>
                      </div>
                      </Col>
                      <Col xs={4}></Col>
               
                  </Row>
                </Container>
              );
            })}
          </div>
        </div>
            </div>
  );
}

export default Reviews;