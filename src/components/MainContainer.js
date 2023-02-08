import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([])
  const [portList, setPortList] = useState([])
  const [filter, setFilter] = useState({type: 'tech'})

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(data => {
       setStockList(data)
    })
  }, [])

  function buyStockClick (id) {
    let x = [...stockList]
    
    let y = x.filter(newArray => {
      return newArray.id === id
    } )
  
    //Figure out how to not allow the list to repeat
    setPortList(prev => [...prev,y[0]])
  }
  
  function handleChange (event) {
    
    if(event.target.value === "Alphabetically") {
      setStockList(prev => [...prev].sort(function(a,b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
          return 0
    }))} else {
      setStockList(prev => [...prev].sort(function(a,b) {
        if (a.price > b.price) {
          return -1
        }
        if (a.price < b.price) {
          return 1
        }
         return 0 
      }))
    }
    
  }
  
  let filteredList = stockList.filter(stock => {
    return stock.type === filter.type || filter.type === 'tech'
  })
  
  


  return (
    <div>
      <SearchBar setStockList={setStockList} handleChange={handleChange} filter={filter} setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={filteredList} setStockList={setStockList} buyStockClick={buyStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portList={portList} setPortList={setPortList} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
