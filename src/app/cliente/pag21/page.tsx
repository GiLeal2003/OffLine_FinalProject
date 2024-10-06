'use client';

import Link from 'next/link';
import React from 'react';
import styles from './pag21.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import token from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";


interface Props {
  pedido: string;
  valor: string;
  data: string;
  hora: string;
  token: string;
}

export default function Page({ pedido, valor, data, hora, token }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
        <Link href="http://localhost:3000/cliente/">
        <button className={styles.voltar}>VOLTAR</button></Link>
        </div>
        <div className={styles.pedido_info}>
          <p>Pedido N: {pedido}</p>
          <p>Valor da Compra: R$ {valor}</p>
          <p className={styles.conj}>DIA/MÊS/ANO{data}</p>
          <p>Horário: {hora}</p>
          <p>Número do token: {token}</p>
        </div>
        <div className={styles.actions}>
        <Link href="http://localhost:3000/cliente/">
        <button className={styles.cancelar}>CANCELAR PEDIDO</button></Link>

        <Link href="http://localhost:3000/cliente/">
        <button className={styles.reagendar}>REAGENDAR HORÁRIO DE RETIRADA DO PEDIDO</button></Link>

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