import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

const topBrandsList = [
  {
    id: 1,
    title: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png",
  },
  {
    id: 2,
    title: "36 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png",
  },
  {
    id: 3,
    title: "40 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png",
  },
  {
    id: 4,
    title: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png",
  },
  {
    id: 5,
    title: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
  },
  {
    id: 6,
    title: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png",
  },
  {
    id: 7,
    title: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png",
  },
  {
    id: 8,
    title: "38 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1caa10bf3067695b7760cd83aaa38ee5_1549360511.png",
  },
  {
    id: 9,
    title: "37 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png",
  },
  {
    id: 10,
    title: "40 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top Brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover cur-po">
                <img
                  src={brand.cover}
                  className="top-brands-img"
                  alt={brand.title}
                />
                <div className="top-brands-text">{brand.title}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
