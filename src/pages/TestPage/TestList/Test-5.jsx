import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test5() {
  const [ score, handleScoreChange ] = useScoreInput('test5');

  return (
    <TestSection 
      no="5"
      title="Gangguan Kecerdasan"
      score={score}
      onSliderChange={handleScoreChange}
      image='test5-images.svg'
      prev='/test4'
      next='/test6'
      description="Seberapa besar anda sedang mengalami gejala seperti sukar berkonsentrasi, daya ingat buruk, daya ingat menurun untuk saat ini ?" 
    />
  );
};

export default Test5;
