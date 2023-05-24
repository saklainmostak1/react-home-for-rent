import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeSearchBar from '../HomeSearchBar/HomeSearchBar';
import AddReviews from '../ReviewSection/AddReview/AddReviews';
import ShowReview from '../ReviewSection/ShowReview/ShowReview';
import HomeSlider from '../HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeSearchBar ></HomeSearchBar>
            <HomeSlider></HomeSlider>
            <HomeCard></HomeCard>
            <ShowReview></ShowReview>
            <AddReviews></AddReviews>
        </div>
    );
};

export default Home;