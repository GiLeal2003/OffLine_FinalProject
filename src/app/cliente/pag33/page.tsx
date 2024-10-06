'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag33.module.css';


export default function PagamentoAprovado() {
    return (
      <div className={styles.container}>
        
        <div className={styles.header}>
        <Link href="http://localhost:3000/cliente/">
        <button className={styles.backButton}>VOLTAR</button></Link>

        </div>
        <h1 className={styles.title}>PEDIDO NÚMERO 12598</h1>
        <div className={styles.total}>
          <span>VALOR DA COMPRA</span>
          <span className={styles.price}>R$ 58,50</span>
        </div>
        <h1 className={styles.title2}>Pagamento aprovado</h1>
        
        <Link href="http://localhost:3000/cliente/">
        <button className={styles.confirmButton}>CONCLUIR</button></Link>
      </div>
    );
  }