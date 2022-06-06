import React from "react";

const Card = ({ name }) => {
  return (
    <div className="bg-grey dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
