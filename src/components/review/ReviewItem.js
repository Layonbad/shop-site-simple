import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ReviewItem = ({product, handleRemoveItem}) => {
  const {id, name, price, quantity, img} = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt=""/>
      </div>

      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p><small>Price: {price}</small></p>
          <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <DeleteIcon></DeleteIcon>
          </button>
        </div>
      </div>

    </div>
  )
}

export default ReviewItem;
