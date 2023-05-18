import './NavBar.scss';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import logo from './../../assets/logo/BrainFlix-logo.svg'
import profilePic from './../../assets/images/Mohan-muruge.jpg'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <section className="navbar">
            <Link to={"/home"}><img className="navbar__logo" src={logo} alt="DolphinFlix Logo" /></Link>
            <div className='navbar__search-container'>
                <form className='navbar__search-container-form'>
                    <button className='navbar__search-container-form-submit' type='submit'>Search</button>
                    <SearchBar className='navbar__search-container-form-input' placeHolder='Search' />
                </form>
                <img className='navbar__search-container-profile-picture' src={profilePic} alt="profile picture" />
            </div>
            <Link className="navbar__upload-wrapper" to={"/upload-page"}><button className='navbar__upload'>UPLOAD</button></Link>
            <img className='navbar__search-container-profile-picture navbar__search-container-profile-picture--tablet' src={profilePic} alt="profile picture" />
        </section>
    );
}

export default NavBar;