import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test8() {
  const [ score, handleScoreChange ] = useScoreInput('test8');

  return (
    <TestSection 
      no="8"
      title="Gejala Somatik (Sensorik)"
      score={score}
      onSliderChange={handleScoreChange}
      image='test8-images.svg'
      prev='/test7'
      next='/test9'
      description="Seberapa besar anda sedang mengalami gejala seperti tinnitus, penglihatan kabur, muka merah dan pucat, merasa lemah, perasaan ditusuk-tusuk untuk saat ini ?" 
    />
  );
};

export default Test8;
