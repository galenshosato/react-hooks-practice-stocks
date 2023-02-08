import React from "react";

function Portstock({stock, handlePortClick}) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => handlePortClick(stock.id)} >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Portstock;