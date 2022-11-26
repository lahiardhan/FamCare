import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test4() {
  const [score, setScore] = useState(localStorage.getItem("test4") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test4", e.target.value);
  }

  return (
    <TestSection 
      no="4"
      title="Gangguan Tidur"
      score={score}
      onSliderChange={onSliderChange}
      image='test4-images.svg'
      prev='/test3'
      next='/test5'
      description="Seberapa besar anda sedang mengalami gejala seperti sukar masuk tidur, terbangun pada malam hari, tidur tidak nyenyak, bangun dengan lesu, banyak mimpi-mimpi, mimpi buruk, mimpi menakutkan untuk saat ini ?" 
    />
  );
};

export default Test4;
