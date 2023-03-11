import { useState } from "react";
import BotaoConta from "../BotaoConta/Index";

function Contador({ pontoReset, handleReseta }) {
  const [ponto, setPonto] = useState(0);

  const handlePonto = (evento) => {
    let pontoSomado = ponto + parseInt(evento);
    setPonto(pontoSomado);
    console.log(pontoReset);
  };

  return (
    <div>
      <p className="texto">{ponto}</p>
      <div>
        <BotaoConta valor={"+1"} handlePonto={handlePonto} />
        <BotaoConta valor={"+3"} handlePonto={handlePonto} />
        <BotaoConta valor={"+5"} handlePonto={handlePonto} />
        <BotaoConta valor={"+10"} handlePonto={handlePonto} />
      </div>
      <div>
        <BotaoConta valor={"-1"} handlePonto={handlePonto} />
        <BotaoConta valor={"-3"} handlePonto={handlePonto} />
        <BotaoConta valor={"-5"} handlePonto={handlePonto} />
        <BotaoConta valor={"-10"} handlePonto={handlePonto} />
      </div>
    </div>
  );
}

export default Contador;
