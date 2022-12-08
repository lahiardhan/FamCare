import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test6() {
  const [ score, handleScoreChange ] = useScoreInput('test6');

  return (
    <TestSection 
      no="6"
      title="Perasaan Depresi"
      score={score}
      onSliderChange={handleScoreChange}
      image='test6-images.svg'
      prev='/test5'
      next='/test7'
      description="Seberapa besar anda sedang mengalami gejala seperti kehilangan minat, sedih, bangun dini hari, kurangnya kesenangan pada hobi, perasaan berubah sepanjang hari untuk saat ini ?" 
    />
  );
};

export default Test6;
