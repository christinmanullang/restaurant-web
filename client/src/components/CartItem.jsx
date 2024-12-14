import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
      <div>
        <h6>{item.name}</h6>
        <p className="mb-0">
          Rp{item.price} x {item.quantity}
        </p>
      </div>
      <button className="btn btn-danger btn-sm" onClick={removeFromCart}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
