import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://content.nike.com/content/dam/one-nike/en_us/season-2018-su/Basketball/0502_Kobe_AD_Refresh/DT/SU18_BBALL_CDP_DT_KOBE-AD_04XX_P1.jpg.transform/full-screen/SU18_BBALL_CDP_DT_KOBE-AD_04XX_P1.jpg"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://static01.nyt.com/images/2015/11/08/nyregion/08ALBUMss-slide-FHGJ/08ALBUMss-slide-FHGJ-superJumbo.jpg?quality=75&auto=webp&disable=upscale"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://panmacmillan.azureedge.net/pmk11/panmacmillan/files/media/panmacmillan/blog-images/young-adult/may-18/new-ya-authors.jpg?ext=.jpg"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Carousel;
