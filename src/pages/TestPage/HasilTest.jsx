import { useEffect, useState } from 'react';
import { hasiltestList } from '../../utils/hasiltestList';
import Footer from '../../components/organisms/Footer';
import Button from '../../components/atoms/Button';
import AOS from 'aos';
import "aos/dist/aos.css";

function HasilTest() {
  const [ totalScore, ] = useState(Number(localStorage.getItem('total-score')));

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const result = hasiltestList.filter((res) => totalScore >= res.score.low && totalScore <= res.score.high)[0];
  const tips = result.tips;

  return (
    <>
      <section className="m-auto max-w-[1200px] min-h-screen w-full px-4 mb-32">
        <div className="min-h-screen flex flex-col justify-center pt-20">
          <div className="font-extrabold md:grid md:grid-cols-2 md:gap-5 lg:gap-10">
            <div className="md:row-start-1 md:col-start-1" data-aos="fade-down">
              <h2 className="text-2xl xs:text-3xl"><span className="underline">Hasil</span> Test</h2>
            </div>
            <div className="flex justify-center mt-10 md:col-start-2 md:mt-0" data-aos="zoom-in" data-aos-duration="700">
              <img className="max-w-lg" src={`/images/hasiltest/${result.statusPic}`} alt={result.status} />
            </div>
            <div className="flex flex-col justify-end mt-10 md:row-start-1 md:col-start-1 md:mt-0">
              <div className="h-[60%] flex flex-col justify-between">
                <h2 className="text-[22px] xs:text-3xl md:text-2xl lg:text-3xl" data-aos="fade-right" data-aos-duration="700">
                  Saat ini anda berada pada<br />tingkat
                  <span className={`text-[${result.colorStatus}]`}> {result.status}</span>
                </h2>
                <div data-aos="zoom-in">
                  <Button text="Kembali ke Beranda" href="/" className="z-10 mt-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h3 className="my-2 font-extrabold text-2xl xs:text-3xl" data-aos="fade-up" data-aos-duration="700">
            <span className="underline">Tips & Trick</span> untuk Anda
          </h3>
          <p className="text-xs xs:text-sm" data-aos="fade-down" data-aos-duration="700">Tips & Trick yang dapat dilakukan untuk menangani tingkat kecemasan yang sedang anda alami.</p>
          
          <div className="mt-6">
            {tips.map((item, index) => {
              return (
                <div key={index} className="flex gap-3 mt-3 md:gap-5">
                  <div 
                    data-aos="fade-up"
                    data-aos-duration="700"
                    className="flex items-center justify-center min-w-[45px] h-[45px] bg-secondary-color rounded-full border-2 border-black text-white">
                      {index + 1}
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="font-semibold text-base">{item.title}</p>
                    <p className="text-sm">{item.tip}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HasilTest;
