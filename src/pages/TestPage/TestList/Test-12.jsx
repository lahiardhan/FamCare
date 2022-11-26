import React, { useState } from 'react';
import TestSection from '../../components/organisms/TestSection';

function Test12() {
  const [score, setScore] = useState(localStorage.getItem("test12") || 0);

  function onSliderChange(e) {
    setScore(e.target.value);
    localStorage.setItem("test12", e.target.value);
  }

  return (
    <TestSection 
      no="12"
      title="Gejala Urogentinal (Alat kelamin)"
      score={score}
      onSliderChange={onSliderChange}
      image='test12-images.svg'
      prev='/test11'
      next='/test13'
      description="Seberapa besar anda sedang mengalami gejala seperti sering buang air kecil atau kencing, tidak dapat menahan kencing, Amenorrhea (Tidak haid/telat haid pada perempuan), Menorrhagia (Haid yang banyak dan lama pada perempuan) untuk saat ini ?" 
    />
  );
};

export default Test12;
