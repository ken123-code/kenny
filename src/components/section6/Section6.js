import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./section6.css";
import logo1 from "./img/sach1.jpg";
import logo2 from "./img/sach2.jpg";
import logo3 from "./img/sach3.jpg";
import logo4 from "./img/sach4.png";
import logo5 from "./img/sach5.png";
import logo6 from "./img/sach6.jpg";
import logo7 from "./img/sach7.jpg";

import Link from "@mui/material/Link";

function Section6() {
  const [list, setList] = useState([
    { id: 1, name: "Logo 1", src: logo1 },
    { id: 2, name: "Logo 2", src: logo2 },
    { id: 3, name: "Logo 3", src: logo3 },
    { id: 4, name: "Logo 4", src: logo4 },
    { id: 5, name: "Logo 5", src: logo5 },
    { id: 6, name: "Logo 6", src: logo6 },
    { id: 7, name: "Logo 7", src: logo7 },
  ]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500, // Adjust speed for smoother transitions
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {list.map((item) => (
          <div key={item.id} className="slider-item">
            <Link href="#" underline="none" className="img-link">
              <img src={item.src} alt={item.name} className="slider-img" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Section6;
