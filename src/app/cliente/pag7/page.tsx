'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag7.module.css';
import Image from 'next/image';
import check from "@/public/check7.png"

export default function Page() {
    return (
      <div className={styles.container}>
        <div className={styles.message}>
          <h1 className={styles.h1}>ALTERAÇÕES REALIZADAS COM SUCESSO</h1>
        </div>
        <div className={styles.check_mark}>
            <Image className={styles.img} src={check} width={200} height={200} alt="check"></Image>
        </div>
        <Link href="http://localhost:3000/cliente/pag2">
        <button className={styles.button}>RETORNAR À PÁGINA INICIAL</button></Link>
      </div>
    );
  }