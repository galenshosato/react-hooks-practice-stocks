import React from "react";

function Stock({stock, buyStockClick}) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={() => buyStockClick(stock.id)} >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
