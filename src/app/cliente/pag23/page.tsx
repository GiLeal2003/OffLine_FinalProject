'use client';

import Link from 'next/link';
import React from 'react';
import styles from './pag23.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import token from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";

interface Props {
    nomeEstabelecimento: string;
    pedido: string;
    valor: string;
    data: string;
    hora: string;
  }

  
  export default function Page({ nomeEstabelecimento, pedido, valor, data, hora }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.p}>Estabelecimento{nomeEstabelecimento}</p>
          <p className={styles.p}>Pedido Nº: {pedido}</p>
          <p className={styles.text}>Valor da Compra: R$ {valor}</p>

          <p className={styles.p}>DIA/MÊS/ANO: {data}</p>
          <p className={styles.p}>Horário: {hora}</p>

          <h1 className={styles.h1}>Cancelamento realizado com sucesso!</h1>

          <Link href="http://localhost:3000/cliente/">
          <button className={styles.buttonC}>VOLTAR MENU PRINCIPAL</button></Link>
        </div>

        <div className={styles.footer}>
        <Link href="http://localhost:3000/cliente/">
        <button className={styles.button}>
            <Image src={home} width={30} height={30} alt="home"></Image>
        </button></Link>

          <Link href="http://localhost:3000/cliente/">
          <button className={styles.button}>
            <Image src={chat} width={30} height={30} alt="chat"></Image>
          </button></Link>

          <Link href="http://localhost:3000/cliente/">
          <button className={styles.button}>
            <Image src={token} width={40} height={40} alt="token"></Image>
          </button></Link>
          <Link href="http://localhost:3000/cliente/">
          <button className={styles.button}>
            <Image src={menu} width={30} height={30} alt="menu"></Image>
          </button></Link>
          
        </div>
      </div>
    );
    
  }
