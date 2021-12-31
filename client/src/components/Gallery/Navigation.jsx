import React from 'react'

function Navigation({index}){

    return(

        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index+1} ></button>
    )
}

export default Navigation