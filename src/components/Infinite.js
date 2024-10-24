import React, { useEffect, useState } from "react";

const Infinite = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const result = await response.json();

    setItems((items) => [...items, ...result.results]);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Infinite scroll</h2>
      <div
        style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "5px 20px",
          width: "150px",
        }}
      >
        {items.map((item) => {
          return (
            <div
              style={{
                border: "1px solid #000",
                padding: "30px",
                margin: "2px",
              }}
            >
              <a href={item.url}>{item.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Infinite;
