'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag11.module.css';
import Image from 'next/image';
import credito from "@/public/credito.png";
import debito from "@/public/debito.jpg";
import pix from "@/public/pix.png";
import vr from "@/public/vr.jpeg";



export default function Page() {
    return (
      <div className={styles.container}>
        <Link href="http://localhost:3000/cliente/">
        <button className={styles.back_button}>VOLTAR</button></Link>
        
        <h1 className={styles.h1}>Formas de Pagamento</h1>
        
        <h2 className={styles.h2}>PAQUE PELO APP</h2>
        
        <h3 className={styles.h3}>Escolha uma opção abaixo:</h3>
        
        <div className={styles.payment_section}>
          <h4 className={styles.h4}>Meus cartões</h4>
          
          <Link href="http://localhost:3000/cliente/">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
                <Image src={credito} width={45} height={40} alt="credito"></Image>
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>Crédito</p>
              <p>....8899</p>
            </div>
          </button></Link>

          <Link href="http://localhost:3000/cliente/">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
                <Image src={debito} width={45} height={40} alt="debito"></Image>
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>Débito</p>
              <p>....8899</p>
            </div>
          </button></Link>
          
          <h4 className={styles.h4}>Novo método de pagamento</h4>
          
          <Link href="http://localhost:3000/cliente/">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
                <Image src={pix} width={45} height={40} alt="pix"></Image>
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>PIX</p>
            </div>
          </button></Link>

          <Link href="http://localhost:3000/cliente/">
          <button className={styles.card_option}>
            <div className={styles.card_icon}>
                <Image src={vr} width={45} height={40} alt="vr"></Image>
            </div>
            <div className={styles.card_info}>
              <p className={styles.p}>VR</p>
            </div>
          </button></Link>
        </div>
      </div>
    );
  }