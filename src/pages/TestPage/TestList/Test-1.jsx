import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test1() {
  const [ score, handleScoreChange ] = useScoreInput('test1');

  return (
    <TestSection
      no="1"
      title="Perasaan Ansietas / Kecemasan"
      score={score}
      onSliderChange={handleScoreChange}
      image="test1-images.svg"
      next="/test2"
      description="Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ?" 
    />
  );
};

export default Test1;
