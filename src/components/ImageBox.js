import React from 'react'
import './ImageBox.css'
import add_img from '../image/img_add.png'
import food_img from '../image/food.png'
const ImageBox = () =>{
    return <div className="imagebox-wrap">
        <img className='img-wrap' src={add_img}/>
        <img className='img-wrap' src={food_img}/>
        <img className='img-wrap' src={food_img}/>
    </div>
}

export default ImageBox