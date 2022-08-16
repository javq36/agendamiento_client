import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useLocalStorage } from "../../constants/useLocalStorage";
import { getDatos } from "../../components/Calendar/demo-data/appointments";
import Container from "@mui/material/Container";

const index = () => {
  const [usuario, setusuario] = useLocalStorage("usuario", "");
  return (
    <div>
      <Navbar />
      <div>
        <Calendar />
      </div>
      <Footer />
    </div>
  );
};

export default index;
