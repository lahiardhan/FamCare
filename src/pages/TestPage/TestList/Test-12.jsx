import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test12() {
  const [ score, handleScoreChange ] = useScoreInput('test12');

  return (
    <TestSection 
      no="12"
      title="Gejala Urogentinal (Alat kelamin)"
      score={score}
      onSliderChange={handleScoreChange}
      image='test12-images.svg'
      prev='/test11'
      next='/test13'
      description="Seberapa besar anda sedang mengalami gejala seperti sering buang air kecil atau kencing, tidak dapat menahan kencing, Amenorrhea (Tidak haid/telat haid pada perempuan), Menorrhagia (Haid yang banyak dan lama pada perempuan) untuk saat ini ?" 
    />
  );
};

export default Test12;
