import React from 'react';
import TestSection from '../../../components/organisms/TestSection';
import useScoreInput from '../../../hooks/useScoreInput';

function Test14() {
  const [ score, handleScoreChange ] = useScoreInput('test14');

  const onFinishClicked =  () => {
    const totalInArray = [];
    for (let i = 1; i<=14; i++) {
        totalInArray.push(Number(localStorage.getItem(`test${i}`)))
    }
    let totalInNumber = totalInArray.reduce((accum, curr)=>{
        return accum+curr
    })
    localStorage.setItem('total-score', totalInNumber);
  }

  return (
    <TestSection 
      no="14"
      title="Gejala Tingkah Laku"
      score={score}
      onSliderChange={handleScoreChange}
      image='test14-images.svg'
      prev='/test13'
      next='/hasil'
      onClick={onFinishClicked}
      description="Seberapa besar anda sedang mengalami gejala seperti gelisah, tidak tenang, jari gemetar, mengerutkan dahi atau kening, muka tegang untuk saat ini ?" 
    />
  );
};

export default Test14;
