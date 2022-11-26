import React, { useState } from 'react';
import TestSection from '../../../components/organisms/TestSection';

function Test9() {
  const [score, setScore] = useState(localStorage.getItem("test9") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test9", e.target.value);
  }

  return (
    <TestSection 
      no="9"
      title="Gejala Kardiovaskuler (Jantung)"
      score={score}
      onSliderChange={onSliderChange}
      image='test9-images.svg'
      prev='/test8'
      next='/test10'
      description="Seberapa besar anda sedang mengalami gejala seperti takikardi (denyut jantung cepat), berdebar-debar, nyeri dada, denyut nadi mengeras, rasa lesu/lemas seperti mau pingsan untuk saat ini ?" 
    />
  );
};

export default Test9;
