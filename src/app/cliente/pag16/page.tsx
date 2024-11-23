'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag16.module.css';

export default function Page() {
    const [pedido] = useState('');
    const [valor] = useState('');
    const [data] = useState('');
  
    return (
      <div className={styles.container}>
      <p>Pedido Nº: 12345{pedido}</p>
      <p>Data: 22/11/2024{data}</p>
      <p className={styles.space}>Valor da Compra: R$ 20,00{valor}</p>
      <div className={styles.body}>
      <h2 className={styles.title}>Pagamento aprovado</h2>
      <div className={styles.footer}>
      <Link href="http://localhost:3000/cliente/pag17">
      <button className={styles.center}>CONCLUIR</button></Link>
      </div>
      </div>
    </div>
  );
}
