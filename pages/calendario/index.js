import React from "react";
import Calendar from "../../components/Calendar";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useLocalStorage } from "../../constants/useLocalStorage";
const index = () => {
  const [usuario, setusuario] = useLocalStorage("usuario", "");

 
  return (
    <div>
      <Navbar />
      <Calendar usuario={usuario} />
      <Footer />
    </div>
  );
};

export default index;
