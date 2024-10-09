'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag21.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import tokenimg from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";

export default function Page() {
  const [pedido] = useState('');
  const [valor] = useState('');
  const [data] = useState('');
  const [token] = useState('');
  const [hora] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
    return (
      <div className={styles.container}>
        <div className={styles.header}>
        <Link href="http://localhost:3000/cliente/pag8">
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
        <Link href="http://localhost:3000/cliente/pag22">
        <button className={styles.cancelar}>CANCELAR PEDIDO</button></Link>

        <Link href="http://localhost:3000/cliente/pag24">
        <button className={styles.reagendar}>REAGENDAR HORÁRIO DE RETIRADA DO PEDIDO</button></Link>

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