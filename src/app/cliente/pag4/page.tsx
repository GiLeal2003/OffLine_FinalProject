'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag4.module.css';

interface Props {
  onSubmit: (telefone: string) => void;
}

const EsqueciSenha: React.FC<Props> = ({ onSubmit }) => {
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(telefone);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <Link href="http://localhost:3000/cliente/pag2">
        <button className={styles.back_button}>VOLTAR</button></Link>
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>ESQUECI MINHA SENHA</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor="telefone">TELEFONE:</label>
            <input
              type="text"
              id="telefone"
              value={telefone}
              className={styles.input}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          
        </form>
      </div>
      <Link href="http://localhost:3000/cliente/pag5">
      <button type="submit" className={styles.send_button}>ENVIAR</button></Link>
    </div>
  );
};

export default EsqueciSenha;