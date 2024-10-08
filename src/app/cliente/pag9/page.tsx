'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag9.module.css';
import Image from 'next/image';
import perfil from "@/public/perfil.png";

interface PageProps {
    onLogout: () => void;
  }
  
  export default function Page() {
    const handleLogout = () => {
      console.log('Logout clicked!');
    };
  

    return (
      <div className={styles.container}>
        <Link href="http://localhost:3000/cliente/pag8">
        <button className={styles.back_button}>VOLTAR</button>
        </Link>
        <div className={styles.header}>
        <div className={styles.user_menu}>
          <div className={styles.user_info}>
            <Image className={styles.img} src={perfil} width={80} height={80} alt="perfil"></Image>
          </div>
          <span className={styles.user_name}>NOME DO USUÁRIO</span>
          <ul className={styles.user_menu_list}>
            <li>
            <Link href="#">Dados Pessoais</Link>
            </li>
            <li>
            <Link href="#">Histórico de Compras</Link>
            </li>
            <li>
            <Link href="#">Favoritos</Link>
            </li>
            <li>
            <Link href="#">Acessibilidade</Link>
            </li>
            <li>
            <Link href="http://localhost:3000/cliente/pag27">Tokens</Link>
            </li>
            <li>
            <Link href="http://localhost:3000/cliente/pag22">Cancelar Pedido</Link>
            </li>
            <li>
            <Link href="http://localhost:3000/cliente/pag24">Reagendar pedido</Link>
            </li>
            <li>
            <Link href="#">Configurações</Link>
            </li>
            <Link href="http://localhost:3000/cliente/pag1">
            <button className={styles.logout_button} onClick={handleLogout}>
                SAIR
              </button></Link>
          </ul>
        </div>
        </div>
      </div>
    );
  }