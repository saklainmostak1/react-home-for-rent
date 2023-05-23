import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeSearchBar from '../HomeSearchBar/HomeSearchBar';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeSearchBar ></HomeSearchBar>
            <HomeCard></HomeCard>
        </div>
    );
};

export default Home;