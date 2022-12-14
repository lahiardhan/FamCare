import Button from '../../components/atoms/Button';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/organisms/Footer';
AOS.init();

function TestPage() {
  function onStartTestClick() {
    const numberOfTest = 14;
    for (let i = 1; i <= numberOfTest; i++) {
      localStorage.setItem(`test${i}`, 0);
    }
    localStorage.setItem('total-score', 0);
  };

  return (
    <>
    {/*Scale under 550px*/}
    <div className='flex justify-center xs:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='mt-40'>
            <div className='flex justify-center' data-aos="fade-down">
              <img src='images/herotest-image.svg' alt="vector_testimage" className='w-[300px]'/>
            </div>
            <div className='flex flex-col text-center mt-[50px]'>
              <p className='text-lg font-medium' data-aos="zoom-in-up" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-4xl font-extrabold mt-[10px]' data-aos="zoom-in-up" data-aos-delay="500">TEST KECEMASAN</h2>
              <div className='flex justify-center'>
                <p className='text-base font-normal w-[450px] mt-[15px]' data-aos="zoom-in-up" data-aos-delay="600">FamCare saat ini menghadirkan sebuah layanan berupa test, dimana test ini sendiri bertujuan agar dapat  membantu mengukur dan juga mengetahui kondisi terkini dari diri anda sendiri yang tentunya berkaitan dengan tingkat kecemasan atau anxiety yang sedang anda alami.</p>
              </div>
            </div>
            <div className='flex flex-row justify-center mt-[50px]' data-aos="fade-down" data-aos-delay="1000">
              <Button href='#Alur---Test--' text="ALUR TEST"/>
              <Button href='#Panduan---Test--' text="PANDUAN TEST" className='ml-[15px]'/>
            </div>
            <div className='flex justify-center mt-[20px]'data-aos="fade-down" data-aos-delay="1200">
              <Button href='/test1' text="MULAI TEST" onClick={onStartTestClick} />
            </div>
        </div>

        {/*Alur Test*/}
        <div className='flex flex-col container px-5 mt-[180px] '>
          <h2 id='Alur---Test--' className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Alur Test</h2>
          <div className='mt-[80px]'>
            <div className='flex justify-center' data-aos="fade-right">
               <img src='images/kliktombol-images.svg' className='w-[80px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Klik Mulai Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Untuk dapat mengikuti test ini, silahkan anda menekan tombol mulai test.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/kerjakantest-image.svg' className='w-[100px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Kerjakan Test</h3>
            <div className='flex justify-center'>
               <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Selanjutnya anda dapat mulai mengerjakan test dengan menjawab pertanyaan-pertanyaan yang telah diberikan.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/hasiltest-image.svg' className='w-[90px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Dapatkan Hasil Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Setelah selesai mengerjakan dapatkan hasil test berupa kondisi dari tingkat kecemasan diri anda saat ini. Kemudian dapatkan juga tips serta trick dalam menangani kecemasan anda tersebut.</p>
            </div>
           </div>
        </div>

        {/*Panduan Test*/}
        <div className='flex flex-col container px-5 mt-[180px]'>
          <h2 id='Panduan---Test--' className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex justify-center mt-[80px]' data-aos="zoom-in-down">
            <img src='images/panduan-test.svg' className='w-[325px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <h2 className='text-center text-2xl font-semibold w-[437px]'>Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px] ml-[10px]'>
              <ol className='list-decimal text-justify text-base font-normal w-[340px]'>
                <li data-aos="fade-left">Persiapkan perangkat yang akan anda gunakan dalam mengikuti test ini, pastikan sudah terhubung dan juga memiliki koneksi internet stabil.</li>
                <li data-aos="fade-left">Kemudian dalam mengerjakan test terkait dengan tingkat skala penilaian, dapat anda lihat dengan menekan tombol informasi pada bagian kanan atas.</li>
                <li data-aos="fade-left">Dalam test ini sendiri tidak memiliki jawaban benar maupun salah, sehingga isilah jawaban yakni dengan benar-benar sesuai kondisi anda saat ini.</li>
                <li data-aos="fade-left">Selanjutnya juga saat mengerjakan test bacalah dengan seksama setiap pertanyaan yang diberikan, agar hasil yang diberikan juga dapat sesuai dengan kondisi anda saat ini.</li>
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
                <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu cara untuk mengukur kondisi seseorang yaitu terkait dengan tingkat kecemasan yang sedang dialami.</li>
                <br/>
                <li data-aos="fade-left">Sedangkan metode HARS sendiri merupakan salah satu metode yang dapat digunakan dan diimplementasikan pada tes kecemasan tersebut. Skala penilaian dalam metode HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran terhadap tingkat kecemasan.</li>
              </ul>
            </div>
            <div className=' flex justify-center mt-[40px]' data-aos="fade-down">
              <Button text="MULAI TEST" onClick={onStartTestClick} href='/test1'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Scale xs 550px*/}
    <div className='hidden xs:flex justify-center sm:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='mt-40'>
            <div className='flex justify-center' data-aos="fade-down">
              <img src='images/herotest-image.svg' alt="vector_testimage" className='w-[300px]'/>
            </div>
            <div className='flex flex-col text-center mt-[50px]'>
              <p className='text-lg font-medium' data-aos="zoom-in-up" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-4xl font-extrabold mt-[10px]' data-aos="zoom-in-up" data-aos-delay="500">TEST KECEMASAN</h2>
              <div className='flex justify-center'>
                <p className='text-base font-normal w-[450px] mt-[15px]' data-aos="zoom-in-up" data-aos-delay="600">FamCare saat ini menghadirkan sebuah layanan berupa test, dimana test ini sendiri bertujuan agar dapat  membantu mengukur dan juga mengetahui kondisi terkini dari diri anda sendiri yang tentunya berkaitan dengan tingkat kecemasan atau anxiety yang sedang anda alami.</p>
              </div>
            </div>
            <div className=' flex-initial justify-center mt-[50px]' data-aos="fade-down" data-aos-delay="1000">
              <div className='flex-initial w-[600px]'>
                <Button href='#Alur--Test--' text="ALUR TEST"/>
                <Button className='ml-[15px]' href='#Panduan--Test--' text="PANDUAN TEST"/>
                <Button className='ml-[15px]' href='/test1' text="MULAI TEST" onClick={onStartTestClick} />
              </div>
            </div>
        </div>

        {/*Alur Test*/}
        <div className='flex flex-col container px-5 mt-[180px] '>
          <h2 id='Alur--Test--' className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Alur Test</h2>
          <div className='mt-[80px]'>
            <div className='flex justify-center' data-aos="fade-right">
               <img src='images/kliktombol-images.svg' className='w-[80px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Klik Mulai Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Untuk dapat mengikuti test ini, silahkan anda menekan tombol mulai test.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/kerjakantest-image.svg' className='w-[100px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Kerjakan Test</h3>
            <div className='flex justify-center'>
               <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Selanjutnya anda dapat mulai mengerjakan test dengan menjawab pertanyaan-pertanyaan yang telah diberikan.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/hasiltest-image.svg' className='w-[90px]'/>
            </div>
            <h3 className='text-center text-2xl font-semibold mt-[20px]' data-aos="fade-left">Dapatkan Hasil Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-base font-normal w-[354px] mt-[10px]' data-aos="fade-left">Setelah selesai mengerjakan dapatkan hasil test berupa kondisi dari tingkat kecemasan diri anda saat ini. Kemudian dapatkan juga tips serta trick dalam menangani kecemasan anda tersebut.</p>
            </div>
           </div>
        </div>

        {/*Panduan Test*/}
        <div className='flex flex-col container px-5 mt-[180px]'>
          <h2 id='Panduan--Test--' className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex justify-center mt-[80px]' data-aos="zoom-in-down">
            <img src='images/panduan-test.svg' className='w-[325px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <h2 className='text-center text-2xl font-semibold w-[437px]'>Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px] ml-[10px]'>
              <ol className='list-decimal text-justify text-base font-normal w-[340px]'>
                <li data-aos="fade-left">Persiapkan perangkat yang akan anda gunakan dalam mengikuti test ini, pastikan sudah terhubung dan juga memiliki koneksi internet stabil.</li>
                <li data-aos="fade-left">Kemudian dalam mengerjakan test terkait dengan tingkat skala penilaian, dapat anda lihat dengan menekan tombol informasi pada bagian kanan atas.</li>
                <li data-aos="fade-left">Dalam test ini sendiri tidak memiliki jawaban benar maupun salah, sehingga isilah jawaban yakni dengan benar-benar sesuai kondisi anda saat ini.</li>
                <li data-aos="fade-left">Selanjutnya juga saat mengerjakan test bacalah dengan seksama setiap pertanyaan yang diberikan, agar hasil yang diberikan juga dapat sesuai dengan kondisi anda saat ini.</li>
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
                <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu cara untuk mengukur kondisi seseorang yaitu terkait dengan tingkat kecemasan yang sedang dialami.</li>
                <br/>
                <li data-aos="fade-left">Sedangkan metode HARS sendiri merupakan salah satu metode yang dapat digunakan dan diimplementasikan pada tes kecemasan tersebut. Skala penilaian dalam metode HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran terhadap tingkat kecemasan.</li>
              </ul>
            </div>
            <div className=' flex justify-center mt-[40px]' data-aos="fade-down">
              <Button text="MULAI TEST" onClick={onStartTestClick} href='/test1'/>
            </div>
          </div>
        </div>
      </div>
    </div>  
    

    {/*Scale sm 650px*/}
    <div className='hidden sm:flex justify-center md:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='mt-40'>
            <div className='flex justify-center' data-aos="fade-down">
              <img src='images/herotest-image.svg' alt="vector_testimage" className='w-[350px]'/>
            </div>
            <div className='flex flex-col text-center mt-[50px]'>
              <p className='text-xl font-medium' data-aos="zoom-in-up" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>! 650</p>
              <h2 className='text-5xl font-extrabold mt-[10px]' data-aos="zoom-in-up" data-aos-delay="500">TEST KECEMASAN</h2>
              <div className='flex justify-center'>
                <p className='text-lg font-normal w-[520px] mt-[15px]' data-aos="zoom-in-up" data-aos-delay="600">FamCare saat ini menghadirkan sebuah layanan berupa test, dimana test ini sendiri bertujuan agar dapat  membantu mengukur dan juga mengetahui kondisi terkini dari diri anda sendiri yang tentunya berkaitan dengan tingkat kecemasan atau anxiety yang sedang anda alami.</p>
              </div>
            </div>
            <div className='flex-initial justify-center ml-[25px] mt-[50px] w-[600px]' data-aos="fade-down" data-aos-delay="1000">
              <Button href='#Alur--Test-' text="ALUR TEST"/>
              <Button className='ml-[15px]' href='#Panduan--Test-' text="PANDUAN TEST"/>
              <Button className='ml-[15px]' href='/test1' text="MULAI TEST" onClick={onStartTestClick} />
            </div>
        </div>

        {/*Alur Test*/}
        <div className='flex flex-col container px-5 mt-[180px] '>
          <h2 id='Alur--Test-' className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Alur Test</h2>
          <div className='mt-[80px]'>
            <div className='flex justify-center' data-aos="fade-right">
               <img src='images/kliktombol-images.svg' className='w-[100px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Klik Mulai Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Untuk dapat mengikuti test ini, silahkan anda menekan tombol mulai test.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/kerjakantest-image.svg' className='w-[120px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Kerjakan Test</h3>
            <div className='flex justify-center'>
               <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Selanjutnya anda dapat mulai mengerjakan test dengan menjawab pertanyaan-pertanyaan yang telah diberikan.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/hasiltest-image.svg' className='w-[110px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Dapatkan Hasil Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Setelah selesai mengerjakan dapatkan hasil test berupa kondisi dari tingkat kecemasan diri anda saat ini. Kemudian dapatkan juga tips serta trick dalam menangani kecemasan anda tersebut.</p>
            </div>
           </div>
        </div>

        {/*Panduan Test*/}
        <div className='flex flex-col container px-5 mt-[180px]'>
          <h2 id='Panduan--Test-' className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex justify-center mt-[80px]' data-aos="zoom-in-down">
            <img src='images/panduan-test.svg' className='w-[375px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <h2 className='text-center text-3xl font-semibold w-[477px]'>Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px] ml-[10px]'>
              <ol className='list-decimal text-justify text-lg font-normal w-[400px]'>
                <li data-aos="fade-left">Persiapkan perangkat yang akan anda gunakan dalam mengikuti test ini, pastikan sudah terhubung dan juga memiliki koneksi internet stabil.</li>
                <li data-aos="fade-left">Kemudian dalam mengerjakan test terkait dengan tingkat skala penilaian, dapat anda lihat dengan menekan tombol informasi pada bagian kanan atas.</li>
                <li data-aos="fade-left">Dalam test ini sendiri tidak memiliki jawaban benar maupun salah, sehingga isilah jawaban yakni dengan benar-benar sesuai kondisi anda saat ini.</li>
                <li data-aos="fade-left">Selanjutnya juga saat mengerjakan test bacalah dengan seksama setiap pertanyaan yang diberikan, agar hasil yang diberikan juga dapat sesuai dengan kondisi anda saat ini.</li>
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
                <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu cara untuk mengukur kondisi seseorang yaitu terkait dengan tingkat kecemasan yang sedang dialami.</li>
                <br/>
                <li data-aos="fade-left">Sedangkan metode HARS sendiri merupakan salah satu metode yang dapat digunakan dan diimplementasikan pada tes kecemasan tersebut. Skala penilaian dalam metode HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran terhadap tingkat kecemasan.</li>
              </ul>
            </div>
            <div className=' flex justify-center mt-[40px]' data-aos="fade-down">
              <Button text="MULAI TEST" onClick={onStartTestClick} href='/test1'/>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Scale md 768px*/}
    <div className='hidden md:flex justify-center lg:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='mt-40'>
            <div className='flex justify-center' data-aos="fade-down">
              <img src='images/herotest-image.svg' alt="vector_testimage" className='w-[400px]'/>
            </div>
            <div className='flex flex-col text-center mt-[50px]'>
              <p className='text-2xl font-medium' data-aos="zoom-in-up" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-6xl font-extrabold mt-[10px]' data-aos="zoom-in-up" data-aos-delay="500">TEST KECEMASAN</h2>
              <div className='flex justify-center'>
                <p className='text-xl font-normal w-[700px] mt-[15px]' data-aos="zoom-in-up" data-aos-delay="600">FamCare saat ini menghadirkan sebuah layanan berupa test, dimana test ini sendiri bertujuan agar dapat  membantu mengukur dan juga mengetahui kondisi terkini dari diri anda sendiri yang tentunya berkaitan dengan tingkat kecemasan atau anxiety yang sedang anda alami.</p>
              </div>
            </div>
            <div className='flex-initial justify-center ml-[80px] mt-[30px] w-[600px]' data-aos="fade-down" data-aos-delay="1000">
              <Button href='#Alur--Test' text="ALUR TEST"/>
              <Button className='ml-[15px]' href='#Panduan--Test' text="PANDUAN TEST"/>
              <Button className='ml-[15px]' href='/test1' text="MULAI TEST" onClick={onStartTestClick} />
            </div>
        </div>

        {/*Alur Test*/}
        <div className='flex flex-col container px-5 mt-[180px] '>
          <h2 id='Alur--Test' className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Alur Test</h2>
          <div className='mt-[80px]'>
            <div className='flex justify-center' data-aos="fade-right">
               <img src='images/kliktombol-images.svg' className='w-[100px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Klik Mulai Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Untuk dapat mengikuti test ini, silahkan anda menekan tombol mulai test.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/kerjakantest-image.svg' className='w-[120px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Kerjakan Test</h3>
            <div className='flex justify-center'>
               <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Selanjutnya anda dapat mulai mengerjakan test dengan menjawab pertanyaan-pertanyaan yang telah diberikan.</p>
            </div>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center' data-aos="fade-right">
              <img src='images/hasiltest-image.svg' className='w-[110px]'/>
            </div>
            <h3 className='text-center text-3xl font-semibold mt-[20px]' data-aos="fade-left">Dapatkan Hasil Test</h3>
            <div className='flex justify-center'>
              <p className='text-center text-lg font-normal w-[354px] mt-[10px]' data-aos="fade-left">Setelah selesai mengerjakan dapatkan hasil test berupa kondisi dari tingkat kecemasan diri anda saat ini. Kemudian dapatkan juga tips serta trick dalam menangani kecemasan anda tersebut.</p>
            </div>
           </div>
        </div>        

        {/*Panduan Test*/}
        <div className='flex flex-col container px-5 mt-[180px]'>
          <h2 id='Panduan--Test' className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex justify-center mt-[80px]' data-aos="zoom-in-down">
            <img src='images/panduan-test.svg' className='w-[375px]'/>
          </div>
          <div className='flex flex-col mt-[50px]'>
            <div className='flex justify-center'>
              <h2 className='text-center text-3xl font-semibold w-[477px]' data-aos="fade-right">Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
            </div>
            <div className='flex justify-center container px-5 mt-[40px] ml-[10px]'>
              <ol className='list-decimal text-justify text-lg font-normal w-[400px]'>
                <li data-aos="fade-left">Persiapkan perangkat yang akan anda gunakan dalam mengikuti test ini, pastikan sudah terhubung dan juga memiliki koneksi internet stabil.</li>
                <li data-aos="fade-left">Kemudian dalam mengerjakan test terkait dengan tingkat skala penilaian, dapat anda lihat dengan menekan tombol informasi pada bagian kanan atas.</li>
                <li data-aos="fade-left">Dalam test ini sendiri tidak memiliki jawaban benar maupun salah, sehingga isilah jawaban yakni dengan benar-benar sesuai kondisi anda saat ini.</li>
                <li data-aos="fade-left">Selanjutnya juga saat mengerjakan test bacalah dengan seksama setiap pertanyaan yang diberikan, agar hasil yang diberikan juga dapat sesuai dengan kondisi anda saat ini.</li>
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
                <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu cara untuk mengukur kondisi seseorang yaitu terkait dengan tingkat kecemasan yang sedang dialami.</li>
                <br/>
                <li data-aos="fade-left">Sedangkan metode HARS sendiri merupakan salah satu metode yang dapat digunakan dan diimplementasikan pada tes kecemasan tersebut. Skala penilaian dalam metode HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran terhadap tingkat kecemasan.</li>
              </ul>
            </div>
            <div className=' flex justify-center mt-[40px]' data-aos="fade-down">
              <Button text="MULAI TEST" onClick={onStartTestClick} href='/test1'/>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Scale lg 1024px*/}
    <div className='hidden lg:flex justify-center p-0 m-0 xl:hidden'>
      <div className='flex-col container px-5'>
        {/*Top Content*/}
        <div className='flex flex-row justify-center mt-40'>
          <img src='images/herotest-image.svg' alt="vector_testimage" className='w-[366px] ml-14' data-aos="zoom-in"/>
          <div className='flex flex-col ml-14 mt-[80px]'>
            <div className='flex flex-col'>
              <p className='text-xl font-medium' data-aos="fade-right" data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-4xl font-bold mt-[20px]' data-aos="fade-right" data-aos-delay="500">TEST KECEMASAN</h2>
              <p className='text-[15px] font-normal px-[5] w-[550px] h-[100px] mt-[20px]' data-aos="fade-right" data-aos-delay="600">FamCare saat ini menghadirkan sebuah layanan berupa test, dimana test ini sendiri bertujuan agar dapat  membantu mengukur dan juga mengetahui kondisi terkini dari diri anda sendiri yang tentunya berkaitan dengan tingkat kecemasan atau anxiety yang sedang anda alami.</p>
            </div>
            <div className='flex-initial w-[600px]' data-aos="fade-down" data-aos-delay="1000">
              <Button href='#Alur-Test' text="ALUR TEST"/>
              <Button className='ml-[15px]' href='#Panduan-Test' text="PANDUAN TEST"/>
              <Button className='ml-[15px]' href='/test1' text="MULAI TEST" onClick={onStartTestClick} />
            </div>
          </div>
        </div>
        {/*Alur Test*/}
        <div className='flex flex-col mt-52'>
          <h2 id="Alur-Test" className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="1300">Alur Test</h2>
          <div className='flex flex-row justify-center mt-[80px]'>
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="1000">
                <img src='images/kliktombol-images.svg' className='w-[90px]'/>
              </div>
              <h3 className='text-center text-xl font-bold mt-[10px]' data-aos="fade-up" data-aos-delay="100">Klik Mulai Test</h3>
              <p className='text-center font-medium w-[300px] mt-[5px]' data-aos="fade-up" data-aos-delay="400">Untuk dapat mengikuti test ini, silahkan anda menekan tombol mulai test.</p>
            </div>

            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="1000">
                <img src='images/kerjakantest-image.svg' className='w-[90px]'/>
              </div>
              <h3 className='text-center text-xl font-bold mt-[10px]' data-aos="fade-up" data-aos-delay="200">Kerjakan Test</h3>
              <p className='text-center font-medium w-[300px] mt-[5px]' data-aos="fade-up" data-aos-delay="500">Selanjutnya anda dapat mulai mengerjakan test dengan menjawab pertanyaan-pertanyaan yang telah diberikan.</p>
            </div>
            
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="1000">
                <img src='images/hasiltest-image.svg' className='w-[90px]'/>
              </div>
              <h3 className='text-center text-xl font-bold mt-[10px]' data-aos="fade-up" data-aos-delay="300">Dapatkan Hasil Test</h3>
              <p className='text-center font-medium w-[300px] mt-[5px]' data-aos="fade-up" data-aos-delay="600">Setelah selesai mengerjakan dapatkan hasil test berupa kondisi dari tingkat kecemasan diri anda saat ini. Kemudian dapatkan juga tips serta trick dalam menangani kecemasan anda tersebut.</p>
            </div>
          </div>
        </div> 
        {/*Panduan Test*/}
        <div className='flex flex-col mt-32'>
          <h2 id="Panduan-Test" className='text-center text-4xl font-bold mt-[20px]' data-aos="fade-down">Panduan Test</h2>
          <div className='flex flex-row mt-[80px] justify-center'>
            <div className='flex flex-col mt-[10px]'>
              <div className='flex'>
                <h2 className='text-left text-2xl font-semibold w-[437px]' data-aos="fade-right">Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
              </div>
              <div className='flex mt-[20px] ml-[20px]'>
                <ol className='list-decimal text-justify text-base font-normal w-[340px]'>
                  <li data-aos="fade-left">Persiapkan perangkat yang akan anda gunakan dalam mengikuti test ini, pastikan sudah terhubung dan juga memiliki koneksi internet stabil.</li>
                  <li data-aos="fade-left">Kemudian dalam mengerjakan test terkait dengan tingkat skala penilaian, dapat anda lihat dengan menekan tombol informasi pada bagian kanan atas.</li>
                  <li data-aos="fade-left">Dalam test ini sendiri tidak memiliki jawaban benar maupun salah, sehingga isilah jawaban yakni dengan benar-benar sesuai kondisi anda saat ini.</li>
                  <li data-aos="fade-left">Selanjutnya juga saat mengerjakan test bacalah dengan seksama setiap pertanyaan yang diberikan, agar hasil yang diberikan juga dapat sesuai dengan kondisi anda saat ini.</li>
                </ol>
              </div>
            </div>
            <div className='mt-[30px] ml-[30px]' data-aos="fade-left">
              <img src='images/panduan-test.svg' className='w-[466px]'/>
            </div>
          </div>
        </div>
        {/*Anxiety Test*/}
        <div className='flex flex-col mt-32 mb-40'>
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
                  <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu cara untuk mengukur kondisi seseorang yaitu terkait dengan tingkat kecemasan yang sedang dialami.</li>
                  <br/>
                  <li data-aos="fade-left">Sedangkan metode HARS sendiri merupakan salah satu metode yang dapat digunakan dan diimplementasikan pada tes kecemasan tersebut. Skala penilaian dalam metode HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran terhadap tingkat kecemasan.</li>
                </ul>
              </div>
              <div className='flex flex-row mt-[20px]' data-aos="fade-down">
                <Button text="MULAI TEST" onClick={onStartTestClick} href='/test1'/>
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
        <div className='flex flex-row justify-center mt-40'>
          <img src='images/herotest-image.svg' alt="vector_testimage" className='w-[426px]' data-aos="zoom-in"/>
          <div className='flex flex-col ml-20 mt-[100px]'>
            <div className='flex flex-col'>
              <p className='text-2xl font-medium' data-aos="fade-right"  data-aos-delay="400"><span className='underline decoration-auto'>Yuk Check Kondisimu</span>!</p>
              <h2 className='text-5xl font-bold mt-[20px]' data-aos="fade-right"  data-aos-delay="500">TEST KECEMASAN</h2>
              <p className='text-[18px] font-normal px-[5] w-[550px] h-[100px] mt-[20px]' data-aos="fade-right"  data-aos-delay="600" >FamCare saat ini menghadirkan sebuah layanan berupa test, dimana test ini sendiri bertujuan agar dapat  membantu mengukur dan juga mengetahui kondisi terkini dari diri anda sendiri yang tentunya berkaitan dengan tingkat kecemasan atau anxiety yang sedang anda alami.</p>
            </div>
            <div className='flex-initial mt-[35px] w-[600px]'>
              <div data-aos="fade-down" data-aos-delay="1000">
                <Button href='#AlurTest' text="ALUR TEST"/>
                <Button className='ml-[15px]' href='#PanduanTest' text="PANDUAN TEST"/>
                <Button className='ml-[15px]' href='/test1' text="MULAI TEST" onClick={onStartTestClick} />
              </div>
            </div>
          </div>
        </div>
        {/*Alur Test*/}
        <div className='flex flex-col mt-52'>
          <h2 id="AlurTest" className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="1300">Alur Test</h2>
          <div className='flex flex-row justify-center mt-[80px]'>
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="100">
                <img src='images/kliktombol-images.svg' className='w-[125px]'/>
              </div>
              <h3 className='text-center text-3xl font-bold mt-[20px]' data-aos="fade-up" data-aos-delay="400">Klik Mulai Test</h3>
              <p className='text-center text-lg font-normal w-[420px] mt-[15px]' data-aos="fade-up" data-aos-delay="700">Untuk dapat mengikuti test ini, silahkan anda menekan tombol mulai test.</p>
            </div>

            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="200">
                <img src='images/kerjakantest-image.svg' className='w-[125px]'/>
              </div>
              <h3 className='text-center text-3xl font-bold mt-[20px]' data-aos="fade-up" data-aos-delay="500">Kerjakan Test</h3>
              <p className='text-center text-lg font-normal w-[420px] mt-[15px]' data-aos="fade-up" data-aos-delay="800">Selanjutnya anda dapat mulai mengerjakan test dengan menjawab pertanyaan-pertanyaan yang telah diberikan.</p>
            </div>
            
            <div className='flex flex-col mx-[15px]'>
              <div className='flex justify-center' data-aos="zoom-in" data-aos-delay="300">
                <img src='images/hasiltest-image.svg' className='w-[125px]'/>
              </div>
              <h3 className='text-center text-3xl font-bold mt-[20px]' data-aos="fade-up" data-aos-delay="600">Dapatkan Hasil Test</h3>
              <p className='text-center text-lg font-normal w-[420px] mt-[15px]' data-aos="fade-up" data-aos-delay="900">Setelah selesai mengerjakan dapatkan hasil test berupa kondisi dari tingkat kecemasan diri anda saat ini. Kemudian dapatkan juga tips serta trick dalam menangani kecemasan anda tersebut.</p>
            </div>
          </div>
        </div> 
        {/*Panduan Test*/}
        <div className='flex flex-col mt-32'>
          <h2  id="PanduanTest" className='text-center text-5xl font-bold mt-[20px]' data-aos="fade-down" data-aos-delay="200">Panduan Test</h2>
          <div className='flex flex-row mt-[80px] justify-center'>
            <div className='flex flex-col mt-[10px]'>
              <div className='flex'>
                <h2 className='text-left text-3xl font-semibold w-[477px]' data-aos="fade-right">Panduan Dalam Pengerjaan Anxiety Test / Test Kecemasan</h2>
              </div>
              <div className='flex mt-[20px] ml-[30px]'>
                <ol className='list-decimal text-justify text-lg font-normal w-[420px]'>
                  <li data-aos="fade-left">Persiapkan perangkat yang akan anda gunakan dalam mengikuti test ini, pastikan sudah terhubung dan juga memiliki koneksi internet stabil.</li>
                  <li data-aos="fade-left">Kemudian dalam mengerjakan test terkait dengan tingkat skala penilaian, dapat anda lihat dengan menekan tombol informasi pada bagian kanan atas.</li>
                  <li data-aos="fade-left">Dalam test ini sendiri tidak memiliki jawaban benar maupun salah, sehingga isilah jawaban yakni dengan benar-benar sesuai kondisi anda saat ini.</li>
                  <li data-aos="fade-left">Selanjutnya juga saat mengerjakan test bacalah dengan seksama setiap pertanyaan yang diberikan, agar hasil yang diberikan juga dapat sesuai dengan kondisi anda saat ini.</li>
                </ol>
              </div>
            </div>
            <div className='mt-[60px] ml-[60px]' data-aos="fade-left">
              <img src='images/panduan-test.svg' className='w-[466px]'/>
            </div>
          </div>
        </div>
        {/*Anxiety Test*/}
        <div className='flex flex-col mt-32 mb-40'>
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
                  <li data-aos="fade-left">Anxiety Test atau Test Kecemasan adalah salah satu cara untuk mengukur kondisi seseorang yaitu terkait dengan tingkat kecemasan yang sedang dialami.</li>
                  <br/>
                  <li data-aos="fade-left">Sedangkan metode HARS sendiri merupakan salah satu metode yang dapat digunakan dan diimplementasikan pada tes kecemasan tersebut. Skala penilaian dalam metode HARS sendiri juga telah dibuktikan memiliki validitas dan reliabilitas cukup tinggi untuk melakukan pengukuran terhadap tingkat kecemasan.</li>
                </ul>
              </div>
              <div className='flex flex-row mt-[20px]' data-aos="fade-down">
                <Button text="MULAI TEST" onClick={onStartTestClick} href='/test1'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    <Footer />
    </>
  );
}

export default TestPage;
