import React from 'react';
import Button from '../../components/Button';
import ButtonSlider from '../../components/ButtonSlider';

function Test1() {
  return (
    <>
      {/*Scale under 550px*/}
      <div className='flex justify-center mt-32 xs:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>1/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test1-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-2xl font-bold uppercase w-[800px]'>Perasaan Ansietas / Kecemasan</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-base font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-24'>
            <div className='ml-[300px]'>
              <Button text='Selanjutnya' link='/test2'/>
            </div>
          </div>
        </div>
      </div>
      {/*Scale xs 550px*/}
      <div className='hidden xs:flex justify-center mt-32 sm:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>1/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test1-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-2xl font-bold uppercase w-[800px]'>Perasaan Ansietas / Kecemasan</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-base font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-24'>
            <div className='ml-[360px]'>
              <Button text='Selanjutnya' link='/test2'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale sm 650px*/}
      <div className='hidden sm:flex justify-center mt-32 md:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>1/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test1-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-2xl font-bold uppercase w-[800px]'>Perasaan Ansietas / Kecemasan</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-base font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-24'>
            <div className='ml-[450px]'>
              <Button text='Selanjutnya' link='/test2'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale md 768px*/}
      <div className='hidden md:flex justify-center mt-32 lg:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-8'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>1/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test1-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-3xl font-bold uppercase w-[800px]'>Perasaan Ansietas / Kecemasan</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-lg font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-32'>
            <div className='ml-[550px]'>
              <Button text='Selanjutnya' link='/test2'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale lg 1024px*/}
      <div className='hidden lg:flex justify-center mt-32 xl:hidden'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-11'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>1/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test1-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-3xl font-bold uppercase w-[800px]'>Perasaan Ansietas / Kecemasan</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-lg font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ? “
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
              
            </div>
            <div className='ml-[800px]'>
              <Button text='Selanjutnya' link='/test2'/>
            </div>
          </div>
        </div>
      </div>

      {/*Scale xl 1400px*/}
      <div className='hidden xl:flex justify-center mt-32'>
        <div className='flex flex-col container px-5'>
          <div className='flex mt-11 ml-28'>
            <p className='text-left text-lg font-semibold opacity-60 color-black'>1/14</p>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-center mt-14'>
              <div className='w-[180px] h-[220px] border-solid border-black border-4 rounded-t-full'>
                <div className='flex justify-center mt-14'>
                  <img src='images/test-images/test1-images.svg' className='w-[150px]'/>
                </div>
              </div>
            </div>       
            <div className='flex justify-center mt-12'>
              <h2 className='text-center text-3xl font-bold uppercase w-[800px]'>Perasaan Ansietas / Kecemasan</h2>
            </div>
            <div className='flex justify-center mt-6'>
              <p className='text-center text-lg font-medium w-[850px]'>“ Seberapa besar anda sedang mengalami gejala seperti firasat buruk, takut akan pikiran sendiri, dan mudah tersinggung untuk saat ini ? “
              </p>
            </div>
            <div className='flex justify-center mt-[50px]'>
              <ButtonSlider />
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-row justify-center mt-40'>
            <div className='ml-[1172px]'>
              <Button text='Selanjutnya' link='/test2'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test1;