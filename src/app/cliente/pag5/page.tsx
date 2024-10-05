'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag5.module.css';


export default function Page() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(String);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/enviar-codigo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
    
      if (response.ok) {
        setError(String); 
        console.log('Código enviado com sucesso');
      } else {
        setError(() => 'Erro ao enviar código');
      }
    } catch (error) {
      console.error(error);
      setError(() => 'Erro ao enviar código');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Inserir o código</h1>
      <input className={styles.input} type="text" value={code} onChange={handleCodeChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Link href="http://localhost:3000/cliente/pag6">
      <button className={styles.button} onClick={handleSubmit}>Enviar</button></Link>

      <p className={styles.p}>Não recebeu o código de validação?</p>

      <Link href="http://localhost:3000/cliente/pag4">
      <button className={styles.button}>Clique aqui para enviar novamente</button></Link>
    </div>
  );
}