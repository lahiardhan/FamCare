import React, { useState } from 'react';
import TestSection from '../../../components/organisms/TestSection';

function Test11() {
  const [score, setScore] = useState(localStorage.getItem("test11") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test11", e.target.value);
  }

  return (
    <TestSection 
      no="11"
      title="Gejala Gastrointestinal (Pencernaan)"
      score={score}
      onSliderChange={onSliderChange}
      image='test11-images.svg'
      prev='/test10'
      next='/test12'
      description="Seberapa besar anda sedang mengalami gejala seperti sulit menelan, mual, perut melilit, gangguan pencernaan, nyeri lambung sebelum dan setelah makan, perut terasa kembung atau penuh untuk saat ini ?" 
    />
  );
};

export default Test11;
