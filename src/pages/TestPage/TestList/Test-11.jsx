import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test11() {
  const [ score, handleScoreChange ] = useScoreInput('test11');

  return (
    <TestSection 
      no="11"
      title="Gejala Gastrointestinal (Pencernaan)"
      score={score}
      onSliderChange={handleScoreChange}
      image='test11-images.svg'
      prev='/test10'
      next='/test12'
      description="Seberapa besar anda sedang mengalami gejala seperti sulit menelan, mual, perut melilit, gangguan pencernaan, nyeri lambung sebelum dan setelah makan, perut terasa kembung atau penuh untuk saat ini ?" 
    />
  );
};

export default Test11;
