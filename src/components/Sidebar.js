import React, { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <button>
            <img
              src="icons/plus.svg"
              alt=""
              onClick={() => setOpenModal(!openModal)}
            />
            Nuevo
          </button>
          {openModal ? (
            <div className="modalAdd">
              <div className="options">
                <p>Agregar Lavadora</p>
                <div className="close">
                  <button onClick={() => setOpenModal(!openModal)}>X</button>
                </div>
              </div>
              <div className="modal"></div>
            </div>
          ) : (
            ""
          )}
          <button>
            <img src="icons/filled_filter.svg" alt="" />
            Filtrar
          </button>
          <button>
            <img src="icons/data_sheet.svg" alt="" />
            Todo
          </button>
          <button>
            <img src="icons/search.svg" alt="" />
            Buscar
          </button>
          <button>
            <img src="icons/survey.svg" alt="" />
            Reporte
          </button>
        </div>
        <button>
          <img src="icons/lock.svg" alt="" />
          Salir
        </button>
      </div>
    </>
  );
};

export default Sidebar;
