import React from 'react';

function DetailArticle() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full md:items-center mb-5 h-[200px] overflow-hiiden">
        <img src="https://katapopuler.com/wp-content/uploads/2020/11/dummy.png" alt="image-placeholder" className="rounded-tl-[50px] rounded-br-[50px]" />
      </div>
      <div className="flex flex-col text-black p-5 items-center">
        <h1 className="font-bold text-4xl p-4">Judul Content</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, provident?</p>
      </div>
    </div>
  );
}

export default DetailArticle;
