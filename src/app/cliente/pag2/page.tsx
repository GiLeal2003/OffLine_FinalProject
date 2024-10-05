'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, TextField, IconButton } from '@mui/material';
import styles from './pag2.module.css';
import Image from 'next/image';
import Logo from "@/public/logo_offline.jpg";

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Login');
  };

  const handleForgotPassword = () => {
    console.log('Esqueci minha senha');
  };

  const handleRegister = () => {
    console.log('Registre-se');
  };

  return (

    <div className={styles.container}>
    
    <Link href="http://localhost:3000/cliente/pag1">
    <button className={styles.back_button} >VOLTAR</button></Link>
    <div className={styles.header}>
    <Image src={Logo} width={200} height={200} alt="Logo"></Image>
      <TextField
        label="Usuário"
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        margin="normal"
      />
      <Link href="http://localhost:3000/cliente/pag8">
      <button className={styles.button} onClick={handleLogin}>ENTRAR</button></Link>
      
      <Link href="http://localhost:3000/cliente/pag4">
      <Button onClick={handleForgotPassword}>
        Esqueci minha senha
      </Button></Link>

      <Link href="http://localhost:3000/cliente/pag3">
      <Button onClick={handleRegister}>
        Cadastre-se
      </Button></Link>
      </div>
    </div>
  );
}