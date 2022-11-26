import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test13() {
  const [score, setScore] = useState(localStorage.getItem("test13") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test13", e.target.value);
  }

  return (
    <TestSection 
      no="13"
      title="Gejala Otonom"
      score={score}
      onSliderChange={onSliderChange}
      image='test13-images.svg'
      prev='/test12'
      next='/test14'
      description="Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ?" 
    />
  );
};

export default Test13;
