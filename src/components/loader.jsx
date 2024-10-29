import React, { Fragment } from 'react';

import './loader.css';

import { ClipLoader } from 'react-spinners';

const Loader = ({ info }) => {    
    
    return (
        <Fragment>
            <main className='loader'>
                <div>
                    <ClipLoader color='white' size={80} />                    
                </div>
                <div className='loader-text'>
                    fetching {info}
                </div>
            </main>
        </Fragment>
    )
}
export default Loader;