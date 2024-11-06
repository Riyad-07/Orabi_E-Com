import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Overlay = ({ litext, icon }) => {
  return (
    <li>
      <Link className="text-base font-DM text-[#767676] transition-all duration-300 hover:font-bold hover:text-primary flex justify-end gap-x-4 items-center">
        {litext} {icon}
      </Link>
    </li>
  );
};

const ProductCard = ({
  src,
  brand,
  price,
  title,
  buttontitle,
  className,
  mainClass,
}) => {
  return (
    <div className={`w-[370px] group ${mainClass}`}>
      <div className="img h-[370px] w-full relative">
        <img className="object-contain w-full" src={src} alt={src} />
        <div className="absolute bottom-0 left-0 w-full py-6 transition-all duration-300 bg-white opacity-0 px-7 group-hover:opacity-100">
          <ul className="flex flex-col gap-5">
            <Overlay litext="Add to Cart" icon={<FaHeart />} />
            <Overlay litext="Compare" icon={<HiOutlineRefresh />} />
            <Overlay litext="Add to Cart" icon={<IoCartSharp />} />
          </ul>
        </div>
        <div
          className={`absolute py-2 bg-primary left-5 top-5 w-[92px] text-center font-DM font-bold text-white cursor-pointer ${className}`}
        >
          {buttontitle}
        </div>
      </div>

      <div className="w-[350px] cursor-pointer text">
        <div className="flex justify-between pt-6">
          <h3 className="items-baseline text-xl font-bold font-DM">{title}</h3>
          <p className="text-base font-DM text-[#767676] leading-[30px]">
            $ {price}
          </p>
        </div>
        <p className="text-base font-DM text-[#767676] mt-4 leading-[30px]">
          {brand}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
