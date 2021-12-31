import React from 'react'
import './Carousel.css'

function Carousel({carousel}){

  const { link, title, description } = carousel

    return(
    <div class="carousel-item">
      <img src={link} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  
    )
}

export default Carousel