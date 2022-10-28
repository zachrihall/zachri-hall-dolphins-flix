import "./VideoList.scss";
import { v4 as uid } from "uuid";
import { Link } from 'react-router-dom';

function VideoList(props) {
  return (<section className="video-list">
    <h2 className="video-list__next-videos">Next Videos</h2>
    {props.dataLong.map((video) => {
      {
        if (video.id != props.currentVideo.id) {
          return (
              <Link key={uid()} className="video-list__link" to={`/home/${video.id}`}>
                <div className="video-list__video-container">
                  <img
                    className="video-list__video-container-image"
                    src={video.image}
                  >
                  </img>
                  <div className="video-list__video-container-video-text">
                    <p className="video-list__video-container-video-text--title">
                      {video.title}
                    </p>
                    <p className="video-list__video-container-video-text--channel">
                      {video.channel}
                    </p>
                  </div>
                </div>
              </Link>

          );
        }
      }
    })}</section>
  )
}

export default VideoList;
