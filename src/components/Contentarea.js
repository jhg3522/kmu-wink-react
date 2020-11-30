import React from 'react';
import './Contentarea.css'

const Contentarea = (props) => {
    return <textarea className='Contentarea' placeholder={props.placeholder}/>
};

export default Contentarea;