import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test7() {
  const [score, setScore] = useState(localStorage.getItem("test7") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test7", e.target.value);
  }

  return (
    <TestSection 
      no="7"
      title="Gejala Somatik (Otot)"
      score={score}
      onSliderChange={onSliderChange}
      image='test7-images.svg'
      prev='/test6'
      next='/test8'
      description="Seberapa besar anda sedang mengalami gejala seperti nyeri pada otot, kaku kedutan otot, gigi gemerutuk, suara tidak stabil untuk saat ini ?" 
    />
  );
};

export default Test7;
