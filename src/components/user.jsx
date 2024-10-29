import React, { Fragment, useState, useEffect } from 'react';

import './user.css';

import useAuthRedirection from '../hooks/useAuthRedirection';
import PageHeader from './page-header';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useSWR from 'swr';

import axios from '../utils/axios';

import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import { Button } from '@mui/material';

import Loader from './loader';

const fetcher = url=>axios.get(url).then(response => response.data);

const User = () => {
    
    useAuthRedirection();

    const [user, setUser] = useState();

    const userId = useParams();

    const { isLoading, data: userDetails } = useSWR(`https://jsonplaceholder.typicode.com/users/${userId.id}`, fetcher);
    
    useEffect(() => {
        
        if (userDetails) {
            setUser(userDetails);
        }
    }, [userDetails]);

    return (
        <Fragment>
            <main className='user'>
                <PageHeader header={user ? user.name : ""} />
                {user && <div className='user-info'>
                    <div className='info'>
                        <i>
                            <FaRegUser />
                        </i>
                        <span>
                            {user ? user.username : ""}
                        </span>
                    </div>
                    <div className='info'>
                        <i>
                            <MdAlternateEmail />
                        </i>
                        <span>
                            {user ? user.email : ""}
                        </span>
                    </div>
                </div>}
                <PageHeader header={`Albums`} />
                {
                    isLoading ? <Loader info={`user albums`} /> :
                        <div className='user-albums'>                             
                            <UserAlbums userId={userId} />                            
                        </div>
                    
                }
            </main>
        </Fragment>
    )
}

const UserAlbums = ({userId}) => {
    
    const { isLoading, data: albums } = useSWR(`https://jsonplaceholder.typicode.com/users/${userId.id}/albums`, fetcher);

    const albumsList = albums?.map((album) => {        
        
        return (
            <>
                {
                    isLoading ? <Loader info={`album info`} /> :                        
                        <AlbumCard key={album.id} title={album.title} buttonText={`View Album`} albumLink={`/users/${userId.id}/albums/${album.id}`} />                    
                }
            </>
        )
    })

    return (
        
        <Fragment>
            <ul className='albums-list'>
                {albumsList}
            </ul>
        </Fragment>
    )
}

const AlbumCard = ({title, albumLink, buttonText}) => {
    
    return (
        <Fragment>
            <div className="user-card">
                <h4 className="name" >{ title }</h4>
                <div className="centered-button">
                    <Link to={albumLink} >
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

export default User;