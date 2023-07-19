import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Stays from "./components/stays/Stays";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Stays />
      <Footer />
    </div>
  );
}

export default App;
