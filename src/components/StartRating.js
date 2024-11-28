import { useState } from "react";
const StarRating = () => {
  const [selectedStarts, setSelectedStars] = useState(0);
  const handleSelectedStars = (item) => {
    setSelectedStars(item);
  };
  return (
    <>
      <h3>I am second Component</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {[...Array(5).keys()].fill(1, 5).map((item) => {
          return (
            <div
              style={{ cursor: "pointer", margin: "0 5px" }}
              key={item}
              onClick={() => handleSelectedStars(item + 1)}
            >
              {selectedStarts > item ? "★" : "☆"}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
