'use client';

import Link from 'next/link';
import React, { useState, useRef } from 'react';
import styles from './pag31.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import token from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";

export default function Page() {
  const [messages, setMessages] = useState([
    {
      text: 'Seja bem-vindo!',
      sender: 'Estabelecimento',
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        {
          text: newMessage,
          sender: 'Você',
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setNewMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.chat_header}>
        <h3 className={styles.h3}>CHAT</h3>
        
      </div>
      <div className={styles.dropdown}>
          <button className={styles.dropdown_btn}>Selecione um estabelecimento</button>
          <div className={styles.dropdown_content}>
            <a href="#1">Lanchonete</a>
            <a href="#2">Cafeteria</a>
            <a href="#3">Doceria</a>
          </div>
        </div>
      <div className={styles.chat_messages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={styles.chat_message}
            style={{
              textAlign: message.sender === 'Você' ? 'right' : 'left',
            }}
          >
            <p>{message.text}</p>
            <span className={styles.chat_message_time}>
              {message.sender}: {message.time}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.chat_input_container}>
        <input
          className={styles.chat_input}
          type="text"
          placeholder="Escreva sua mensagem..."
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <button className={styles.chat_send_btn} onClick={sendMessage}>
          Enviar
        </button>
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