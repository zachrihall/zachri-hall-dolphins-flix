import './SearchBar.scss';
import React from 'react';

function SearchBar(props) {


        return (
            <>
                <input className={props.className} type="search" placeholder={props.placeHolder}></input>
            </>

        );

}

export default SearchBar;