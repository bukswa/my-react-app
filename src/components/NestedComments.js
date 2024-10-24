import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    text: "commment1",
    comments: [
      {
        id: 1.1,
        text: "commment1.1",
        comments: [
          {
            id: 1.11,
            text: "commment1.11",
            comments: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    text: "commment2",
    comments: [
      {
        id: 2.1,
        text: "commment2.1",
        comments: [],
      },
    ],
  },
];
const NestedComments = () => {
  return (
    <div>
      <h3>NestedComments</h3>

      {data.map((datum) => {
        return <NestedComment item={datum} />;
      })}
    </div>
  );
};

const NestedComment = ({ item }) => {
  return (
    <div style={{ paddingLeft: "50px" }}>
      <h4>{item.text}</h4>
      {item.comments.length > 0 &&
        item.comments.map((i) => <NestedComment item={i} />)}
    </div>
  );
};

export default NestedComments;
