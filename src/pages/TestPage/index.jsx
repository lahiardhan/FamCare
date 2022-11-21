/* eslint-disable */
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import React from 'react';


function TestPage() {
  return (
    <>
    {/*Scale xs 550px*/}
    <div className='flex justify-center sm:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-down">
              <img src='images/herotest-image.png' alt="vector_testimage" className='w-[300px]'/>
            </div>
            <div className='flex flex-col text-center mt-[50px]'>
              <p className='text-lg font-medium' data-aos="zoom-in-up" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-4xl font-extrabold mt-[10px]' data-aos="zoom-in-up" data-aos-delay="500">TEST KECEMASAN</h2>
              <div className='flex justify-center'>
                <p className='text-base font-normal w-[450px] mt-[15px]' data-aos="zoom-in-up" data-aos-delay="600">FamCare menghadirkan layanan berupa test agar dapat membantu mengukur dan juga mengetahui kondisi terkini dari diri anda yang berkaitan dengan tingkat kecemasan yang sedang dialami.</p>
              </div>
            </div>
            <div className=' flex flex-col text-center mt-[60px]'>
              <div className=' flex justify-center'>
                <a href="#Alur--Test--" data-aos="fade-down" data-aos-delay="700"><Button title="ALUR TEST"/></a>
                <a href="#Panduan--Test--" className='ml-[30px]' data-aos="fade-down" data-aos-delay="800"><Button title="PANDUAN TEST"/></a>
              </div>
              <Link to={`/`} className='mt-[30px]' data-aos="fade-down" data-aos-delay="900"><Button title="MULAI TEST"/></Link>
            </div>
        </div>

        {/*Alur Test*/}
        <div id='Alur--Test--' className='flex flex-col container px-5 mt-[180px] '>
          <h2 className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Alur Test</h2>
          <div className='mt-[80px]'>
            <div className='flex justify-center' data-aos="fade-right">
               <img src='images/kliktombol-images.png' className='w-[80px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Klik Mulai Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Anda dapat melakukan test ini setelah menekan tombol mulai test.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/kerjakantest-image.png' className='w-[100px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Kerjakan Test</h3>
            <div className='flex justify-center'>
               <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Memulai mengerjakan test dengan beberapa pertanyaan yang sudah disediakan.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/hasiltest-image.png' className='w-[90px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Dapatkan Hasil Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Dapatkan hasil akhir berupa kondisi tingkat kecemasan anda dan juga dapatkan tips serta trick dalam menangani kecemasan anda.</p>
            </div>
           </div>
        </div>

        {/*Panduan Test*/}
        <div id='Panduan--Test--' className='flex flex-col container px-5 mt-[180px]'>
          <h2 className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex justify-center mt-[80px]' data-aos="zoom-in-down">
            <img src='images/panduan-test.svg' className='w-[325px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <h2 className='text-center text-2xl font-semibold w-[437px]'>Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px] ml-[10px]'>
              <ol className='list-decimal text-justify text-base font-normal w-[340px]'>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ol>
            </div>
          </div>
        </div>

        {/*Anxiety Test*/}
        <div className='flex flex-col container px-5 mt-[180px] pb-[85px]'>
          <h2 className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down">Anxiety Test / Test Kecemasan</h2>
          <div className='flex justify-center mt-[60px]' data-aos="zoom-in-down">
            <img src='images/test-image.svg' className='w-[325px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center'>
              <h2 className='text-center text-2xl font-semibold w-[437px]' data-aos="fade-right">Skala Kecemasan Hamilton Anxiety Rating Scale (HARS)</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px]'>
              <ul className='list-none text-justify text-base font-normal w-[340px]'>
                <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu metode yang digunakan untuk mengukur kondisi seseorang yaitu tingkat kecemasan yang sedang dialami.</li>
                <br/>
                <li data-aos="fade-left">Metode HARS sendiri merupakan salah satu metode yang dapat digunakan untuk mengukur tingkat kecemasan seseorang. Skala HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran kecemasan.</li>
              </ul>
            </div>
            <div className=' flex justify-center mt-[40px]' data-aos="fade-down">
              <Link to={`/`} ><Button title="MULAI TEST"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
    

    {/*Scale sm 650px*/}
    <div className='hidden sm:flex justify-center md:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-down">
              <img src='images/herotest-image.png' alt="vector_testimage" className='w-[350px]'/>
            </div>
            <div className='flex flex-col text-center mt-[50px]'>
              <p className='text-xl font-medium' data-aos="zoom-in-up" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>! 650</p>
              <h2 className='text-5xl font-extrabold mt-[10px]' data-aos="zoom-in-up" data-aos-delay="500">TEST KECEMASAN</h2>
              <div className='flex justify-center'>
                <p className='text-lg font-normal w-[520px] mt-[15px]' data-aos="zoom-in-up" data-aos-delay="600">FamCare menghadirkan layanan berupa test agar dapat membantu mengukur dan juga mengetahui kondisi terkini dari diri anda yang berkaitan dengan tingkat kecemasan yang sedang dialami.</p>
              </div>
            </div>
            <div className=' flex flex-row justify-center mt-[60px]'>
              <a href="#Alur--Test-" data-aos="fade-down" data-aos-delay="700"><Button title="ALUR TEST"/></a>
              <a href="#Panduan--Test-" className='ml-[30px]' data-aos="fade-down" data-aos-delay="800"><Button title="PANDUAN TEST"/></a>
              <Link to={`/`} className='ml-[30px]' data-aos="fade-down" data-aos-delay="900"><Button title="MULAI TEST"/></Link>
            </div>
        </div>

        {/*Alur Test*/}
        <div id='Alur--Test-' className='flex flex-col container px-5 mt-[180px] '>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Alur Test</h2>
          <div className='mt-[80px]'>
            <div className='flex justify-center' data-aos="fade-right">
               <img src='images/kliktombol-images.png' className='w-[100px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Klik Mulai Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Anda dapat melakukan test ini setelah menekan tombol mulai test.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/kerjakantest-image.png' className='w-[120px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Kerjakan Test</h3>
            <div className='flex justify-center'>
               <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Memulai mengerjakan test dengan beberapa pertanyaan yang sudah disediakan.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/hasiltest-image.png' className='w-[110px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Dapatkan Hasil Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Dapatkan hasil akhir berupa kondisi tingkat kecemasan anda dan juga dapatkan tips serta trick dalam menangani kecemasan anda.</p>
            </div>
           </div>
        </div>

        {/*Panduan Test*/}
        <div id='Panduan--Test-' className='flex flex-col container px-5 mt-[180px]'>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex justify-center mt-[80px]' data-aos="zoom-in-down">
            <img src='images/panduan-test.svg' className='w-[375px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <h2 className='text-center text-3xl font-semibold w-[477px]'>Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px] ml-[10px]'>
              <ol className='list-decimal text-justify text-lg font-normal w-[400px]'>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ol>
            </div>
          </div>
        </div>

        {/*Anxiety Test*/}
        <div className='flex flex-col container px-5 mt-[180px] pb-[85px]'>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down">Anxiety Test / Test Kecemasan</h2>
          <div className='flex justify-center mt-[60px]' data-aos="zoom-in-down">
            <img src='images/test-image.svg' className='w-[375px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <h2 className='text-center text-3xl font-semibold w-[437px]'>Skala Kecemasan Hamilton Anxiety Rating Scale (HARS)</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px]'>
              <ul className='list-none text-justify text-lg font-normal w-[400px]'>
                <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu metode yang digunakan untuk mengukur kondisi seseorang yaitu tingkat kecemasan yang sedang dialami.</li>
                <br/>
                <li data-aos="fade-left">Metode HARS sendiri merupakan salah satu metode yang dapat digunakan untuk mengukur tingkat kecemasan seseorang. Skala HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran kecemasan.</li>
              </ul>
            </div>
            <div className=' flex justify-center mt-[40px]' data-aos="fade-down">
              <Link to={`/`} ><Button title="MULAI TEST"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Scale md 768px*/}
    <div className='hidden md:flex justify-center lg:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-down">
              <img src='images/herotest-image.png' alt="vector_testimage" className='w-[400px]'/>
            </div>
            <div className='flex flex-col text-center mt-[50px]'>
              <p className='text-2xl font-medium' data-aos="zoom-in-up" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-6xl font-extrabold mt-[10px]' data-aos="zoom-in-up" data-aos-delay="500">TEST KECEMASAN</h2>
              <div className='flex justify-center'>
                <p className='text-xl font-normal w-[700px] mt-[15px]' data-aos="zoom-in-up" data-aos-delay="600">FamCare menghadirkan layanan berupa test agar dapat membantu mengukur dan juga mengetahui kondisi terkini dari diri anda yang berkaitan dengan tingkat kecemasan yang sedang dialami.</p>
              </div>
            </div>
            <div className=' flex flex-row justify-center mt-[60px]'>
              <a href="#Alur--Test" data-aos="fade-down" data-aos-delay="700"><Button title="ALUR TEST"/></a>
              <a href="#Panduan--Test" className='ml-[30px]' data-aos="fade-down" data-aos-delay="800"><Button title="PANDUAN TEST"/></a>
              <Link to={`/`} className='ml-[30px]' data-aos="fade-down" data-aos-delay="900"><Button title="MULAI TEST"/></Link>
            </div>
        </div>

        {/*Alur Test*/}
        <div id='Alur--Test' className='flex flex-col container px-5 mt-[180px] '>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Alur Test</h2>
          <div className='mt-[80px]'>
            <div className='flex justify-center' data-aos="fade-right">
               <img src='images/kliktombol-images.png' className='w-[100px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Klik Mulai Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Anda dapat melakukan test ini setelah menekan tombol mulai test.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/kerjakantest-image.png' className='w-[120px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Kerjakan Test</h3>
            <div className='flex justify-center'>
               <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Memulai mengerjakan test dengan beberapa pertanyaan yang sudah disediakan.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/hasiltest-image.png' className='w-[110px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Dapatkan Hasil Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Dapatkan hasil akhir berupa kondisi tingkat kecemasan anda dan juga dapatkan tips serta trick dalam menangani kecemasan anda.</p>
            </div>
           </div>
        </div>        

        {/*Panduan Test*/}
        <div id='Panduan--Test' className='flex flex-col container px-5 mt-[180px]'>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex justify-center mt-[80px]' data-aos="zoom-in-down">
            <img src='images/panduan-test.svg' className='w-[375px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center'>
              <h2 className='text-center text-3xl font-semibold w-[477px]' data-aos="fade-right">Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px] ml-[10px]'>
              <ol className='list-decimal text-justify text-lg font-normal w-[400px]'>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ol>
            </div>
          </div>
        </div>       

        {/*Anxiety Test*/}
        <div className='flex flex-col container px-5 mt-[180px] pb-[85px]'>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down">Anxiety Test / Test Kecemasan</h2>
          <div className='flex justify-center mt-[60px]' data-aos="zoom-in-down">
            <img src='images/test-image.svg' className='w-[375px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center'>
              <h2 className='text-center text-3xl font-semibold w-[537px]' data-aos="fade-right">Skala Kecemasan Hamilton Anxiety Rating Scale (HARS)</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px]'>
              <ul className='list-none text-justify text-lg font-normal w-[400px]'>
                <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu metode yang digunakan untuk mengukur kondisi seseorang yaitu tingkat kecemasan yang sedang dialami.</li>
                <br/>
                <li data-aos="fade-left">Metode HARS sendiri merupakan salah satu metode yang dapat digunakan untuk mengukur tingkat kecemasan seseorang. Skala HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran kecemasan.</li>
              </ul>
            </div>
            <div className=' flex justify-center mt-[40px]' data-aos="fade-down">
              <Link to={`/`} ><Button title="MULAI TEST"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Scale lg 1024px*/}
    <div className='hidden lg:flex justify-center p-0 m-0  xl:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='flex flex-row justify-center mt-24'>
          <img src='images/herotest-image.png' alt="vector_testimage" className='w-[326px] ml-14' data-aos="zoom-in"/>
          <div className='flex flex-col ml-14 mt-[80px]'>
            <div className='flex flex-col'>
              <p className='text-xl font-medium' data-aos="fade-right" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-4xl font-bold mt-[20px]' data-aos="fade-right" data-aos-delay="500">TEST KECEMASAN</h2>
              <p className='text-[15px] font-normal px-[5] w-[550px] h-[100px] mt-[20px]' data-aos="fade-right" data-aos-delay="600">FamCare menghadirkan layanan berupa test agar dapat membantu mengukur dan juga mengetahui kondisi terkini dari diri anda yang berkaitan dengan tingkat kecemasan yang sedang dialami.</p>
            </div>
            <div className='flex felx-row mt-[5px] w-[600px]'>
              <a href="#Alur-Test" data-aos="fade-down" data-aos-delay="900"><Button title="ALUR TEST" /></a>
              <a href="#Panduan-Test" className='ml-[15px]' data-aos="fade-down" data-aos-delay="1000"><Button title="PANDUAN TEST"/></a>
              <Link to={`/`} className='ml-[15px]' data-aos="fade-down" data-aos-delay="1100"><Button title="MULAI TEST"/></Link>
            </div>
          </div>
        </div>
        {/*Alur Test*/}
        <div id="Alur-Test" className='flex flex-col mt-40'>
          <h2 className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="1300">Alur Test</h2>
          <div className='flex flex-row justify-center mt-[80px]'>
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="1400">
                <img src='images/kliktombol-images.png' className='w-[90px]'/>
              </div>
              <h3 className='text-center text-xl font-bold mt-[10px]' data-aos="fade-up" data-aos-delay="100">Klik Mulai Test</h3>
              <p className='text-center font-medium w-[300px] mt-[5px]' data-aos="fade-up" data-aos-delay="400">Anda dapat melakukan test ini dengan menekan tombol mulai test.</p>
            </div>

            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="1500">
                <img src='images/kerjakantest-image.png' className='w-[90px]'/>
              </div>
              <h3 className='text-center text-xl font-bold mt-[10px]' data-aos="fade-up" data-aos-delay="200">Kerjakan Test</h3>
              <p className='text-center font-medium w-[300px] mt-[5px]' data-aos="fade-up" data-aos-delay="500">Memulai mengerjakan test dengan beberapa pertanyaan yang sudah disediakan.</p>
            </div>
            
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="1600">
                <img src='images/hasiltest-image.png' className='w-[90px]'/>
              </div>
              <h3 className='text-center text-xl font-bold mt-[10px]' data-aos="fade-up" data-aos-delay="300">Dapatkan Hasil Test</h3>
              <p className='text-center font-medium w-[300px] mt-[5px]' data-aos="fade-up" data-aos-delay="600">Dapatkan hasil akhir berupa kondisi tingkat kecemasan anda dan juga dapatkan tips serta trick dalam menangani kecemasan anda.</p>
            </div>
          </div>
        </div> 
        {/*Panduan Test*/}
        <div id="Panduan-Test" className='flex flex-col mt-32'>
          <h2 className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex flex-row mt-[80px] justify-center'>
            <div className='flex flex-col mt-[10px]'>
              <div className='flex'>
                <h2 className='text-left text-2xl font-semibold w-[437px]' data-aos="fade-right">Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
              </div>
              <div className='flex mt-[20px] ml-[20px]'>
                <ol className='list-decimal text-justify text-base font-normal w-[340px]'>
                  <li data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                </ol>
              </div>
            </div>
            <div className='mt-[30px] ml-[30px]' data-aos="fade-left">
              <img src='images/panduan-test.svg' className='w-[466px]'/>
            </div>
          </div>
        </div>
        {/*Anxiety Test*/}
        <div className='flex flex-col mt-32 mb-[150px]'>
          <h2 className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down">Anxiety Test / Test Kecemasan</h2>
          <div className='flex flex-row mt-[50px] justify-center'>
            <div className=''>
              <img src='images/test-image.svg' className='w-[466px]' data-aos="fade-right"/>
            </div>
            <div className='flex flex-col ml-[30px] mt-[50px]'>
              <div className='flex'>
                <h2 className='text-left text-2xl font-semibold w-[437px]' data-aos="fade-left">Skala Kecemasan Hamilton Anxiety Rating Scale (HARS)</h2>
              </div>
              <div className='flex justify-center mt-[20px]'>
                <ul className='list-none text-justify text-base font-normal w-[480px]'>
                  <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu metode yang digunakan untuk mengukur kondisi seseorang yaitu tingkat kecemasan yang sedang dialami.</li>
                  <br/>
                  <li data-aos="fade-left">Metode HARS sendiri merupakan salah satu metode yang dapat digunakan untuk mengukur tingkat kecemasan seseorang. Skala HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran kecemasan.</li>
                </ul>
              </div>
              <div className='flex felx-row mt-[20px]' data-aos="fade-down">
                <Link to={`/`} ><Button title="MULAI TEST"/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Scale xl 1400px*/}
    <div className='hidden xl:flex justify-center p-0 m-0'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='flex flex-row justify-center mt-24'>
          <img src='images/herotest-image.png' alt="vector_testimage" className='w-[426px]' data-aos="zoom-in"/>
          <div className='flex flex-col ml-20 mt-[100px]'>
            <div className='flex flex-col'>
              <p className='text-2xl font-medium' data-aos="fade-right"  data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-5xl font-bold mt-[20px]' data-aos="fade-right"  data-aos-delay="500">TEST KECEMASAN</h2>
              <p className='text-[18px] font-normal px-[5] w-[550px] h-[100px] mt-[20px]' data-aos="fade-right"  data-aos-delay="600" >FamCare menghadirkan layanan berupa test agar dapat membantu mengukur dan juga mengetahui kondisi terkini dari diri anda yang berkaitan dengan tingkat kecemasan yang sedang dialami.</p>
            </div>
            <div className='flex felx-row mt-[35px] w-[600px]'>
              <a href="#AlurTest" data-aos="fade-down" data-aos-delay="900"><Button title="ALUR TEST"/></a>
              <a href="#PanduanTest" className='ml-[15px]' data-aos="fade-down" data-aos-delay="1000"><Button title="PANDUAN TEST"/></a>
              <Link to={`/`} className='ml-[15px]' data-aos="fade-down" data-aos-delay="1100"><Button title="MULAI TEST"/></Link>
            </div>
          </div>
        </div>
        {/*Alur Test*/}
        <div id="AlurTest" className='flex flex-col mt-40'>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="1300">Alur Test</h2>
          <div className='flex flex-row justify-center mt-[80px]'>
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="100">
                <img src='images/kliktombol-images.png' className='w-[125px]'/>
              </div>
              <h3 className='text-center text-3xl font-bold mt-[20px]' data-aos="fade-up" data-aos-delay="400">Klik Mulai Test</h3>
              <p className='text-center text-lg font-normal w-[420px] mt-[15px]' data-aos="fade-up" data-aos-delay="700">Anda dapat melakukan test ini dengan menekan tombol mulai test.</p>
            </div>

            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="200">
                <img src='images/kerjakantest-image.png' className='w-[125px]'/>
              </div>
              <h3 className='text-center text-3xl font-bold mt-[20px]' data-aos="fade-up" data-aos-delay="500">Kerjakan Test</h3>
              <p className='text-center text-lg font-normal w-[420px] mt-[15px]' data-aos="fade-up" data-aos-delay="800">Memulai mengerjakan test dengan beberapa pertanyaan yang sudah disediakan.</p>
            </div>
            
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="300">
                <img src='images/hasiltest-image.png' className='w-[125px]'/>
              </div>
              <h3 className='text-center text-3xl font-bold mt-[20px]' data-aos="fade-up" data-aos-delay="600">Dapatkan Hasil Test</h3>
              <p className='text-center text-lg font-normal w-[420px] mt-[15px]' data-aos="fade-up" data-aos-delay="900">Dapatkan hasil akhir berupa kondisi tingkat kecemasan anda dan juga dapatkan tips serta trick dalam menangani kecemasan anda.</p>
            </div>
          </div>
        </div> 
        {/*Panduan Test*/}
        <div id="PanduanTest" className='flex flex-col mt-32'>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Panduan Test</h2>
          <div className='flex flex-row mt-[80px] justify-center'>
            <div className='flex flex-col mt-[10px]'>
              <div className='flex'>
                <h2 className='text-left text-3xl font-semibold w-[477px]' data-aos="fade-right">Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
              </div>
              <div className='flex mt-[20px] ml-[30px]'>
                <ol className='list-decimal text-justify text-lg font-normal w-[420px]'>
                  <li data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                </ol>
              </div>
            </div>
            <div className='mt-[60px] ml-[60px]' data-aos="fade-left">
              <img src='images/panduan-test.svg' className='w-[466px]'/>
            </div>
          </div>
        </div>
        {/*Anxiety Test*/}
        <div className='flex flex-col mt-32 mb-[150px]'>
          <h2 className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down">Anxiety Test / Test Kecemasan</h2>
          <div className='flex flex-row mt-[50px] justify-center'>
            <div className='' data-aos="fade-right">
              <img src='images/test-image.svg' className='w-[566px]'/>
            </div>
            <div className='flex flex-col ml-[60px] mt-[80px]'>
              <div className='flex flex-col'>
                <h2 className='text-left text-3xl font-semibold w-[637px]' data-aos="fade-left">Skala Kecemasan Hamilton Anxiety Rating Scale (HARS)</h2>
              </div>
              <div className='flex mt-[20px]'>
                <ul className='list-none text-justify text-lg font-normal w-[585px]'>
                  <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu metode yang digunakan untuk mengukur kondisi seseorang yaitu tingkat kecemasan yang sedang dialami.</li>
                  <br/>
                  <li data-aos="fade-left">Metode HARS sendiri merupakan salah satu metode yang dapat digunakan untuk mengukur tingkat kecemasan seseorang. Skala HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran kecemasan.</li>
                </ul>
              </div>
              <div className='flex flex-row mt-[20px]' data-aos="fade-down">
                <Link to={`/`} ><Button title="MULAI TEST"/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    </>
  );
}

export default TestPage;
