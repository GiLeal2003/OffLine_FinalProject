'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag17.module.css';

export default function Page() {
  const [nomeEstabelecimento] = useState('');
  const [pedido] = useState('');
  const [valor] = useState('');
  const [data] = useState('');
  const [token] = useState('');
  
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.center}>Pedido Nº: 12345{pedido}</p>
          <p className={styles.center}>Data: 22/11/2024{data}</p>
          <p className={styles.center}>Valor da Compra: R$ 20,00{valor}</p>
        </div>
        <div className={styles.body}>
          <p className={styles.center}>Estabelecimento 2{nomeEstabelecimento}</p>
          <p className={styles.title}>NÚMERO DE TOKEN de Retirada do Pedido</p>
          <p className={styles.title}>{token}</p>
          <Link href="http://localhost:3000/cliente/pag27"><button className={styles.transparent_button}>
            Acesse seu TOKEN
          </button></Link>
        </div>
        <div className={styles.footer}>
        <Link href="http://localhost:3000/cliente/pag8">
          <button className={styles.center}>CONCLUIR</button></Link>
        </div>
      </div>
    );
  }