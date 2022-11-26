import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test14() {
  const [score, setScore] = useState(localStorage.getItem("test14") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test14", e.target.value);
  }

  return (
    <TestSection 
      no="14"
      title="Gejala Tingkah Laku"
      score={score}
      onSliderChange={onSliderChange}
      image='test14-images.svg'
      prev='/test13'
      next='/hasiltest'
      description="Seberapa besar anda sedang mengalami gejala seperti gelisah, tidak tenang, jari gemetar, mengerutkan dahi atau kening, muka tegang untuk saat ini ?" 
    />
  );
};

export default Test14;
