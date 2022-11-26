import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test6() {
  const [score, setScore] = useState(localStorage.getItem("test6") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test6", e.target.value);
  }

  return (
    <TestSection 
      no="6"
      title="Perasaan Depresi"
      score={score}
      onSliderChange={onSliderChange}
      image='test6-images.svg'
      prev='/test5'
      next='/test7'
      description="Seberapa besar anda sedang mengalami gejala seperti kehilangan minat, sedih, bangun dini hari, kurangnya kesenangan pada hobi, perasaan berubah sepanjang hari untuk saat ini ?" 
    />
  );
};

export default Test6;
