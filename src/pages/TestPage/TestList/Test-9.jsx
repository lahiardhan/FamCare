import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test9() {
  const [ score, handleScoreChange ] = useScoreInput('test9');

  return (
    <TestSection 
      no="9"
      title="Gejala Kardiovaskuler (Jantung)"
      score={score}
      onSliderChange={handleScoreChange}
      image='test9-images.svg'
      prev='/test8'
      next='/test10'
      description="Seberapa besar anda sedang mengalami gejala seperti takikardi (denyut jantung cepat), berdebar-debar, nyeri dada, denyut nadi mengeras, rasa lesu/lemas seperti mau pingsan untuk saat ini ?" 
    />
  );
};

export default Test9;
