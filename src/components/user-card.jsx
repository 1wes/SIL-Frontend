import React, { Fragment } from "react";

import './user-card.css';

import { BiPhotoAlbum } from "react-icons/bi";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";

const UserCard = ({name, noOfAlbums, albumsLink, buttonText}) => {
    
    return (
        <Fragment>
            <div className="user-card">
                <h4 className="name" >{ name }</h4>
                <ul className="list">
                    <li><i><BiPhotoAlbum/></i><span className="no-of-albums"> {noOfAlbums} Albums</span></li>
                </ul>
                <div className="centered-button">
                    <Link to={albumsLink} >
                        <Button style={{ textTransform: "Capitalize", marginBottom: "10px" }}                            
                            variant="outlined" size="small">     
                            {buttonText}
                        </Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default UserCard;