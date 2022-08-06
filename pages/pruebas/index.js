import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Pruebaw } from "../../components/Pruebaw";
const index = () => {
  return (
    <div>
      <Navbar />
      <Pruebaw />
      <Footer />
    </div>
  );
};

export default index;
