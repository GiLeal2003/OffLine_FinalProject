'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag34.module.css';

interface ProdutoItem {
  nome: string;
  qtde: string;
  preco: string;
  subtotal: string;
}

const produtoItems: ProdutoItem[] = [
  { nome: 'Queijo Quente', qtde: '01', preco: 'R$ 5,00', subtotal: 'R$ 5,00' },
  { nome: 'Pão com Ovo', qtde: '01', preco: 'R$ 5,00', subtotal: 'R$ 5,00' },
  { nome: 'Suco de Limão', qtde: '01', preco: 'R$ 10,00', subtotal: 'R$ 10,00' },
];

export default function SacolaPedido() {
  return (
    <div className={styles.container}>
  
      <div className={styles.header}>
      <Link href="http://localhost:3000/cliente/pag30">
        <button className={styles.backButton}>VOLTAR</button></Link>
      </div>
      <h1 className={styles.title}>Minha Sacola</h1>
      <div className={styles.total}>
        <span>VALOR TOTAL</span>
        <span className={styles.price}>R$ 20,00</span>
      </div>
      <span className={styles.pending}>Pagamento Pendente</span>
      <div className={styles.produtoList}>
        <div className={styles.produtoItemTitle}>
          <span className={styles.item}>Itens</span>
          <span className={styles.item}>Qtde</span>
          <span className={styles.item}>R$ Unid</span>
          <span className={styles.item}>Subtotal</span>
        </div>
        {produtoItems.map((item, index) => (
          <div key={index} className={styles.produtoItem}>
            <span className={styles.produto}>{item.nome}</span>
            <span className={styles.produto}>{item.qtde}</span>
            <span className={styles.produto}>{item.preco}</span>
            <span className={styles.produtoSubtotal}>{item.subtotal}</span>
          </div>
        ))}
      </div>
      <Link href="http://localhost:3000/cliente/pag32">
      <button className={styles.confirmButton}>PAGAR</button></Link>
    </div>
  );
}