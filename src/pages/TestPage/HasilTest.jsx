import React, { useContext, useState } from 'react';
import TotalScoreContext from '../../contexts/TotalScoreContext';

function HasilTest() {
  const [ totalScore, ] = useState(Number(localStorage.getItem('total-score')));
  
  if( totalScore < 14) {
    return (
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">{totalScore} = Tidak Cemas</div>
    );
  } else if (totalScore >= 14 && totalScore <= 20) {
    return (
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">{totalScore} = Kecemasan Ringan</div>
    );
  } else if (totalScore >= 21 && totalScore <= 27) {
    return (
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">{totalScore} = Kecemasan Sedang</div>
    );
  } else if (totalScore >= 28 && totalScore <= 41) {
    return (
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">{totalScore} = Kecemasan Berat</div>
    );
  } else if (totalScore >= 42 && totalScore <= 56) {
    return (
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">{totalScore} = Kecemasan Berat Sekali</div>
    );
  }
};

export default HasilTest;
