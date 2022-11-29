import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test10() {
  const [ score, handleScoreChange ] = useScoreInput('test10');

  return (
    <TestSection 
      no="10"
      title="Gejala Respiratori (Pernapasan)"
      score={score}
      onSliderChange={handleScoreChange}
      image='test10-images.svg'
      prev='/test9'
      next='/test11'
      description="Seberapa besar anda sedang mengalami gejala seperti rasa tertekan atau sempit di dada, perasaan tercekik, merasa nafas pendek / sesak, sering menarik napas panjang untuk saat ini ?" 
    />
  );
};

export default Test10;
