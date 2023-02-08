import React from "react";
import Portstock from "./Portstock";

function PortfolioContainer({portList, setPortList}) {

  function handlePortClick(id) {
    setPortList(prev => prev.filter(newPort => {
      return newPort.id !== id
    }))
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portList.map(stock => {
       return <Portstock key={stock.id} stock={stock} handlePortClick={handlePortClick} /> 
      })}
    </div>
  );
}

export default PortfolioContainer;
