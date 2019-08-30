import React, { useState, useEffect } from 'react';
import { Layout } from "../../components";
import MediaQuery from "react-responsive";
import apiService from '../../config/api';

export default function Contact() {
  async function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);
    await apiService.post('submit', data)
  }
  return (
    <Layout>
        <div className="row">
          <h1>Contato</h1>
        </div>
        <div className="contactContainer">
          <div>
            <p>Matheus Veras</p>
            <p>matheus.versa@lobofrontal.com.br</p>
            <p>Fale direto no whastapp:</p>
          </div>
          <div>
            <form onSubmit={() => sendMail()}>
              <input type="text" placeholder="Nome" onChange={() => {}} />
              <input type="text" placeholder="E-mail" onChange={() => {}} />
              <input type="text" placeholder="Telefone" onChange={() => {}} />
              <textarea onChange={() => {}}></textarea>
              <input type="submit" value="Enviar email" />
            </form>
          </div>
        </div>
    
    </Layout>
  );
}
