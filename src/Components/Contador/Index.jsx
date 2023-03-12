import "./Styles.css";

import BotaoConta from "../BotaoConta/Index";

function Contador({ ponto, setPonto }) {
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
