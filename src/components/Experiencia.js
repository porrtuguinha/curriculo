import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experiencia = () => {
  const experiences = [
    {
      company: 'Galleria Bank',
      position: 'Desenvolvedor Fullstack',
      period: 'Abril 2023 - julho 2024',
      description: 'Desenvolvimento de JSF e microserviços'
    },
  ];

  return (
    <section>
      <h2>Experiência Profissional</h2>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          company={experience.company}
          position={experience.position}
          period={experience.period}
          description={experience.description}
        />
      ))}
    </section>
  );
}

export default Experiencia;