import React from 'react';

function TestModal({ showModal }) {
  return (
    <div className={`${showModal ? 'block' : 'hidden'} absolute right-0`}>
      <div id="test-modal" className="px-4 pt-3 pb-4 w-full max-w-[480px]">
        <div className="z-10 relative bg-gradient-to-bl from-secondary-color to-primary-color rounded-lg shadow text-white">
          <div className="p-4 text-center text-[10.5px] xs:text-xs">
            <h3 className="mb-3 font-medium underline underline-offset-2">Tingkat Skala Penilaian</h3>
            <div className="flex flex-col gap-1 text-left">
              <p>0: Tidak merasa ada gejala sama sekali</p>
              <p>1: Mengalami satu dari gejala yang ada</p>
              <p>2: Mengalami separuh dari gejala yang ada</p>
              <p>3: Mengalami lebih dari separuh gejala yang ada</p>
              <p>4: Mengalami semua gejala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestModal;
