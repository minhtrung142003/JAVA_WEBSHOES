
import React from 'react'

import NewArrivals from '../pages/home/NewArrivals'
import Shipping from '../pages/home/Shipping'
import New from '../pages/home/New'
import Deals from '../pages/home/deal/Deals'
import Banner from '../pages/home/Banner'
import CustomSlider from '../pages/home/slider/Slider'
import Phukien from '../pages/home/Phukien'

const Home = () => {
    return (
        <div className="container">
            <CustomSlider/>
            <div >
                <Shipping/>
                <NewArrivals />

                <Banner/>
                <div>
                    <Deals/>
                </div>
                <New  />
                <Phukien />
            </div>
          
        </div>
    )
}

export default Home