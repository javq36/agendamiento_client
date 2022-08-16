import { useState } from "react";
import { useInfoCarMutation } from "../store/apis";
import Container from "@mui/material/Container";
export const Listado = () => {
  const platedev = {
    plate: "FRQ964",
  };
  const [body, setbody] = useState(platedev);
  const  data  = useInfoCarMutation(body);
  console.log(data);
  
  return (
    <Container
      maxWidth="md"
      sx={{ backgroundColor: "white", padding: 4, marginBottom: 4 }}
    >
      <h1>PRUEBA</h1>
      <nav className="nav navbar align-items-center">
        <button className="btn btn-danger">BUSCAR</button>
      </nav>
      <hr />

      <table className="table text-right">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="bg-light text-dark text-center"
              style={{ width: "100px" }}
            ></td>
            <td className="bg-light"></td>
          </tr>
        </tbody>
      </table>
      <hr />
    </Container>
  );
};
