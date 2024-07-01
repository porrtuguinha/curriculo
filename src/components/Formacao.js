import React from 'react';
import EducationItem from './EducationItem';

const Formacao = () => {
  const educations = [
    {
      institution: 'Anhanguera',
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      period: '2021 - 2023',
      description: 'Desenvolvimento de habilidades em programação, algoritmos e estruturas de dados.'
    },
 
  ];

  return (
    <section>
      <h2>Formação Acadêmica</h2>
      {educations.map((education, index) => (
        <EducationItem
          key={index}
          institution={education.institution}
          course={education.course}
          period={education.period}
          description={education.description}
        />
      ))}
    </section>
  );
}

export default Formacao;