import "./Styles.css";

import Contador from "../Contador/Index";
import { useState } from "react";

function Reset() {
  const [ponto, setPonto] = useState({
    player1: 0,
    player2: 0,
  });

  const handleReset = () => {
    setPonto({
      player1: 0,
      player2: 0,
    });
  };

  const handlePonto = (evento) => {
    let valor = parseInt(evento.target.value);
    let jogador = evento.target.name;
    setPonto({ ...ponto, [jogador]: ponto[jogador] + valor });
  };

  return (
    <div className="reset__container">
      <Contador
        ponto={ponto.player1}
        handlePonto={handlePonto}
        player="player1"
      />
      <input
        className="btn__geral texto"
        onClick={() => handleReset()}
        type="button"
        value="Reiniciar"
      />
      <Contador
        ponto={ponto.player2}
        handlePonto={handlePonto}
        player="player2"
      />
    </div>
  );
}

export default Reset;
