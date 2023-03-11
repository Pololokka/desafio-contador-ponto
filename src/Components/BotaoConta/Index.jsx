function BotaoConta({ valor, handlePonto }) {
  return (
    <div>
      <input
        className="btn__geral texto"
        onClick={(evento) => handlePonto(evento.target.value)}
        type="button"
        value={valor}
      />
    </div>
  );
}

export default BotaoConta;
