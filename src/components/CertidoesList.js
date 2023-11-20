import React, { useState, useEffect } from 'react';
import Certidao from './Certidao';

const CertidoesList = () => {
  const [certidoes, setCertidoes] = useState([]);
  const [searchId, setSearchId] = useState(''); // Novo estado para o campo de busca

  useEffect(() => {
    fetch('http://localhost:8000/certidao')
      .then((response) => response.json())
      .then((data) => {
        setCertidoes(data);
        console.log(data);
      })
      .catch((error) => console.error('Erro ao obter certidões:', error));
  }, []);

  const handleEditar = (codigo) => {
    // Lógica para editar certidão
    console.log(`Editar certidão ${codigo}`);
  };

  const handleExcluir = (codigo) => {
    console.log(`Excluir certidão com ID ${codigo}`);
  
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
        setCertidoes((prevCertidoes) =>
          prevCertidoes.filter((certidao) => certidao.cod_certidao !== codigo)
        );
      })
      .catch((error) =>
        console.error(error)
      );
  };

  // Função para filtrar certidões com base no ID fornecido pelo usuário
  const filteredCertidoes = certidoes.filter((certidao) =>
    certidao.cod_certidao.toString().includes(searchId)
  );

  return (
    <div>
      <div className="search-container">
      {/* Campo de busca por ID */}
      <label htmlFor="searchId">Buscar por ID:</label>
      <input 
        type="text" 
        id="searchId" 
        name="searchId" 
        value={searchId} 
        onChange={(e) => setSearchId(e.target.value)} 
      />
    </div>

      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Âmbito</th>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Data de Criação</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredCertidoes.map((certidao) => (
            <Certidao
              codigo={certidao.cod_certidao}
              nome={certidao.nome}
              ambito={certidao.id_ambito}
              estado={certidao.estado}
              cidade={certidao.cidade}
              dataCriacao={certidao.data_criacao}
              status={certidao.id_status}
              onEditar={handleEditar}
              onExcluir={() => handleExcluir(certidao.cod_certidao)} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertidoesList;
