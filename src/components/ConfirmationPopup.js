// ConfirmationPopup.js
import React from 'react';
import { Modal, Button } from 'antd';

const ConfirmationPopup = ({ visible, onCancel, onConfirm, codigo, nome }) => {
  return (
    <Modal
      visible={visible}
      title="Confirmação de Exclusão"
      onCancel={onCancel}
      footer={[
        <Button key="cancelar" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="confirmar" type="danger" onClick={() => onConfirm(codigo)}>
          Confirmar
        </Button>,
      ]}
    >
      <p>Deseja realmente excluir esta certidão?</p>
      <p><strong>Código:</strong> {codigo}</p>
      <p><strong>Nome:</strong> {nome}</p>
      <p><em>Esta ação não pode ser desfeita.</em></p>
    </Modal>
  );
};

export default ConfirmationPopup;
