import React from "react";
import "./CommentsSection.scss";
import { v4 as uid } from "uuid";
import Comment from "../Comment/Comment";
import profilePic from '../../assets/images/Mohan-muruge.jpg'


class CommentsSection extends React.Component {
  state = {
    comments: this.props.currentVideoComments,
    commentsCount: 3
  };

  onSubmitHandler = (event) => {
    event.preventDefault();


    let newComment = {
      name: "userNamePlaceHolder",
      comment: event.target.textarea.value,
      timestamp: 12345678890
    };

    this.setState(
      {comments: [...this.state.comments, newComment],
        commentsCount: this.state.commentsCount + 1
    });
  };

  componentDidUpdate(_prevProps, prevState){
    if(prevState === this.state){

      this.setState(
        {comments: this.props.currentVideoComments,
        commentsCount: this.props.currentVideoComments.length}
      );

    }
  }
  


  render() {
    return (
      <>

        <section className="reviews">
          <h2 className="reviews__comments-count">{this.state.commentsCount} Comments</h2>
          <div className="reviews__content">
            <div className="reviews__write-comment">
              <img className="reviews__write-comment-user-picture" src={profilePic}></img>
              <div className="reviews__write-comment-container">
                <form
                  onSubmit={this.onSubmitHandler}
                  className="reviews__write-comment-container-form"
                >

                  <div className="reviews__write-comment-div-input-container reviews__write-comment-div-input-container--comment">
                    <label
                      className="reviews__write-comment-container-form-div-label reviews__write-comment-container-form-div-label--title"
                      htmlFor="textarea"
                      value="Enter your name"
                    >
                      JOIN THE CONVERSATION
                    </label>
                    <textarea
                      className="reviews__write-comment-container-form-div-input reviews__write-comment-container-form-div-label-input--textarea"
                      name="textarea"
                      placeholder="Add a new comment"
                    ></textarea>
                  </div>
                  <button className="reviews__write-comment-container-form-submit">
                    COMMENT
                  </button>
                </form>
              </div>
            </div>

            <hr></hr>
            <div className="reviews__comments">
              {this.state.comments.map((comment) => (
                <Comment
                  key={uid()}
                  name={comment.name}
                  comment={comment.comment}
                  timestamp={comment.timestamp}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CommentsSection;
