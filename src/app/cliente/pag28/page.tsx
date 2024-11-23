'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag28.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import tokenimg from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";
import qrcode from "@/public/qrcode.png";


interface Props {
    nomeEstabelecimento: string;
    pedido: string;
    valor: string;
    data: string;
    token: string;
  }
  
  export default function Page() {
    const [nomeEstabelecimento] = useState('');
    const [pedido] = useState('');
    const [valor] = useState('');
    const [data] = useState('');
    const [token] = useState('');
      return (
        <div className={styles.container}>
            <Link href="http://localhost:3000/cliente/pag27">
            <button className={styles.back_button}>VOLTAR</button></Link>
          <h1 className={styles.h1}>TOKEN</h1>
          <div className={styles.details}>
          <p className={styles.text}>Estabelecimento 2{nomeEstabelecimento}</p>
            <p className={styles.text}>Data: 22/11/2024{data}</p>
            <p className={styles.text}>Pedido Nº: 12345{pedido}</p>
            <p className={styles.text}>Valor da Compra: R$ 20,00{valor}</p>
            <p className={styles.text}>{token}</p>
          </div>
          <div className={styles.qr_code}>
            <Image className={styles.img} src={qrcode} width={200} height={200} alt="qrcode"></Image>
          </div>
          <p className={styles.info}>Status: <span className={styles.confirmed}>Confirmado</span></p>

          <div className={styles.footer}>
          <Link href="http://localhost:3000/cliente/pag8">
          <button className={styles.button}>
            <Image src={home} width={30} height={30} alt="home"></Image>
            </button></Link>

            <Link href="http://localhost:3000/cliente/pag31">
            <button className={styles.button}>
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