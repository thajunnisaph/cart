import React, { useState } from "react";
import { initialCartItems } from "./DummyCartItems";
import { Button, Badge, Navbar, Nav } from "react-bootstrap";

import "./Cart.css";
import { Trash, Bell, Cart2, CheckCircleFill } from "react-bootstrap-icons";
const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    }
  };
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCartItems([]);
  };
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-around"
        expand="lg"
      >
        <Navbar.Brand href="#">My Shop</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">ContactUs</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <Button variant="link">
              <Bell color="yellow" size={20} />
              <Badge variant="danger">4</Badge>
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
      <div className="cartpage">
        <span className="cart">
          <Cart2 color="blue" size={28} />
          <h3>
            Your Cart <span>({cartItems.length} Items)</span>
          </h3>
        </span>
        {cartItems.length === 0 ? (
          <h6 className="text-center mt-3">Your cart is empty</h6>
        ) : (
          <>
            <ul className="cartitems">
              {cartItems.map((item) => (
                <li className="cart-item">
                  <div>git remote add origin https://github.com/thajunnisaph/cart.git 
                    <img src={item.image} alt={item.name} />
                    <h6>Distributer Name - {item.distributername}</h6>
                    <h5>{item.name}</h5>
                    <div className="summary">
                      <span className="price">${item.price}</span>
                    </div>
                  </div>
                  <div className="actions">
                    <button>-</button>
                    <span className="amount">{item.quantity}</span>
                    <button>+</button>
                  </div>
                  <Trash
                    className="delete-icon"
                    size={24}
                    color="blue"
                    onClick={() => handleDelete(item.id)}
                  />
                </li>
              ))}
            </ul>
            <div className="total">
              <span>Total Amount</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </>
        )}

        {orderPlaced ? (
          <div className="text-center mt-5">
            <CheckCircleFill size={50} color="green" />
            <h5>Order Placed </h5>
          </div>
        ) : (
          <div className="text-center my-4">
            <Button variant="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
