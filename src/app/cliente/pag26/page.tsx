'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag26.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import tokenimg from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";

  export default function Page() {
    const [nomeEstabelecimento] = useState('');
    const [pedido] = useState('');
    const [valor] = useState('');
    const [data] = useState('');
    const [hora] = useState('');
    const [token] = useState('');
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.p}>Estabelecimento{nomeEstabelecimento}</p>
          <p className={styles.p}>Pedido Nº: {pedido}</p>
          <p className={styles.text}>Valor da Compra: R$ {valor}</p>

          <p className={styles.p}>DIA/MÊS/ANO: {data}</p>
          <p className={styles.p}>Horário: {hora}</p>
          <p className={styles.p}>Nº do token: {token}</p>

          <h1 className={styles.h1}>Novo horário agendado com sucesso!</h1>

          <Link href="http://localhost:3000/cliente/pag8">
          <button className={styles.buttonC}>VOLTAR MENU PRINCIPAL</button></Link>
        </div>

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
