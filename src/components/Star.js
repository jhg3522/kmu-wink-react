import React from 'react'
import './Star.css'
import star from '../image/star.png'
import empty_star from '../image/empty_star.png'

const Star = () =>{
    return <div className="star-wrap">
        <img className="star" src={star}/>
        <img className="star" src={star}/>
        <img className="star" src={star}/>
        <img className="star" src={star}/>
        <img className="star" src={empty_star}/>
    </div>
}

export default Star