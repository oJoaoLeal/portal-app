import React, { useState } from 'react';
import Overlay from '../components/Overlay';
import { message, Modal } from 'antd';

const CertidaoForm = ({ onCriarCertidao, onCancel, showForm }) => {
  const [codigo, setCodigo] = useState(0);
  const [nome, setNome] = useState('');
  const [idAmbito, setIdAmbito] = useState(0);
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [dataCriacao, setDataCriacao] = useState('');
  const [idStatus, setIdStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleIdAmbitoChange = (event) => {
    setIdAmbito(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
  };

  const handleDataCriacaoChange = (event) => {
    setDataCriacao(event.target.value);
  };

  const handleIdStatusChange = (event) => {
    setIdStatus(event.target.value);
  };

  const handleExcluir = () => {
    // Antes de excluir, mostra o pop-up de confirmação
    setConfirmationVisible(true);
  };

  const handleConfirmarExclusao = () => {
    setLoading(true); // Inicia o indicador de carregamento

    // Lógica para exclusão
    fetch(`http://localhost:8000/certidao/${codigo}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao excluir certidão com ID ${codigo}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Adiciona uma mensagem de sucesso
        message.success('Certidão excluída com sucesso!');
        // ... (outros passos necessários após a exclusão)
      })
      .catch((error) => {
        console.error(error);
        // Adiciona tratamento de erro, exibe uma mensagem, etc.
      })
      .finally(() => {
        setLoading(false); // Finaliza o indicador de carregamento, independente do resultado
        setConfirmationVisible(false); // Fecha o pop-up de confirmação
      });
  };

  const handleCancelarExclusao = () => {
    // Fecha o pop-up de confirmação sem excluir
    setConfirmationVisible(false);
  };

  const handleSubmit = () => {
    // ... (código existente)
  };

  const handleCancelar = () => {
    // Chama a função onCancel para esconder o formulário
    onCancel();
  };

  return (
    <React.Fragment>
      <Overlay onClick={handleCancelar} />

      <div className={`certidao-form-container ${showForm ? 'show' : ''}`}>
        {/* ... (código existente) */}

        <button className="popup-button" onClick={handleExcluir}>
          Excluir
        </button>

        {loading && <p>Excluindo certidão...</p>}

        {/* Modal de confirmação */}
        <Modal
          title="Confirmação de Exclusão"
          visible={confirmationVisible}
          onOk={handleConfirmarExclusao}
          onCancel={handleCancelarExclusao}
        >
          <p>Deseja realmente excluir esta certidão?</p>
          <p>Código: {codigo}</p>
          <p>Nome: {nome}</p>
          <p>Esta ação não pode ser desfeita.</p>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default CertidaoForm;
