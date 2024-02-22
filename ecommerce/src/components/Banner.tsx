"use client"
import { useEffect, useRef } from 'react';
import { urlFor } from "@/lib/sanityClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BannerProps {
  banners: {
    image: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ banners }) => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next slide
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000); // Change slide after 5 seconds

    return () => clearInterval(timer);
  }, []); // Run only once on component mount

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000, // Set autoplay speed
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {banners?.map((item, index) => (
          <div key={index}>
            <a href="/shop">
              <img
                src={urlFor(item.image).url()}
                alt={`Banner ${index + 1}`}
                className="w-full max-h-[650px] object-cover"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
