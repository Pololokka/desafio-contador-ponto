function BotaoConta({ valor, handlePonto }) {
  return (
    <div>
      <input
        onClick={(evento) => handlePonto(evento.target.value)}
        type="button"
        value={valor}
      />
    </div>
  );
}

export default BotaoConta;
