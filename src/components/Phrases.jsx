import React from "react";

const Phrases = ({ ramdomPhrase }) => {
  return (
    <div className="container wave">
     
      <p className="parragraph">{ramdomPhrase.phrase}</p>

    </div>
  );
};

export default Phrases;
