import "./Styles.css";

import BotaoConta from "../BotaoConta/Index";

function Contador({ ponto, handlePonto, player }) {
  return (
    <div className="contador__container">
      <p className="titulo sombra-titulo-hover">{ponto}</p>
      <div className="contador__btn--container">
        <BotaoConta valor={"+1"} handlePonto={handlePonto} player={player} />
        <BotaoConta valor={"+3"} handlePonto={handlePonto} player={player} />
        <BotaoConta valor={"+5"} handlePonto={handlePonto} player={player} />
        <BotaoConta valor={"+10"} handlePonto={handlePonto} player={player} />
      </div>
      <div className="contador__btn--container">
        <BotaoConta valor={"-1"} handlePonto={handlePonto} player={player} />
        <BotaoConta valor={"-3"} handlePonto={handlePonto} player={player} />
        <BotaoConta valor={"-5"} handlePonto={handlePonto} player={player} />
        <BotaoConta valor={"-10"} handlePonto={handlePonto} player={player} />
      </div>
    </div>
  );
}

export default Contador;
