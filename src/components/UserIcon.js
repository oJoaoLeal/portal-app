import React, { useState } from 'react';

const UserIcon = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleLogout = () => {
    // Lógica para realizar o logout
    console.log("Sair");
    // Exemplo: chamar uma função que executa o logout do usuário
  };

  const handleShowMenu = () => {
    // Lógica para mostrar o menu do usuário
    console.log("Mostrar Menu");
    // Exemplo: chamar uma função que exibe o menu do usuário
  };

  return (
    <div className="user-icon-container">
      <div className="user-icon" onClick={toggleOptions}>
        {/* Ícone do usuário (pode ser uma imagem ou ícone) */}
        <span role="img" aria-label="User Icon">👤</span>
      </div>

      {/* Opções do usuário */}
      {isOptionsVisible && (
        <div className="user-options">
          <button onClick={handleLogout}>Sair</button>
          <button onClick={handleShowMenu}>Menu</button>
        </div>
      )}
    </div>
  );
};

export default UserIcon;
