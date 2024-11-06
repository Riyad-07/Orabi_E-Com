import React, { useEffect, useState } from "react";
import Heading from "./Layer/Heading";
import Container from "./Layer/Container";
import ProductCard from "./Layer/ProductCard";
// import b1 from "../../public/Best Selling/b1.png";
// import b2 from "../../public/Best Selling/b2.png";
// import b3 from "../../public/Best Selling/b3.png";
// import b4 from "../../public/Best Selling/b4.png";
import axios from "axios";

const Bestselling = () => {
    let [newBestSelling, setNewBestSelling] = useState([]);
  useEffect(() => {

    const getData = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        setNewBestSelling(response.data.products);
      } catch (error) {
        console.error("data not found", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="lg:pt-[174px] md:pt-12 pt-5">
      <Container>
        <Heading title="Best Selling" />
        <div className="flex flex-wrap justify-center gap-2 mt-12 md:justify-between ">
          {newBestSelling
            ? newBestSelling.filter((_,limitedProduct)=> limitedProduct >= 0 && limitedProduct < 4 ).map((item, index) => (
                <ProductCard
                  key={index}
                  mainClass="mx-auto"
                  title={item.title}
                  buttontitle="10%"
                  src={item.thumbnail}
                  price={item.price}
                  brand={item.brand}
                />
              ))
            : ""}
        </div>
      </Container>
    </div>
  );
};

export default Bestselling;
