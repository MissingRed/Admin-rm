import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";

const home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Sidebar />
        <div className="table">
          <table>
            <tr>
              <th>Id</th>
              <th>Dirección</th>
              <th>Hora Inicial</th>
              <th>Hora Final</th>
              <th>Tiempo</th>
              <th>Total</th>
              <th>Recogida</th>
            </tr>
            <tr>
              <td>Id</td>
              <td>Dirección</td>
              <td>Hora Inicial</td>
              <td>Hora Final</td>
              <td>Tiempo</td>
              <td>Total</td>
              <td>Recogida</td>
            </tr>
            <tr>
              <td>Id</td>
              <td>Dirección</td>
              <td>Hora Inicial</td>
              <td>Hora Final</td>
              <td>Tiempo</td>
              <td>Total</td>
              <td>Recogida</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default home;
