import React, { useState } from "react";
import data from "../Utils/Data";

function Home() {
  const [dummyData, setDummyData] = useState(data)
  return (
    <div className="Main">
      <div className="Header"></div>
      <h1>Plumbing and Accessories</h1>
      <div className="Home">
        <div className="Accessories-divM">
          <h2>Hardware & Accessories</h2>
          <div className="Accessories-unit">
          {dummyData.map((e,i) => {
            return (
              <div 
              className="Accessories-item"
              key= {i}>
              <img  src= {dummyData[i].source} />
            </div>)
          })}
          </div>
        </div>
        <div className="Other-services"></div>
      </div>
    </div>
  );
}
export default Home;
