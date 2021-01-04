import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <button>
          <img src="icons/plus.svg" alt="" />
          Nuevo
        </button>
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
        <button>
          <img src="icons/lock.svg" alt="" />
          Salir
        </button>
      </div>
    </>
  );
};

export default Sidebar;
