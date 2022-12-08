import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test3() {
  const [ score, handleScoreChange ] = useScoreInput('test3');

  return (
    <TestSection 
      no="3"
      title="Ketakutan"
      score={score}
      onSliderChange={handleScoreChange}
      image='test3-images.svg'
      prev='/test2'
      next='/test4'
      description="Seberapa besar anda sedang mengalami gejala seperti ketakutan pada gelap, ketakutan ditinggal sendiri, ketakutan pada orang asing, ketakutan pada binatang besar untuk saat ini ?" 
    />
  );
};

export default Test3;
