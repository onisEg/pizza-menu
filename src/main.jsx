import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}

function Menu() {
  // const numPizzas = []
  const numPizzas = pizzaData.length;
  return (
    <>
      <main className="menu">
        <h2>our menu</h2>
        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to from. All from our
              stone oven. all organic, all delicious.{" "}
            </p>
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>we're still working on our mmenu. Please come back later :) </p>
        )}
      </main>
    </>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);

  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt="" />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          {/* <span>{pizzaObj.price} $</span> */}
          <span>{pizzaObj.soldOut ? `SOLD OUT` : pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  console.log(hour);

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>
              we're open until {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <>
            <p>
              we're close NOW and open until {closeHour}:00. Come visit us or
              order online
            </p>
          </>
        )}
      </footer>
    </>
  );
}
