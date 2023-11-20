import React, { useState } from 'react';
import Overlay from '../components/Overlay';

const CertidaoForm = ({ onCriarCertidao, onCancel, showForm}) => {
  const [codigo, setCodigo] = useState(0);
  const [nome, setNome] = useState('');
  const [idAmbito, setIdAmbito] = useState(0);
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [dataCriacao, setDataCriacao] = useState('');
  const [idStatus, setIdStatus] = useState(0);

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

  const handleSubmit = () => {
    const novaCertidao = {
      codigo,
      nome,
      id_ambito: idAmbito,
      estado,
      cidade,
      data_criacao: dataCriacao,
      id_status: idStatus,
    };

    // Chamada da API para criar a certidão
    fetch('http://localhost:8000/certidao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaCertidao),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Atualizar a lista de certidões após a criação
        onCriarCertidao(data); // Atualizar para refletir o formato de retorno da API
      })
      .catch((error) => console.error('Erro ao criar certidão:', error));

    // Limpar o formulário após a criação
    setCodigo(0);
    setNome('');
    setIdAmbito(0);
    setEstado('');
    setCidade('');
    setDataCriacao('');
    setIdStatus(0);
  };

  const handleCancelar = () => {
    // Chama a função onCancel para esconder o formulário
    onCancel();
  };

  return (
    <React.Fragment>
      <Overlay onClick={handleCancelar} />

      <div className={`certidao-form-container ${showForm ? 'show' : ''}`}>
        <label htmlFor="codigo">Código:</label>
        <input size="500 "type="number" id="codigo" name="codigo" value={codigo} onChange={handleCodigoChange} />

        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={nome} onChange={handleNomeChange} />

        <label htmlFor="idAmbito">ID do Ambito:</label>
        <input type="number" id="idAmbito" name="idAmbito" value={idAmbito} onChange={handleIdAmbitoChange} />

        <label htmlFor="estado">Estado:</label>
        <input type="text" id="estado" name="estado" value={estado} onChange={handleEstadoChange} />

        <label htmlFor="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade" value={cidade} onChange={handleCidadeChange} />

        <label htmlFor="dataCriacao">Data de Criação:</label>
        <input type="text" id="dataCriacao" name="dataCriacao" value={dataCriacao} onChange={handleDataCriacaoChange} />

        <label htmlFor="idStatus">ID do Status:</label>
        <input type="number" id="idStatus" name="idStatus" value={idStatus} onChange={handleIdStatusChange} />

        <button className="popup-button" onClick={handleSubmit}>
          Confirmar
        </button>

        <button className="popup-button" onClick={handleCancelar}>
          Cancelar
        </button>
      </div>
    </React.Fragment>
  );
};

export default CertidaoForm;
