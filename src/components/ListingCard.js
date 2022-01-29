import React, { useState } from "react";

function ListingCard({
  item : { id, image, description, location },
  handleDelete
}) {

  const [favorited, setFavorited] = useState(false)

  function deleteItem() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(handleDelete(id))
  }
  
  return (
    <li key={id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button 
            className="emoji-button favorite active" 
            onClick={() => setFavorited(false)}
          >
            ★
          </button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={() => setFavorited(true)}
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
