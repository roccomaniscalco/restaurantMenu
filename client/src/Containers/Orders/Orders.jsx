import React from "react";
import AdminNav from "../../Components/AdminNav.jsx/AdminNav";
import OrderCard from "../../Components/OrderCard/OrderCard"
import "../Orders/Orders.css"

const Orders = () => {
  const orders = [
    {
      orderID: "001",
      items: [
        {
          title: ["fish", " tacos"],
          description: "tacos",
          details: "Good",
          price: ["3.99", " 25.00"],
        },
        
      ],
      status: "Cooking",
    },

    {
      orderID: "002",
      items: [
        {
          title: ["tacos", "fish"],
          description: "fish",
          details: "fishy fish",
          price: ["25.00", " 3.99"],
        },
      ],
      status: "Cooking",
    }
  ]

  return (
    <>
    <AdminNav/>
    <div className="order-wrapper">
      {orders.map((orderItems, index) => {
          <h1>{orderItems.orderID}</h1>
        return (
          <div className="card horizontal order-category-wrapper order-card">
              <div className="card-stacked">
            {orderItems.items.map((order) => {
              return (
                <>
                    <OrderCard {...order}/>
                </>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Orders;
