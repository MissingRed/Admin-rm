import React, { useState } from "react";
import "../styles/Content.css";
import { db } from "../Database/Base";
import Form from "./Form";

const Content = () => {
  const [openModal, setOpenModal] = useState(false);

  const listItem = async (linkObject) => {
    await db.collection("Alquielres").doc().set(linkObject);
    alert("producto agregado con exito");
  };

  return (
    <>
      <div className="content">
        <button onClick={() => setOpenModal(!openModal)}>AGREGAR</button>
        {openModal ? (
          <div className="modalAdd">
            <Form {...{ setOpenModal }} />
          </div>
        ) : (
          ""
        )}
        <h3>Alquileres</h3>
        <table className="rtable">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Dirección</th>
              <th>Hora Inicial</th>
              <th>Hora Final</th>
              <th>Num. Horas</th>
              <th>Total</th>
              <th>Recoger</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9,562</td>
              <td>68.81%</td>
              <td>7,895</td>
              <td>7,895</td>
              <td>01:07</td>
              <td>Si</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Content;
