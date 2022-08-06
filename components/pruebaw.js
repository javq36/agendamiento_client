import React from "react";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import { useState } from "react";
const steps = [
  {
    title: "Prueba 👋",
    element: "#selector2",
    intro: "lorem lorem lorem lorem lorem lorem",
    position: "right",
  },
  {
    title: "Prueba 👋",
    element: "#selector3",
    intro: "lorem lorem lorem lorem lorem lorem",
    position: "right",
  },
  {
    title: "Prueba 👋",
    element: "#selector4",
    intro: "lorem lorem lorem lorem lorem lorem",
    position: "right",
  },
];

export function Pruebaw() {
  const [info, setinfo] = useState(false);

  const botonclick = () => {
    setinfo(true);
    if (info === true) {
      setinfo(false);
    }
  };
  const cerrar = () => {
    setinfo(false);
  };

  return (
    <div className="row">
      <button className="btn btn-primary" onClick={botonclick}>
        Ver info
      </button>
      <div className="col carta">
        <div
          className="card bg-dark mt-4 text-light border"
          style={{ minWidth: "200px" }}
          id="selector2"
        >
          <Steps
            enabled={info}
            steps={steps}
            initialStep={0}
            options={{
              tooltipClass: "customTooltip",
              showProgress: true,
              showStepNumbers: false,
              showBullets: false,
              exitOnOverlayClick: false,
              doneLabel: "Listo",
              prevLabel: "Atras",
              nextLabel: "Siguiente",
              hideNext: false,
            }}
            onExit={cerrar}
          />
          <img alt="" id="selector4" />
          <div id="selector3">
            <div className="card-boby">
              <h5 className="card-title">wqeqweqwe</h5>
            </div>
            <h5 className="card-title">qweqwewqe</h5>
            <h5 className="card-title">qweqweqweqweqw</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
