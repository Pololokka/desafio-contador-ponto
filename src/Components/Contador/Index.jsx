import "./Styles.css";

import { useState } from "react";
import BotaoConta from "../BotaoConta/Index";

function Contador({ pontoReset }) {
  const [ponto, setPonto] = useState(0);

  const handlePonto = (evento) => {
    let pontoSomado = ponto + parseInt(evento);
    setPonto(pontoSomado);
  };

  return (
    <div className="contador__container">
      <p className="titulo sombra-titulo-hover">{ponto}</p>
      <div className="contador__btn--container">
        <BotaoConta valor={"+1"} handlePonto={handlePonto} />
        <BotaoConta valor={"+3"} handlePonto={handlePonto} />
        <BotaoConta valor={"+5"} handlePonto={handlePonto} />
        <BotaoConta valor={"+10"} handlePonto={handlePonto} />
      </div>
      <div className="contador__btn--container">
        <BotaoConta valor={"-1"} handlePonto={handlePonto} />
        <BotaoConta valor={"-3"} handlePonto={handlePonto} />
        <BotaoConta valor={"-5"} handlePonto={handlePonto} />
        <BotaoConta valor={"-10"} handlePonto={handlePonto} />
      </div>
    </div>
  );
}

export default Contador;
