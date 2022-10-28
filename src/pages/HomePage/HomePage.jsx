import NavBar from "../../components/NavBar/NavBar";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CommentsSection from "../../components/CommentsSection/CommentsSections";
import VideoList from "../../components/VideoList";
import React from "react";
import axios from "axios";

class HomePage extends React.Component {

  state = {
    videoListShort: [],
    currentVideoId: "",
    currentVideoInfo: [],
    didLoad: false,
    atHome: true,
  };

  async componentDidMount() {
    const dataShort = await axios.get("https://project-2-api.herokuapp.com/videos?api_key=2cb13bc9-a4d8-4499-95c4-fee987dd0974");
    let currentVideoId;
    currentVideoId = dataShort.data[0].id;


    const currentVideoInfo = await axios.get(`https://project-2-api.herokuapp.com/videos/${currentVideoId}/?api_key=2cb13bc9-a4d8-4499-95c4-fee987dd0974`);
    this.setState({ videoListShort: dataShort.data, currentVideoId: currentVideoId, currentVideoInfo: currentVideoInfo.data, didLoad: true });
  }

  componentDidUpdate = () => {
    if (this.props.pathId) {
      if (this.state.currentVideoId !== this.props.pathId.match.params.id) {
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.pathId.match.params.id}/?api_key=2cb13bc9-a4d8-4499-95c4-fee987dd0974`).then((respInfo) => { this.setState({ currentVideoId: this.props.pathId.match.params.id, currentVideoInfo: respInfo.data, atHome: false }) })
      }
    }
    else  {
      if(this.state.atHome === false){
      axios.get("https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=2cb13bc9-a4d8-4499-95c4-fee987dd0974").then((respData) => {this.setState({currentVideoId: respData.data.id, currentVideoInfo: respData.data, atHome: true});
    })}

    }
  }

  async getVideoLong(videoId) {
    const getVideoLong = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}/?api_key=2cb13bc9-a4d8-4499-95c4-fee987dd0974`);
    return getVideoLong;
  }

  render() {
    if (this.state.didLoad) {
      return (
        <>
          <section className="content">
            <CurrentVideo currentVideo={this.state.currentVideoInfo} />
            <section className="current-video-and-video-list">
              <CommentsSection currentVideoComments={this.state.currentVideoInfo.comments} />
              <VideoList currentVideo={this.state.currentVideoInfo} dataLong={this.state.videoListShort} />
            </section>
          </section>
        </>
      )
    } else {
      return (<></>)
    }

  }

}

export default HomePage;