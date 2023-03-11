import Contador from "../Contador/Index";
import { useState } from "react";

function Reset() {
  const [ponto, setPonto] = useState(0);

  return (
    <div>
      <Contador />
      <input onClick={() => setPonto(0)} type="button" value="Reiniciar" />
      <Contador />
    </div>
  );
}

export default Reset;
