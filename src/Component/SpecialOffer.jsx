import React, { useEffect, useState } from "react";
import Container from "./Layer/Container";
import Heading from "./Layer/Heading";
import ProductCard from "./Layer/ProductCard";
// import o1 from "../../public/Special Offer/o1.png";
// import o2 from "../../public/Special Offer/o2.png";
// import o3 from "../../public/Special Offer/o3.png";
// import o4 from "../../public/Special Offer/o4.png";
import axios from "axios";

const SpecialOffer = () => {
  let [specialOffer, setSpecialOffer] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        setSpecialOffer(response.data.products);
      } catch (error) {
        console.error("data not found", error);
      }
    };
    getData();
  });

  return (
    <div className="lg:pt-[128px] md:pt-10 pt-5">
      <Container>
        <Heading title="Special Offer" />
        <div className="flex flex-wrap justify-center gap-2 mt-12 md:justify-between ">
          {specialOffer
            ? specialOffer.filter((_, offerProduct)=> offerProduct>=10 && offerProduct<14).map((item, index) => (
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
          {/* <ProductCard src={o1} title='Basic Crew Neck Tee' price='$44.00' buttontitle='New'/>
                <ProductCard src={o2} title='Basic Crew Neck Tee' price='$44.00' buttontitle='New'/>
                <ProductCard src={o3} title='Basic Crew Neck Tee' price='$44.00' buttontitle='New'/>
                <ProductCard src={o4} title='Basic Crew Neck Tee' price='$44.00' buttontitle='New'/> */}
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffer;
