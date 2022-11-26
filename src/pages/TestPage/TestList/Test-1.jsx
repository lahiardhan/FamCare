import React, { useState } from 'react';
import TestSection from '../../../components/organisms/TestSection';

function Test1() {
  const [score, setScore] = useState(localStorage.getItem("test1") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test1", e.target.value);
  }

  return (
    <TestSection
      no="1"
      title="Perasaan Ansietas / Kecemasan"
      score={score}
      onSliderChange={onSliderChange}
      image='test1-images.svg'
      next='/test2'
      description="Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ?" 
    />
  );
};

export default Test1;