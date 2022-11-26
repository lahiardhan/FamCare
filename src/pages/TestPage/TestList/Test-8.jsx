import React, { useState } from 'react';
import TestSection from '../../../components/organisms/TestSection';

function Test8() {
  const [score, setScore] = useState(localStorage.getItem("test8") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test8", e.target.value);
  }

  return (
    <TestSection 
      no="8"
      title="Gejala Somatik (Sensorik)"
      score={score}
      onSliderChange={onSliderChange}
      image='test8-images.svg'
      prev='/test7'
      next='/test9'
      description="Seberapa besar anda sedang mengalami gejala seperti tinnitus, penglihatan kabur, muka merah dan pucat, merasa lemah, perasaan ditusuk-tusuk untuk saat ini ?" 
    />
  );
};

export default Test8;
