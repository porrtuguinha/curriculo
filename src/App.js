import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Formacao from './components/Formacao';

import './App.css';

function App() {
  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Java',
    'PostgreSQL',
    'SQL',
    'Git',
    'Python',
    'Angular',
    'Primeng',
    'Primefaces',
    "Inglês avançado"

  ];
  return (
    <div className="App">
      <Header name="Thiago Henrique Bortolozo da Silva" profession="Desenvolvedor Fullstack" />
      <div className="container">
        <Sobre
          bio="Olá, sou Thiago Henrique Bortolozo. Sou desenvolvedor fullstack e trabalho com os mais variados tipos de linguagens mas a minha principal é java e a framework angular. Meu objetivo é sempre estar aprendendo e me aprimorando para trabalhos futuros"
          email="portuga-silva@uol.com.br"
          phone="(19) 99108-5305"
        />
        <Experiencia />
        <Formacao />
        <Skills skills={skills} />
      </div>
    </div>
  );
}
export default App