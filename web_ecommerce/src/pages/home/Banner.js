
import React from 'react'
import bn1 from "../../assets/img/banners/giay1.jpg";
import bn2 from "../../assets/img/banners/giay4.jpg";
const Banner = () => {
  return (
    <div className="banner_area mb-55" style={{ marginBottom:"-35px" }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <figure className="single_banner">
                    <div className="banner_thumb"> 
                        <a href="/"><img src={bn1}  style={{width:"780px", height:'200px'}}  alt=""/></a>
                    </div>
                </figure>
            </div>
            <div className="col-lg-6 col-md-6">
                <figure className="single_banner">
                    <div className="banner_thumb">
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