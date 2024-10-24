import React, { useEffect, useState } from "react";

const data = [
  "https://cdn.smartslider3.com/wp-content/uploads/2019/05/sliderimages-840x441.png",
  "https://cdn.smartslider3.com/wp-content/uploads/2018/04/simpleimageslider-840x441.png",
  "https://cdn.smartslider3.com/wp-content/uploads/2019/02/videoslider-1-840x441.png",
  "https://cdn.smartslider3.com/wp-content/uploads/2020/07/verticalslider-840x441.png",
  "https://cdn.smartslider3.com/wp-content/uploads/2017/11/contentslider-840x441.png",
];

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      clickRight();
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const clickLeft = () => {
    if (active > 0) {
      setActive(active - 1);
    }
    if (active === 0) {
      setActive(data.length - 1);
    }
  };

  const clickRight = () => {
    if (active < data.length - 1) {
      setActive(active + 1);
    }
    if (active === data.length - 1) {
      setActive(0);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "50px",
      }}
    >
      <h3>ImageSlider</h3>
      {/* slider container */}
      <div
        style={{
          height: "480px",
          display: "flex",
          width: "880px",
          overflow: "hidden",
          border: "1px solid #ccc",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            flex: 1,
            width: "100%",
            paddingTop: "30%",
          }}
        >
          <button
            onClick={clickLeft}
            style={{ fontSize: "40px", border: "none", cursor: "pointer" }}
          >
            {"<"}
          </button>
          <button
            onClick={clickRight}
            style={{ fontSize: "40px", border: "none", cursor: "pointer" }}
          >
            {">"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <img src={data[active]} key={data[active]} alt="slider" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
