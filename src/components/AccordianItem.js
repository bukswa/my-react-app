import React from "react";

const AccordianItem = ({ datum, isCollapsedId, handleClick }) => {
  return (
    <div key={datum.id}>
      <h3 style={{ padding: "4px", background: "#cfc" }}>
        <button
          onClick={() => handleClick(datum.id)}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          {datum.id === isCollapsedId ? "🔼" : "🔽"}
        </button>
        {datum.title}
      </h3>
      <div
        className={`box ${datum.id === isCollapsedId ? "fade-in" : "fade-out"}`}
      >
        {datum.id === isCollapsedId && <p>{datum.description}</p>}
      </div>
    </div>
  );
};

export default AccordianItem;
