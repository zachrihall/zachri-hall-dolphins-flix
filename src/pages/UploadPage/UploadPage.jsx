import React from "react";
import uploadPic from "../../assets/images/Upload-video-preview.jpg"
import './UploadPage.scss';
import { Link } from 'react-router-dom';

class UploadPage extends React.Component {
    render() {
        return (
            <>
                <div className="upload">
                    <h1 className="upload__content-upload-title">Upload Video</h1>
                    <hr></hr>


                    <div className="upload__content">
                        <div className="upload__content-upload-image-container">
                            <h2 className="upload__content-upload-image-container-title">VIDEO THUMBNAIL</h2>
                            <img className="upload__content-upload-image-container-image" src={uploadPic} alt="upload-video-preview-holder"></img>
                        </div>
                        <div className="upload__content-upload-input-container">
                            <form className="upload__content-upload-input-container-form">
                                <div className="upload__content-upload-input-container-form-container upload__content-upload-input-container-form-container--title">
                                    <label className="upload__content-upload-input-container-form-container-title-label" htmlFor="upload-title">TITLE YOUR VIDEO</label>
                                    <input name="upload-title" className="upload__content-upload-input-container-form-container-title-title" placeholder="Title your video"></input>
                                </div>
                                <div className="upload__content-upload-input-container-form-container upload__content-upload-input-container-form-container--description">
                                    <label className="upload__content-upload-input-container-form-container-description-label" htmlFor="upload-title">ADD A DESCRIPTION TO YOUR VIDEO</label>
                                    <textarea name="upload-title" className="upload__content-upload-input-container-form-container-description-text" placeholder="Add a description to your video"></textarea>
                                </div>
                                <div className="upload__content-upload-input-container-form-buttons">
                                    <Link to={"/home"} onClick={() => {alert("You uploaded a video!")}} className="upload__content-upload-input-container-form-buttons-upload-wrapper" ><button type="submit" className="upload__content-upload-input-container-form-buttons-upload">Publish</button></Link>
                                    <h3 className="upload__content-upload-input-container-form-buttons-cancel">Cancel</h3>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default UploadPage;