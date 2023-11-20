import React from 'react';

// Importe as imagens que deseja usar
import editarIcon from '../img/editar.png';
import excluirIcon from '../img/excluir.png';

const Certidao = ({ codigo, nome, ambito, estado, cidade, dataCriacao, status, onEditar, onExcluir }) => (
  <tr>
    <td>{codigo}</td>
    <td>{nome}</td>
    <td>{ambito}</td>
    <td>{estado}</td>
    <td>{cidade}</td>
    <td>{dataCriacao}</td>
    <td>{status}</td>
    <td>
      <img src={editarIcon} alt="Editar" onClick={() => onEditar(codigo)} />
      <img src={excluirIcon} alt="Excluir" onClick={() => onExcluir(codigo)} />
    </td>
  </tr>
);

export default Certidao;
