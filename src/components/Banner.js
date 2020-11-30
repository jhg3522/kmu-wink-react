import React from 'react';
import './Banner.css'
import banner_img from '../image/banner.png'

function Banner(props){
    return <div className='Banner'>
                <img className="Banner_img" src={banner_img} alt=" "/>
                <text className='Banner-text1'>
                    {props.text1}
                </text>
                <text className='Banner-text2'>
                    {props.text2}
                </text>
    </div>
}

export default Banner
