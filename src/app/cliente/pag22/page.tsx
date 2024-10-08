'use client';

import Link from 'next/link';
import React from 'react';
import styles from './pag22.module.css';
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
  token: string;
}

export default function Page({ nomeEstabelecimento, pedido, valor, data, hora, token }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Nome do Estabelecimento{nomeEstabelecimento}</p>
          <p>Pedido Nº: {pedido}</p>
          <p>Valor da Compra: R$ {valor}</p>
          <p>DIA/MÊS/ANO{data}</p>
          <p>Horário: {hora}</p>
        </div>
        <div className={styles.content}>
          <p>Número do token: {token}</p>
          <p className={styles.you}>Você confirma o cancelamento do pedido?</p>
        </div>
        <div className={styles.button_container}>
        <Link href="http://localhost:3000/cliente/pag23">
        <button className={styles.confirm_button}>CONFIRMO</button></Link>

        <Link href="http://localhost:3000/cliente/pag30">
        <button className={styles.cancel_button}>Não confirmo</button></Link>

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
            <Image src={token} width={40} height={40} alt="token"></Image>
          </button></Link>

          <Link href="http://localhost:3000/cliente/pag9">
          <button className={styles.button}>
            <Image src={menu} width={30} height={30} alt="menu"></Image>
          </button></Link>
          
        </div>
      </div>
    );
  }