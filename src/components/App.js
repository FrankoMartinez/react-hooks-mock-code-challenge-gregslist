import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  // Fetch to display all items once the page first renders
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setItems(data)) 
  }, []);

  // Delete item from browser
  function handleDeletedItem(id) {
   const newItems = items.filter((item) => item.id !== id)
   setItems(newItems)
  }
  
  const displayedItems = items.filter((item) => 
  item.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer items={displayedItems} handleDeletedItem={handleDeletedItem} />
    </div>
  );
}

export default App;
