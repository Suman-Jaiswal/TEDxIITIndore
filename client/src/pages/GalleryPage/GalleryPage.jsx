import React from 'react'
import Carousel from "../../components/Gallery/Carousel"
import Gallery from "../../components/Gallery/Gallery"
import Navigation from "../../components/Gallery/Navigation"
import { useState, useEffect } from 'react'
import data from '../../data/data.json'

export default function GalleryPage() {

  const [carousel, setCarousel] = useState([])
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    setCarousel(data.carousel)
  }, [])

  useEffect(() => {
    setGallery(data.gallery)
  }, [])


  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
          {
            carousel.map((carousel, index) => <Navigation index={index} />)
          }
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/bg.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>TEDx IIT Indore</h1>
              <p>x= independently organized TED event</p>
            </div>
          </div>
          {
            carousel.map(carousel => <Carousel carousel={carousel} />)
          }
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="gallery">
        <h1>Gallery</h1>
        <div class="images">
          
          {
            gallery.map(gallery => <Gallery gallery={gallery} />)
          }

        </div>
      </div>
    </div>
  )
}
