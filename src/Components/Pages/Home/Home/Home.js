import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeSearchBar from '../HomeSearchBar/HomeSearchBar';
import AddReviews from '../ReviewSection/AddReview/AddReviews';
import ShowReview from '../ReviewSection/ShowReview/ShowReview';
import HomeSlider from '../HomeSlider/HomeSlider';
import DemoHome from '../SomeDemoHome/DemoHome';
import CategoryCard from '../CategoryCard/CategoryCard';
import CategoryOne from '../CategoryCard/CategoryOne';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <DemoHome></DemoHome>
            <HomeSlider></HomeSlider>
            <HomeSearchBar ></HomeSearchBar>
            <HomeCard></HomeCard>
          
            {/* <CategoryCard></CategoryCard> */}
           <CategoryOne></CategoryOne>

           
            <ShowReview></ShowReview>
            <AddReviews></AddReviews>
        </div>
    );
};

export default Home;