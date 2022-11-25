import React from 'react';
import Button from '../../components/Button';
import ButtonSlider from '../../components/ButtonSlider';


function Test13() {
  return (
    <>
      {/*Scale under 550px*/}
      <div className='flex justify-center mt-32 xs:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>13/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test13-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-2xl font-bold uppercase w-[800px]'>Gejala Otonom</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-base font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-24'>
            <div className=''>
              <Button text='Sebelumnya' link='/test12'/>
            </div>
            <div className='ml-[141px]'>
              <Button text='Selanjutnya' link='/test14'/>
            </div>
          </div>
        </div>
      </div>
      {/*Scale xs 550px*/}
      <div className='hidden xs:flex justify-center mt-32 sm:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>13/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test13-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-2xl font-bold uppercase w-[800px]'>Gejala Otonom</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-base font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-24'>
            <div className=''>
              <Button text='Sebelumnya' link='/test12'/>
            </div>
            <div className='ml-[198px]'>
              <Button text='Selanjutnya' link='/test14'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale sm 650px*/}
      <div className='hidden sm:flex justify-center mt-32 md:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>13/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test13-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-2xl font-bold uppercase w-[800px]'>Gejala Otonom</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-base font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-24'>
            <div className=''>
              <Button text='Sebelumnya' link='/test12'/>
            </div>
            <div className='ml-[275px]'>
              <Button text='Selanjutnya' link='/test14'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale md 768px*/}
      <div className='hidden md:flex justify-center mt-32 lg:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>13/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test13-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-3xl font-bold uppercase w-[800px]'>Gejala Otonom</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-lg font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-32'>
            <div className=''>
              <Button text='Sebelumnya' link='/test12'/>
            </div>
            <div className='ml-[375px]'>
              <Button text='Selanjutnya' link='/test14'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale lg 1024px*/}
      <div className='hidden lg:flex justify-center mt-32 xl:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-11'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>13/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test13-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-3xl font-bold uppercase w-[800px]'>Gejala Otonom</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-lg font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-40'>
            <div className=''>
              <Button text='Sebelumnya' link='/test12'/>
            </div>
            <div className='ml-[628px]'>
              <Button text='Selanjutnya' link='/test14'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale xl 1400px*/}
      <div className='hidden xl:flex justify-center mt-32'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-28'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>13/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test13-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-3xl font-bold uppercase w-[800px]'>Gejala Otonom</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-lg font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti mulut kering, muka merah, mudah berkeringat, pusing atau sakit kepala, kepala terasa berat, dan bulu roma berdiri untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-40'>
            <div className=''>
              <Button text='Sebelumnya' link='/test12'/>
            </div>
            <div className='ml-[1000px]'>
              <Button text='Selanjutnya' link='/test14'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test13;