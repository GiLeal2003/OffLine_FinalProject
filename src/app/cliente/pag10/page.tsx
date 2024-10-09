'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag10.module.css';

export default function Page() {
    const [nomeEstabelecimento] = useState('Lanchonete');
    const [pedido] = useState('');
    const [valor] = useState('');
    const [data] = useState('');
    const [hora] = useState('');
    const [subtotal] = useState('');
    const [desconto] = useState('');
    const [cupom] = useState('');
    const [couponEnabled, setCouponEnabled] = useState(false);
  
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="http://localhost:3000/cliente/pag32">
            <button className={styles.back_button}>VOLTAR</button>
          </Link>
        </div>
        
        <h1 className={styles.h1}>Minha sacola</h1>
        <div className={styles.details}>
          <p>Nome Estabelecimento: {nomeEstabelecimento}</p>
          <p>Pedido N: {pedido}</p>
          <p>DATA: {data}</p>
          <p>Horário: {hora}</p>
        </div>
        
        <div className={styles.coupon}>
          <p>Adicionar cupom de desconto</p>
          <label className={styles.switch}>
            <input type="checkbox" checked={couponEnabled} onChange={() => setCouponEnabled(!couponEnabled)} />
            <span className={styles.slider}></span>
          </label>
        </div>
        
        <div className={styles.summary}>
          <h2 className={styles.h2}>Resumo do Pedido</h2>
          <ul>
            <li>
              <span className={styles.title}>Subtotal</span>
              <span className={styles.value}>R$ {subtotal}</span>
            </li>
            <li>
              <span className={styles.title}>Desconto</span>
              <span className={styles.value}>R$ {desconto}</span>
            </li>
            <li>
              <span className={styles.title}>Cupom</span>
              <span className={styles.value}>R$ {cupom}</span>
            </li>
            <li>
              <span className={styles.title}>Total</span>
              <span className={styles.value}>R$ {valor}</span>
            </li>
          </ul>
        </div>
        
        <Link href="http://localhost:3000/cliente/pag11">
          <button className={styles.pagar_button}>PAGAR</button>
        </Link>

        <Link href="http://localhost:3000/cliente/pag8">
          <button className={styles.cancelar_button}>Cancelar pedido</button>
        </Link>
      </div>
    );
}
