import React, { useState } from "react";

const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      {/* Menu Card */}
      <div className="card">
        <img src={item.image_url} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Rp{item.price}</p>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#modal${item.id}`}
          >
            Lihat Detail
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id={`modal${item.id}`}
        tabIndex="-1"
        aria-labelledby={`modalLabel${item.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modalLabel${item.id}`}>
                {item.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={item.image_url}
                className="card-img-top mb-3"
                alt={item.name}
              />
              <h6>Price: Rp{item.price}</h6>
              <div className="d-flex align-items-center mt-3">
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="btn btn-outline-secondary ms-2"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  addToCart({ ...item, quantity });
                  setQuantity(1); // Reset quantity
                }}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
