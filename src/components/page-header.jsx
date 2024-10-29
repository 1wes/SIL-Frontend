import React, { Fragment } from 'react';

import './page-header.css'

const PageHeader = ({header}) => {
    
    return (
        <Fragment>
            <h1 className='page-header'> 
                {header}
            </h1>
        </Fragment>
    )
}

export default PageHeader;