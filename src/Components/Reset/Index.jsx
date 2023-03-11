import Contador from "../Contador/Index";
import { useState } from "react";

function Reset() {
  const [pontoReset, setPontoReset] = useState(0);

  return (
    <div>
      <Contador pontoReset={pontoReset} />
      <input onClick={() => setPontoReset(0)} type="button" value="Reiniciar" />
      <Contador pontoReset={pontoReset} />
    </div>
  );
}

export default Reset;
