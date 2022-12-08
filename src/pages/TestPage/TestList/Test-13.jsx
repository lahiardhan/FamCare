import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test13() {
  const [ score, handleScoreChange ] = useScoreInput('test13');

  return (
    <TestSection 
      no="13"
      title="Gejala Otonom"
      score={score}
      onSliderChange={handleScoreChange}
      image='test13-images.svg'
      prev='/test12'
      next='/test14'
      description="Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ?" 
    />
  );
};

export default Test13;
