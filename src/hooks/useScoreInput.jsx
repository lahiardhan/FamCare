import { useState } from 'react';

function useScoreInput(dirLocalStorage) {
  const [ score, setScore ] = useState(Number(localStorage.getItem(dirLocalStorage)) || 0);

  const handleScoreChange = (event) => {
    setScore(Number(event.target.value));
    localStorage.setItem(dirLocalStorage, event.target.value);
  };

  return [score, handleScoreChange];
};

export default useScoreInput;
