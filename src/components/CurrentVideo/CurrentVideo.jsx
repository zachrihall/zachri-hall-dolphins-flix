import React from "react";
import './CurrentVideo.scss';
import eye from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import axios from "axios";




class CurrentVideo extends React.Component {

  state = {
    videoUrl: ''
  }

  async componentDidMount() {
    const videoUrlRes = await axios.get(this.props.currentVideo.video, { params: { 'api_key': '2cb13bc9-a4d8-4499-95c4-fee987dd0974' } });
    console.log(videoUrlRes);
    this.setState({
      videoUrl: videoUrlRes
    });

  }


  render() {
    let newDate = new Date(parseInt(this.props.currentVideo.timestamp)).toLocaleString();

    return (
      <section className="current-video">
        <video className="current-video__video" width="100%" height="400px" poster={this.props.currentVideo.image}
          controls>
          <source src=""></source>
        </video>

        {/* <iframe width="420" height="315" frameBorder="0" 
          src="www.youtube.com/embed/watch?v=2szVzrfmjyA"> </iframe> */}

        {/* <iframe className="current-video__video" src="https://www.youtube.com/embed/R7Q9qAfOFk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        {/* <iframe className="current-video__video" src={this.props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}




        <div className="current-video__title-container">
          <h1 className="current-video__title-container-title">{this.props.currentVideo.title}</h1>
        </div>
        <hr className="current-video__hr--below-title"></hr>

        <div className="current-video__video-info">
          <div className="current-video__video-info-channel-date-container">
            <h3 className="current-video__video-info-channel-date-container--channel">By {this.props.currentVideo.channel}</h3>
            <h3 className="current-video__video-info-channel-date-container--date">{newDate}</h3>
          </div>

          <div className="current-video__video-info-views-likes-container">


            <div className="current-video__video-info-views-likes-container-views-container">
              <img className="current-video__video-info-views-likes-container-views-container-icon" src={eye} />
              <h3 className="current-video__video-info-views-likes-container-views-container-views">{this.props.currentVideo.views}</h3>
            </div>

            <div className="current-video__video-info-views-likes-container-likes-container">
              <img className="current-video__video-info-views-likes-container-likes-container-icon" src={likes} />
              <h3 className="current-video__video-info-views-likes-container-likes-container-likes">{this.props.currentVideo.likes}</h3>

            </div>


          </div>
        </div>
        <hr className="current-video__hr--below-info"></hr>
        <p className="current-video__description">{this.props.currentVideo.description}</p>
      </section>
    )
  }
}

export default CurrentVideo;