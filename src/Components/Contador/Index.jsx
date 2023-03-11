import { useState } from "react";

function Contador() {
  const [ponto, setPonto] = useState(0);

  const handlePonto = (evento) => {
    let pontoSomado = ponto + parseInt(evento);
    setPonto(pontoSomado);
  };

  return (
    <div>
      <p className="texto">{ponto}</p>
      <input
        onClick={(evento) => handlePonto(evento.target.value)}
        type="button"
        value="+1"
      />
      <input
        onClick={(evento) => handlePonto(evento.target.value)}
        type="button"
        value="+3"
      />
      <input
        onClick={(evento) => handlePonto(evento.target.value)}
        type="button"
        value="+5"
      />
      <input
        onClick={(evento) => handlePonto(evento.target.value)}
        type="button"
        value="+10"
      />
    </div>
  );
}

export default Contador;
