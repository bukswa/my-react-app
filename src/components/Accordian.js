import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const data = [
  {
    id: 1,
    title: "Accordian 1",
    description:
      "A memorial for its co-founder, John Warnock, demonstrates care for the company’s legacy and s",
  },
  {
    id: 2,
    title: "Accordian 2",
    description:
      "A memorial for its co-founder, John Warnock, demonstrates care for the company’s legacy and s",
  },
  {
    id: 3,
    title: "Accordian 3",
    description:
      "A memorial for its co-founder, John Warnock, demonstrates care for the company’s legacy and s",
  },
];

const Accordian = () => {
  const [isCollapsedId, SetIsCollapsedId] = useState(1);

  const handleClick = (id) => {
    if (isCollapsedId !== id) {
      SetIsCollapsedId(id);
    } else {
      SetIsCollapsedId(0);
    }
  };
  return (
    <div>
      <h2>Accordian</h2>
      <div style={{ background: "#ccf" }}>
        {data.map((datum) => {
          return (
            <AccordianItem
              isCollapsedId={isCollapsedId}
              handleClick={handleClick}
              datum={datum}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
