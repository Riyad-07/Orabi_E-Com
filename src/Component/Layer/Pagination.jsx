import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";

// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

let Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            src={item.thumbnail}
            buttontitle="New"
            brand={item.brand}
          />
        ))}
    </>
  );
};

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        const data = await response.json();

        setItems(data.products);
      } catch (error){
        console.error("product not found", error);
      }
    };

    getData();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap gap-5">
        <Items currentItems={currentItems} />
      </div>

      <div className="flex items-baseline justify-between">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          previousClassName="page-item hidden"
          nextClassName="page-item hidden"
          pageClassName="page-item h-9 w-9 border border-[#D8D8D8]  text-second bg-[#F0F0F0]  "
          pageLinkClassName="page-link inline-block h-full w-full   flex justify-center items-center"
          containerClassName="pagination flex gap-2"
          activeClassName="active border-black !bg-black text-white"
        />
        <p className="text-sm font-DM leading-30 text-second">
          {`Products from ${itemOffset + 1} to ${
            endOffset > items.length ? items.length : endOffset
          } of ${items.length}`}
        </p>
      </div>
    </>
  );
};

export default Pagination;
