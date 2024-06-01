
import React from 'react'
import bn1 from "../../assets/img/banners/giay1.jpg";
import bn2 from "../../assets/img/banners/giay4.jpg";
const Banner = () => {
  return (
    <div class="banner_area mb-55" style={{ marginBottom:"-35px" }}>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <figure class="single_banner">
                    <div class="banner_thumb"> 
                        <a href="/"><img src={bn1}  style={{width:"780px", height:'200px'}}  alt=""/></a>
                    </div>
                </figure>
            </div>
            <div class="col-lg-6 col-md-6">
                <figure class="single_banner">
                    <div class="banner_thumb">
                        <a href="/"><img src={bn2} style={{width:"780px ", height:'200px'}} alt=""/></a>
                    </div>
                </figure>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner