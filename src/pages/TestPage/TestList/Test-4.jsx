import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test4() {
  const [ score, handleScoreChange ] = useScoreInput('test4');

  return (
    <TestSection 
      no="4"
      title="Gangguan Tidur"
      score={score}
      onSliderChange={handleScoreChange}
      image='test4-images.svg'
      prev='/test3'
      next='/test5'
      description="Seberapa besar anda sedang mengalami gejala seperti sukar masuk tidur, terbangun pada malam hari, tidur tidak nyenyak, bangun dengan lesu, banyak mimpi-mimpi, mimpi buruk, mimpi menakutkan untuk saat ini ?" 
    />
  );
};

export default Test4;
