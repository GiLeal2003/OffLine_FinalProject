'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag18.module.css';

export default function Page() {
  const [pedido] = useState('');
  const [valor] = useState('');
  const [data] = useState('');
  const [token] = useState('');
  const [hora] = useState('');
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Pedido Nº: {pedido}</p>
          <p>Valor da Compra: R$ {valor}</p>
          <p>Data: {data}</p>
          <p>Horário: {hora}</p>
        </div>
        <div className={styles.content}>
          <p>Número do token: {token}</p>
          <p className={styles.you}>Você confirma a retirada do pedido?</p>
        </div>
        <div className={styles.button_container}>
        <Link href="http://localhost:3000/cliente/pag19">
        <button className={styles.confirm_button}>CONFIRMO</button></Link>
        <Link href="http://localhost:3000/cliente/pag21">
        <button className={styles.cancel_button}>Não confirmo</button></Link>
        </div>
      </div>
    );
  }

