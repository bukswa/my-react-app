import React, { useEffect, useState } from "react";

const MAX_WINDOW_SIZE = 20;

const ChatWindow = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setData((data) => {
      const newData =
        data.length > MAX_WINDOW_SIZE ? data.slice(1, 20) : [...data];

      return [...newData, Math.ceil(Math.random() * 10)];
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      fetchData();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div
      style={{
        width: "400px",
        border: "1px solid #ccc",
        height: "515px",
        marginLeft: "10px",
        overflow: "hidden auto",
      }}
    >
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: "400px",
              border: "1px solid #ccc",
              minHeight: "20px",
              padding: "10px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ChatWindow;
