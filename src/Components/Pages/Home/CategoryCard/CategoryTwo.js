import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import img from '../../../img/download.jpg'

const CategoryTwo = ({categorie}) => {

    

    return (
      <div>
        <h1>{categorie.length}</h1>
      </div>
    );
};

export default CategoryTwo;