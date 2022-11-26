import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test2() {
  const [score, setScore] = useState(localStorage.getItem("test2") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test2", e.target.value);
  }

  return (
    <TestSection 
      no="2"
      title="Ketegangan"
      score={score}
      onSliderChange={onSliderChange}
      image='test2-images.svg'
      prev='/test1'
      next='/test3'
      description="Seberapa besar anda sedang mengalami gejala seperti merasa tegang, lesu, tidak dapat istirahat tenang, mudah terkejut, mudah menangis, gemetar, gelisah untuk saat ini ?" 
    />
  );
};

export default Test2;
