import React from "react";

export default class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewComments: [],
      currentDateTime: Date().toLocaleString(),
    };
  }

  
  handleSubmit(event) {
    console.log("handleSubmit event:", event);
    event.preventDefault();

    console.log("handleSubmit reviewcomments:", this.state.reviewComments);
    let reviewComments = this.state.reviewComments;
    console.log(
      "index 0) handleSubmit fullName:",
      event.target.elements.fullName.value
    );
    let fullName = event.target.elements.fullName.value;
    console.log(
      "index 1) handleSubmit sneakerDescription:",
      event.target.elements.sneakerDescription.value
    );
    let sneakerDescription = event.target.elements.sneakerDescription.value;
    console.log(
      "index 2) handleSubmit email:",
      event.target.elements.email.value
    );
    let email = event.target.elements.email.value;

    let id = parseInt(this.state.reviewComments.length + 1);
    console.log("index 3) handleSubmit id =:", id);

    let date = this.state.currentDateTime;
    console.log("index 4) handleSUbmit date =:", date);

    reviewComments.push([fullName, sneakerDescription, email, id + 1, date]);
    this.setState({ reviewComments });
  }

  render() {
    return (
      <div>
        <form id="sneakerReviewForm" onSubmit={this.handleSubmit.bind(this)}>
          <div name="todaysDate" value={this.state.currentDateTime}>
            {this.state.currentDateTime["todaysDate"]}
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
            <label htmlFor="emailInput">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Input email"
            />
            <small className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="fullNameInput">Full Name</label>
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="fullNameInput"
              placeholder="Full Name"
              value={this.state.reviewComments["fullName"]}
            />
          </div>
          <label htmlFor="exampleFormControlTextarea1">
            what do you think of this sneaker?
          </label>
          <textarea
            name="sneakerDescription"
            type="text"
            className="form-control"
            id="textArea"
            placeholder="This sneaker looks very nice!"
            rows="3"
            value={this.state.reviewComments["sneakerDescription"]}
          ></textarea>

          <button
            className="btn btn-primary form-control w-50 m-2"
            id="submitContactButton"
            value="Submit"
          >
            Submit Your Review
          </button>
        </form>

        <div className="reviewsList">
          <br />

          <div>
            {
              
              this.state.reviewComments.reverse().map(function (CommentValues) {
                console.log("from mapping - CommentValues:", CommentValues);
                return (
                  <div className="card w-75" key={CommentValues[3]}>
                    <div className="card-header bg-primary text-white">
                      <div className="row reviewCommentHeader">
                        <div className="col-sm-6 reviewName">
                          {CommentValues[0]} <br />{" "}
                          <img
                            id="userProfileImage"
                            src="images/headshot.jpg"
                            alt={CommentValues[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-body reviewCommentBody text-black">
                      {CommentValues[1]}
                    </div>
                    <div className="card-footer reviewCommentFooter text-black">
                      {CommentValues[4]}
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}