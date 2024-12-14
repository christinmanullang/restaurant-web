import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MenuItem from "./components/MenuItem";
import CartItem from "./components/CartItem";

const App = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch menu data
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  // const addToCart = (item) => {
  //   setCart((prevCart) => [...prevCart, item]);
  // };
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((el) => el.id === item.id);
      if (existingItemIndex !== -1) {
        // Update quantity if item already exists in cart
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      }
      // Add new item to cart
      return [...prevCart, item];
    });
  };


  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      {/* Menu */}
      <div className="container mt-4">
        <h1>Menu</h1>
        <div className="row g-4">
          {menu.map((item) => (
            <div className="col-md-4" key={item.id}>
              <MenuItem item={item} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                removeFromCart={() => removeFromCart(index)}
              />
            ))
          )}
          {cart.length > 0 && (
            <div className="mt-auto d-flex justify-content-between align-items-center">
            <h5>Total: Rp{cart.reduce((sum, item) => sum + item.price, 0)}</h5>
            <button className="btn btn-primary btn-sm ms-3">
              Checkout
            </button>
          </div>
          


          )}
        </div>
      </div>

    </div>
  );
};

export default App;
