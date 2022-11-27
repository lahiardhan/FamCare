import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test2() {
  const [ score, handleScoreChange ] = useScoreInput('test2');

  return (
    <TestSection 
      no="2"
      title="Ketegangan"
      score={score}
      onSliderChange={handleScoreChange}
      image='test2-images.svg'
      prev='/test1'
      next='/test3'
      description="Seberapa besar anda sedang mengalami gejala seperti merasa tegang, lesu, tidak dapat istirahat tenang, mudah terkejut, mudah menangis, gemetar, gelisah untuk saat ini ?" 
    />
  );
};

export default Test2;
