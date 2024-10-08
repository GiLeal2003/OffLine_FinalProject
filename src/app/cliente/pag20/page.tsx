'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag20.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import tokenimg from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";
import perfil from "@/public/perfil.png";
import qrcode from "@/public/qrcode.png";

export default function Page() {
  const [nomeEstabelecimento] = useState('');
  const [pedido] = useState('');
  const [valor] = useState('');
  const [data] = useState('');
  const [token] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
      <div className={styles.container}>
        
      <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image src={perfil} width={40} height={40} alt="perfil"></Image>
          </div>
          <p>Nome do Usuário</p>
        </div>
      </header>

        <h1 className={styles.h1}>TOKEN</h1>
        <div className={styles.details}>
        <p className={styles.text}>Estabelecimento {nomeEstabelecimento}</p>
          <p className={styles.text}>Data: {data}</p>
          <p className={styles.text}>Pedido N: {pedido}</p>
          <p className={styles.text}>Valor da Compra: R$ {valor}</p>
          <p className={styles.text}>{token}</p>
          <p className={styles.status}>Status: <span className={styles.confirmed}>Confirmado</span></p>
        </div>
        <div className={styles.qr_code}>
            <Image src={qrcode} width={150} height={150} alt="qrcode"></Image>
        </div>
        <p className={styles.info}>Apresente este QR Code na retirada do pedido</p>
        
        <Link href="http://localhost:3000/cliente/pag29">
        <button className={styles.continue_button}>PROSSEGUIR</button></Link>

        <div className={styles.footer}>
        
        <Link href="http://localhost:3000/cliente/pag8">
        <button className={styles.button}>
            <Image src={home} width={30} height={30} alt="home"></Image>
        </button></Link>

        <Link href="http://localhost:3000/cliente/pag31"><button className={styles.button}>
            <Image src={chat} width={30} height={30} alt="chat"></Image>
        </button></Link>

        <Link href="http://localhost:3000/cliente/pag27">
        <button className={styles.button}>
            <Image src={tokenimg} width={40} height={40} alt="tokenimg"></Image>
        </button></Link>

        <Link href="http://localhost:3000/cliente/pag9">
        <button className={styles.button}>
            <Image src={menu} width={30} height={30} alt="menu"></Image>
        </button></Link>
      </div>
      </div>
    );
  }