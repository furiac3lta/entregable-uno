import React from "react";

const Phrases = ({ ramdomPhrase }) => {
  return (
    <div className="container wave">
      <svg className="top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      
      </svg>
      <p className="parragraph">{ramdomPhrase.phrase}</p>
   
      <svg className="bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

Phrases.defaultProps ={
  ramdomPhrase :'No hay peor venganza que el olvido!'
}
export default Phrases;
