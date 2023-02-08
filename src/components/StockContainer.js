import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, buyStockClick}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map(stock => {
        return <Stock key={stock.id} stock={stock} buyStockClick={buyStockClick} />
      })}
    </div>
  );
}

export default StockContainer;
