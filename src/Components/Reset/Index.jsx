import "./Styles.css";

import Contador from "../Contador/Index";
import { useState } from "react";

function Reset() {
  const [pontoCont1, setPontoCont1] = useState(0);
  const [pontoCont2, setPontoCont2] = useState(0);

  const handleReset = () => {
    setPontoCont1(0);
    setPontoCont2(0);
  };

  return (
    <div className="reset__container">
      <Contador ponto={pontoCont1} setPonto={setPontoCont1} />
      <input
        className="btn__geral texto"
        onClick={() => handleReset()}
        type="button"
        value="Reiniciar"
      />
      <Contador ponto={pontoCont2} setPonto={setPontoCont2} />
    </div>
  );
}

export default Reset;
