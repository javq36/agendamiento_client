import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// prueba
import { Listado } from "../../components/Listado";
// Slider o carrousel responsive
import { Slider } from "../../components/Slider";
// navbar
import { Navbar } from "../../components/Navbar";
// footer
import { Footer } from "../../components/Footer";
// formulario
import { TextFieldInput } from "../../components/shared/TextInput";
import { SelectFieldInputOnChange } from "../../components/shared/SelectInput/";
// controladores y validaciones del formulario
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SendIcon from "@mui/icons-material/Send";
// animaciones
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import automarcolimg from "../../assets/carros.png";
import Image from "next/image";
function index() {
  return (
    <div>
      <Navbar />
      <Listado />
      <Container maxWidth="md" style={{ marginBottom: 10 }}>
        <motion.div
          animate={{
            x: [-4000, 0],
            opacity: 2,
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}
        >
          <Paper
            elevation={4}
            style={{ marginTop: 15, backgroundColor: "black" }}
          >
            <Slider />
          </Paper>
        </motion.div>
      </Container>
 
      <Container
        maxWidth="md"
        sx={{ marginBottom: 20, overflow: "hidden", minHeight: "100vh" }}
      >
        <motion.div
          animate={{ y: [4000, 0], opacity: 2 }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}
        >
          <motion.div
            layout
            transition={{
              layout: { duration: 0.4 },
            }}
          >
            <Paper
              elevation={4}
              className="contactanos"
              style={{
                overflow: "hidden",
                marginTop: 15,
                marginBottom: 20,
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  paddingTop: "10px",
                  marginBottom: "8px",
                }}
              >
                Contactanos
              </h3>
              <Container maxWidth="lg" style={{}}>
                <p style={{ textAlign: "justify" }}>
                  <span>
                    Empresas Nortesantandereana ubicada en una zona comercial
                    estratégica. Contamos con años de experiencia en el sector
                    de venta de{" "}
                    <strong>
                      carros, SUV´s, camionetas, PickUp, Utilitarios,
                      motocicletas
                    </strong>{" "}
                    entre otros, y en posventa:{" "}
                    <strong>repuestos y taller</strong> especializado en las
                    marcas:{" "}
                    <strong>
                      Ford, FIAT, Jeep, RAM, Dodge, Peugeot, Foton y Bajaj.
                    </strong>{" "}
                    Somos el concesionario multimarcas{" "}
                    <strong>en Cúcuta</strong> y la Zona de frontera con
                    Venezuela.
                  </span>
                </p>
                <Image
                  src={automarcolimg}
                  alt="Picture of the author"
                  width={800}
                  height={200}
                />
              </Container>
              <footer className="pie-pagina">
                <div className="grupo-1">
                  <div className="box"></div>
                  <div className="box">
                    <div className="red-social" sx={{ color: "white" }}>
                      <a
                        href="https://www.youtube.com/channel/UCi6Veo33llCeMDaZcJnLu4w"
                        className="fa fa-facebook"
                      >
                        <YouTubeIcon />
                      </a>
                      <a
                        href="https://web.facebook.com/automarcolmultimarcas/?_rdc=1&_rdr"
                        className="fa fa-facebook"
                      >
                        <FacebookIcon />
                      </a>
                      <a
                        href="https://www.instagram.com/automarcol_multimarcas/?hl=es"
                        className="fa fa-facebook"
                      >
                        <InstagramIcon />
                      </a>
                      <a
                        href="https://linktr.ee/AutomarcolMultimarcas"
                        className="fa fa-facebook"
                      >
                        <WhatsAppIcon />
                      </a>
                    </div>
                  </div>
                  <div className="box"></div>
                </div>
              </footer>
            </Paper>
          </motion.div>
        </motion.div>

      </Container>

      <Footer />
    </div>
  );
}

export default index;
