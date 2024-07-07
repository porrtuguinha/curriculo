import React from 'react';

const Sobre = ({ bio, email, phone, website }) => {
  return (
    <section>
      <h2>Sobre Mim</h2>
      <p>{bio}</p>
      <ul>
        <li>Email: {email}</li>
        <li>Telefone: {phone}</li>
      </ul>
    </section>
  );
}

export default Sobre;