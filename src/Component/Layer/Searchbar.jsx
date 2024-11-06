import React, { useEffect, useState } from "react";
import Container from "./Container";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown, FaShoppingCart, FaUser } from "react-icons/fa";
import Li from "./Li";
import Megamenu from "./Megamenu";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Searchbar = () => {
  let [show, setShow] = useState(false);
  let [acc, setAcc] = useState(false);
  let [cart, setCart] = useState(false);
  let [search, setSearch] = useState("");
  let [filterData, setFilterData] = useState([]);
  let [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      //   setFilterData(data.products);
      setProduct(data.products);
    };
    getData();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilterData = "";
    } else {
      let searchData = product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(searchData);
    }
  }, [search, product]);

  let manageSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative">
      <Container className="flex items-center justify-between px-3 py-2 md:py-6 md:px-0">
        <div className="relative left">
          <div
            onClick={() => setAcc(!acc)}
            className="flex items-center cursor-pointer gap-x-2 text-primary"
          >
            <MdOutlineAlignHorizontalLeft className="text-4xl font-bold" />
            <p className="text-sm font-DM ">Shop by Category</p>
          </div>
          <ul
            className={`${
              acc ? "opacity-100 visible" : "opacity-0 invisible"
            } catagoryul absolute left-0 w-[263px] bg-primary top-full md:translate-y-5 z-10`}
          >
            <Li
              megamanu=""
              className="block px-5 py-4 text-sm hover:text-white hover:pl-8 font-DM"
              li="Accesories"
              to="/"
            >
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Phone
                </h2>
                <Megamenu menuli="Phone 01" />
                <Megamenu menuli="Phone 02" />
                <Megamenu menuli="Phone 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Camera
                </h2>
                <Megamenu menuli="Camera 01" />
                <Megamenu menuli="Camera 02" />
                <Megamenu menuli="Camera 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Computer
                </h2>
                <Megamenu menuli="Computer 01" />
                <Megamenu menuli="Computer 02" />
                <Megamenu menuli="Computer 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  IPhone
                </h2>
                <Megamenu menuli="IPhone 01" />
                <Megamenu menuli="IPhone 02" />
                <Megamenu menuli="IPhone 03" />
              </ul>
            </Li>
            <Li
              megamanu=""
              className="block px-5 py-4 text-sm hover:text-white hover:pl-8 font-DM"
              li="Furniture"
              to="/"
            >
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Phone
                </h2>
                <Megamenu menuli="Phone 01" />
                <Megamenu menuli="Phone 02" />
                <Megamenu menuli="Phone 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Camera
                </h2>
                <Megamenu menuli="Camera 01" />
                <Megamenu menuli="Camera 02" />
                <Megamenu menuli="Camera 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Computer
                </h2>
                <Megamenu menuli="Computer 01" />
                <Megamenu menuli="Computer 02" />
                <Megamenu menuli="Computer 03" />
              </ul>
            </Li>
            <Li
              megamanu=""
              className="block px-5 py-4 text-sm hover:text-white hover:pl-8 font-DM"
              li="Electronics"
              to="/"
            >
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Phone
                </h2>
                <Megamenu menuli="Phone 01" />
                <Megamenu menuli="Phone 02" />
                <Megamenu menuli="Phone 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Camera
                </h2>
                <Megamenu menuli="Camera 01" />
                <Megamenu menuli="Camera 02" />
                <Megamenu menuli="Camera 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Computer
                </h2>
                <Megamenu menuli="Computer 01" />
                <Megamenu menuli="Computer 02" />
                <Megamenu menuli="Computer 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  IPhone
                </h2>
                <Megamenu menuli="IPhone 01" />
                <Megamenu menuli="IPhone 02" />
                <Megamenu menuli="IPhone 03" />
              </ul>
            </Li>
            <Li
              megamanu=""
              className="block px-5 py-4 text-sm hover:text-white hover:pl-8 font-DM"
              li="Clothes"
              to="/"
            >
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Phone
                </h2>
                <Megamenu menuli="Phone 01" />
                <Megamenu menuli="Phone 02" />
                <Megamenu menuli="Phone 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Camera
                </h2>
                <Megamenu menuli="Camera 01" />
                <Megamenu menuli="Camera 02" />
                <Megamenu menuli="Camera 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Computer
                </h2>
                <Megamenu menuli="Computer 01" />
                <Megamenu menuli="Computer 02" />
                <Megamenu menuli="Computer 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  IPhone
                </h2>
                <Megamenu menuli="IPhone 01" />
                <Megamenu menuli="IPhone 02" />
                <Megamenu menuli="IPhone 03" />
              </ul>
            </Li>
            <Li
              megamanu=""
              className="block px-5 py-4 text-sm hover:text-white hover:pl-8 font-DM"
              li="Bags"
              to="/"
            >
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Phone
                </h2>
                <Megamenu menuli="Phone 01" />
                <Megamenu menuli="Phone 02" />
                <Megamenu menuli="Phone 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Camera
                </h2>
                <Megamenu menuli="Camera 01" />
                <Megamenu menuli="Camera 02" />
                <Megamenu menuli="Camera 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  Computer
                </h2>
                <Megamenu menuli="Computer 01" />
                <Megamenu menuli="Computer 02" />
                <Megamenu menuli="Computer 03" />
              </ul>
              <ul>
                <h2 className="mb-5 text-base font-bold text-primary font-DM">
                  IPhone
                </h2>
                <Megamenu menuli="IPhone 01" />
                <Megamenu menuli="IPhone 02" />
                <Megamenu menuli="IPhone 03" />
              </ul>
            </Li>
            <Li
              megamanu="hidden !px-0 !py-0"
              className="block px-5 py-4 text-sm hover:text-white hover:pl-8 font-DM"
              li="Home appliances"
              to="/"
            ></Li>
          </ul>
        </div>

        {/* ================================> Search bar <======================================== */}

        <div className="relative w-full lg:w-auto">
          <input
            onChange={manageSearch}
            value={search}
            className="border-none py-2 px-4 md:py-5 outline-none w-full lg:w-[601px] placeholder:text-[#C4C4C4]"
            type="text"
            placeholder="Search Products"
          />
          <IoSearchSharp className="absolute -translate-y-1/2 top-1/2 right-4" />
        </div>

        <div className="hidden cursor-pointer md:flex md:gap-x-10 text-primary">
          <div className="relative account">
            <div onClick={() => setShow(!show)} className="flex gap-x-2 one">
              <FaUser />
              <FaCaretDown />
            </div>
            <div
              className={`${
                show ? "opacity-100 visible" : "opacity-0 invisible"
              } absolute right-0 mt-5 top-full z-10`}
            >
              <Link to="/log-in">
                <p className="py-4 text-sm font-bold text-center hover:text-primary hover:bg-white text-white font-DM bg-primary w-[200px] transition-all duration-500">
                  My Account
                </p>
              </Link>
              <p className="text-white py-4 text-center hover:text-primary hover:bg-white font-DM w-[200px] bg-primary transition-all duration-500">
                Log Out
              </p>
            </div>
          </div>

          <div className="relative">
            <div onClick={() => setCart(!cart)} className="one">
              <FaShoppingCart />
            </div>
            <div
              className={`${
                cart ? "opacity-100 visible" : "opacity-0 invisible"
              } maincart w-[360px] bg-[#4a8885] absolute top-full p-4 right-0 mt-5 z-10 `}
            >
              <div className="flex items-center justify-between top">
                <div className="w-20 h-20 bg-gray-400 img">
                  <Link to="/">
                    <img
                      className="object-cover w-full h-full"
                      src=""
                      alt="image"
                    />
                  </Link>
                </div>
                <div className="text-sm font-bold center font-DM text-primary">
                  <p>Black Smart Watch</p>
                  <span>$44.00</span>
                </div>
                <div onClick={() => setCart(false)} className="icon">
                  X
                </div>
              </div>

              <p className="text-base leading-6 font-DM text-[#767676] my-7">
                Subtotal: <span className="text-primary"> $44.00</span>
              </p>

              <div className="flex justify-between w-full text-sm font-bold text-center bottom font-DM">
                <div className="transition-all duration-500 border border-primary w-[148px] bg-white text-primary py-4 hover:bg-primary hover:text-white">
                  View Cart
                </div>
                <div className="transition-all duration-500 border border-primary w-[148px] bg-white text-primary py-4 hover:bg-primary hover:text-white">
                  Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute left-0 z-10 grid w-full gap-5 bg-gray-700 top-full md:grid-cols-3 lg:grid-cols-4">
        {setFilterData?.length > 0 ? (
          filterData.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              price={item.price}
              src={item.thumbnail}
              buttontitle="New"
              brand={item.brand}
            />
          ))
        ) : (

            <p className="text-2xl font-bold text-center text-red-500 font-DM ">Product not found</p>
        )
          }
      </div>
    </div>
  );
};

export default Searchbar;
