function BotaoConta({ valor, handlePonto, player }) {
  return (
    <div>
      <input
        className="btn__geral texto"
        onClick={handlePonto}
        type="button"
        value={valor}
        name={player}
      />
    </div>
  );
}

export default BotaoConta;
