import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test3() {
  const [score, setScore] = useState(localStorage.getItem("test3") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test3", e.target.value);
  }

  return (
    <TestSection 
      no="3"
      title="Ketakutan"
      score={score}
      onSliderChange={onSliderChange}
      image='test3-images.svg'
      prev='/test2'
      next='/test4'
      description="Seberapa besar anda sedang mengalami gejala seperti ketakutan pada gelap, ketakutan ditinggal sendiri, ketakutan pada orang asing, ketakutan pada binatang besar untuk saat ini ?" 
    />
  );
};

export default Test3;
