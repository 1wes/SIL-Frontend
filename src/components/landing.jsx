import React from 'react';
import './landing.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import albumImage from '../assets/album.jpg';

import { Button } from '@mui/material';

const LandingPage = () => {
    
    return (
        <Fragment>
            <main className='main-landing-page'>
                <section className='hero-punchline'>
                    <h1 className='punchline'>
                        Need Your Photos and Your Friend&apos;s In One Place?.
                    </h1>
                    <p className='tagline'>
                        Our Application sorts that out for you. View all photos arranged per album, per user.
                    </p>
                    
                    <Link to={`/login`}>
                        <Button variant='contained' id='log-in-btn'> Check Out Photos </Button>
                    </Link>
                </section>
                <section className='hero-image'>
                    <img src={albumImage} alt='album-image'/>
                </section>
            </main>
        </Fragment>
    )
}
export default LandingPage