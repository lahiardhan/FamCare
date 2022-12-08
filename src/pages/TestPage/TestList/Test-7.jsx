import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test7() {
  const [ score, handleScoreChange ] = useScoreInput('test7');

  return (
    <TestSection 
      no="7"
      title="Gejala Somatik (Otot)"
      score={score}
      onSliderChange={handleScoreChange}
      image='test7-images.svg'
      prev='/test6'
      next='/test8'
      description="Seberapa besar anda sedang mengalami gejala seperti nyeri pada otot, kaku kedutan otot, gigi gemerutuk, suara tidak stabil untuk saat ini ?" 
    />
  );
};

export default Test7;
