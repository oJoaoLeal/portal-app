import React, { useState } from 'react';
import CertidoesList from './components/CertidoesList';
import CertidaoForm from './components/CertidaoForm';
import UserIcon from './components/UserIcon';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <header>
        <h1>Certidões</h1>
        <div className='options-container'>
          {/* Botão para exibir o formulário de nova certidão */}
          <button className="popup-button" onClick={handleShowForm}>
          Nova Certidão
          </button>
        </div>

        <UserIcon />
      </header>

      {/* Formulário para criar nova certidão */}
      {showForm && <CertidaoForm onCancel={handleHideForm} showForm={showForm} />}

      <CertidoesList />

      <footer>
        <p>
          Copyright © 2023 Uniacademia - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};


export default App;