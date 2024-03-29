

function Comment(props) {

  let newDate = new Date(parseInt(props.timestamp)).toLocaleString();
  let currentDate = new Date().toLocaleString();

  if (props.name === "Guest User") {
    return (
      <>
        <div className="reviews__comments-container">
          <div className="reviews__comments-container-user-picture-container"></div>
          <div className="reviews__comments-container-info-container">
            <div className="reviews__comments-container-info-container-div">
              <p className="reviews__comments-container-info-container-div-text reviews__comments-container-info-container-div-text--user-name">
                {props.name}
              </p>
              <p className="reviews__comments-container-info-container-div-text reviews__comments-container-info-container-div-text--when">
                {currentDate}
              </p>
            </div>
            <p className="reviews__comments-container-info-container-comment">
              {props.comment}
            </p>
          </div>
        </div>
        <hr></hr>
      </>
    )
  }
  else {
    return (
      <>
        <div className="reviews__comments-container">
          <div className="reviews__comments-container-user-picture-container"></div>
          <div className="reviews__comments-container-info-container">
            <div className="reviews__comments-container-info-container-div">
              <p className="reviews__comments-container-info-container-div-text reviews__comments-container-info-container-div-text--user-name">
                {props.name}
              </p>
              <p className="reviews__comments-container-info-container-div-text reviews__comments-container-info-container-div-text--when">
                {newDate}
              </p>
            </div>
            <p className="reviews__comments-container-info-container-comment">
              {props.comment}
            </p>
          </div>
        </div>
        <hr></hr>
      </>
    )
  }
}

export default Comment;