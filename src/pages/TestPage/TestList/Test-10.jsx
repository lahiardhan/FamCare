import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test10() {
  const [score, setScore] = useState(localStorage.getItem("test10") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test10", e.target.value);
  }

  return (
    <TestSection 
      no="10"
      title="Gejala Respiratori (Pernapasan)"
      score={score}
      onSliderChange={onSliderChange}
      image='test10-images.svg'
      prev='/test9'
      next='/test11'
      description="Seberapa besar anda sedang mengalami gejala seperti rasa tertekan atau sempit di dada, perasaan tercekik, merasa nafas pendek / sesak, sering menarik napas panjang untuk saat ini ?" 
    />
  );
};

export default Test10;
