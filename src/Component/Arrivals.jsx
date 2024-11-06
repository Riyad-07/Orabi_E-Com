import React, { useEffect, useState } from "react";
import Container from "./Layer/Container";
import Heading from "./Layer/Heading";
import ProductCard from "./Layer/ProductCard";
import p1 from "../../public/New Arrival/p1.jpg";
import p2 from "../../public/New Arrival/p2.jpg";
import p3 from "../../public/New Arrival/p3.jpg";
import p4 from "../../public/New Arrival/p4.jpg";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-16 h-16 rounded-full bg-[#979797] text-white flex justify-center items-center absolute right-5 top-[153px]"
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-16 h-16 rounded-full bg-[#979797] text-white flex justify-center items-center absolute left-5 top-[153px] z-10"
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
}



const Arrivals = () => {
  let [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setAllProducts(response.data.products);
    };
    getData();
  }, []);


  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container className="lg:pt-[174px] md:pt-12 pt-5">
        <Heading title="New Arrivals" />
      </Container>

      <div className="md:mt-12 mt-4 max-w-[1640px] mx-auto  ">
        <Slider {...settings}>
          {allProducts.map((item, index) => (
            <ProductCard key={index}
            mainClass="mx-auto"
            title={item.title}
            buttontitle="10%"
            src={item.thumbnail}
            price={item.price}
            brand={item.brand}
          />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Arrivals;
