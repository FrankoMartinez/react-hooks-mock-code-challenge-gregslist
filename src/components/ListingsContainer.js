import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, handleDeleteItem }) {
  return (
    <main>
      <ul className="cards">
        {/* Map through items and display them by using the Listing Card component */}
        {items.map((item) => {
          return <ListingCard 
          key={item.id}
          item={item}
          handleDelete={handleDeleteItem}
          />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
