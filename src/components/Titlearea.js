import React from 'react';
import './Titlearea.css'

const Titlearea = (props) => {
    return <textarea className='Titlearea' placeholder={props.placeholder}/>
};

export default Titlearea;