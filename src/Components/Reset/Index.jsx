import "./Styles.css";

import Contador from "../Contador/Index";
import { useState } from "react";

function Reset() {
  const [pontoReset, setPontoReset] = useState(0);

  const handleReset = () => {
    setPontoReset(0);
  };

  return (
    <div className="reset__container">
      <Contador pontoReset={pontoReset} setPontoReset={setPontoReset} />
      <input
        className="btn__geral texto"
        onClick={() => setPontoReset(0)}
        type="button"
        value="Reiniciar"
      />
      <Contador pontoReset={pontoReset} setPontoReset={setPontoReset} />
    </div>
  );
}

export default Reset;
