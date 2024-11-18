import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";

const LIMIT = 10;

const PaginationCopy = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const result = await response.json();

    setData(result.products);
    setLoading(false);
    setNoOfPages(Math.ceil(result.total / LIMIT));
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [currentPage]);

  return (
    <div>
      <h3>Pagination</h3>
      <div>
        {/* <h3>{noOfPages}</h3> */}
        <div>
          <button
            onClick={() => {
              if (currentPage > 0) {
                setCurrentPage((currentPage) => currentPage - 1);
              }
            }}
          >
            prev
          </button>

          {[...Array(noOfPages).keys()].map((item) => {
            return (
              <button
                style={{ background: currentPage === item && "gray" }}
                onClick={(e) => {
                  console.log(e.isPropagationStopped());
                  console.log(e.isPropagationStopped());
                  setCurrentPage(item);
                }}
              >
                {item + 1}
              </button>
            );
          })}
          <button
            onClick={() => {
              if (currentPage < noOfPages - 1) {
                setCurrentPage((currentPage) => currentPage + 1);
              }
            }}
          >
            next
          </button>
        </div>
        {loading
          ? "Loading..."
          : data.map((datum) => {
              return (
                <div style={{ border: "1px solid #ccc", padding: "20px" }}>
                  <h3>{datum.title}</h3>
                  <h3>{datum.price}</h3>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default renderToString(PaginationCopy);
