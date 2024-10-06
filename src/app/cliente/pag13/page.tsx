'use client';

import Link from 'next/link';
import React from 'react';
import styles from './pag13.module.css';
import Image from 'next/image';
import pix from "@/public/pix.png";

export default function PixPage() {
    return (
      <div className={styles.container}>
        <Link href="http://localhost:3000/cliente/">
        <button className={styles.back_button}>VOLTAR</button></Link>
        <div className={styles.content}>
          <p>Pedido N: XXXXXX</p>
          <p>Valor da Compra: R$ XX,XX</p>
          <div className={styles.card_icon}>
            <Image className={styles.img} src={pix} width={200} height={200} alt="pix"></Image>
          </div>
          <h2 className={styles.title}>PIX</h2>
          <p className={styles.question}>Confirma a forma de pagamento?</p>
          <Link href="http://localhost:3000/cliente/">
          <button className={styles.confirm_button}>CONCLUIR</button></Link>
        </div>
      </div>
    );
  }
