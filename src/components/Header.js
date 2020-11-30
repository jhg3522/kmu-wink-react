import React from 'react';
import './Header.css'
import img_vector from '../image/Vector.png'

function Header(props) {
    return <div className='Header'>
                <img className="Vector_img" src={img_vector}/>
                <text className='Header_Text'>
                    {props.name}
                </text>
            </div>
}
export default Header;