import React, { useState } from 'react';
import TestSection from '../../../components/organisms/TestSection';

function Test5() {
  const [score, setScore] = useState(localStorage.getItem("test5") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test5", e.target.value);
  }

  return (
    <TestSection 
      no="5"
      title="Gangguan Kecerdasan"
      score={score}
      onSliderChange={onSliderChange}
      image='test5-images.svg'
      prev='/test4'
      next='/test6'
      description="Seberapa besar anda sedang mengalami gejala seperti sukar berkonsentrasi, daya ingat buruk, daya ingat menurun untuk saat ini ?" 
    />
  );
};

export default Test5;
