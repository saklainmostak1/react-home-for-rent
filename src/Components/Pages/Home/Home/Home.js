import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeSearchBar from '../HomeSearchBar/HomeSearchBar';
import AddReviews from '../ReviewSection/AddReview/AddReviews';
import ShowReview from '../ReviewSection/ShowReview/ShowReview';
import HomeSlider from '../HomeSlider/HomeSlider';
import DemoHome from '../SomeDemoHome/DemoHome';
import Category from '../Category/Category';
import AllCateGories from '../Categories/AllCateGories';

import CategoriesCard from '../Categories/CategoriesCard';
import HomeSliderTwo from '../HomeSliderTwo/HomeSliderTwo';
import WhatWeSay from '../WhatWeSay/WhatWeSay';




const Home = () => {
    return (
        <div>
   

            <HomeBanner></HomeBanner>
            <DemoHome></DemoHome>
            <HomeSlider></HomeSlider>
            <HomeSearchBar ></HomeSearchBar>
            <Category></Category>
            <HomeCard></HomeCard>
            <HomeSliderTwo></HomeSliderTwo>
            <WhatWeSay></WhatWeSay>
            
            <ShowReview></ShowReview>
            <AddReviews></AddReviews>
        
        </div>
    );
};

export default Home;