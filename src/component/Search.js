import React from 'react';
import Button from 'react-bootstrap/Button';

function Search() {
    return (
        <div className='container'>
            <div className='d-flex my-5'>
                <input placeholder='Type Name'></input>
                <Button  variant="primary">Search</Button>
            </div>
        </div>
    )
}

export default Search