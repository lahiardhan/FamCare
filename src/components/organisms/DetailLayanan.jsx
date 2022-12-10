import React from 'react';
import DetailLayananItem from '../molecules/DetailLayananItem';

function DetailLayanan() {
  return (
    <section className="w-full flex flex-wrap flex-col items-center px-4">
      <DetailLayananItem
        href="/test"
        title="Tes Kecemasan"
        image="test-image.svg"
        buttonText="Daftar Sekarang"
        description="Kecemasan tidak bisa dibiarkan begitu saja, perlu adanya intervensi/tindakan agar tidak masuk ke dalam kecemasan patologi. Untuk itu perlu dilakukan pengkajian kecemasan seseorang agar dapat dilakukan terapi yang tepat. Maka dari itu diperlukan alat ukur pengkajian tingkat kecemasan seseorang. Kami menyediakan fitur tes kecemasan menggunakan skala HARS yang dapat mengukur tingkat kecemasan yang sedang anda alami. terdapat juga tips dan trik setelah menyelesaikan tes untuk membantu meangani kecemasan yang sedang dialami "
      />
      <DetailLayananItem
        href="/article"
        title="Artikel"
        image="article-image.svg"
        buttonText="Baca Sekarang" invertedPosition={true}
        description="Mengenali adanya gangguan mental sedini mungkin akan jauh lebih baik dibandingkan membiarkan terlalu lama yang dapat menyebabkan terganggunya fungsi sehari-hari. jika lebih awal dikenali juga akan mempermudah penanganan dan biaya pengobatan. Terdapat berbagai macam artikel mengenai kesehatan mental yang bisa menjadi bahan bacaan untuk mendapatkan wawasan tentang kesehatan mental yang sedang anda alami "
      />
      <DetailLayananItem
        href="/forum"
        title="Forum Diskusi"
        image="forum-discussion.svg"
        buttonText="Gabung Sekarang"
        description="Forum (E-Discussion Forum) sebagai media diskusi online yang dapat diakses tanpa dibatasi ruang dan waktu. Melalui forum, pengguna dapat berdiskusi satu sama lain mengenai suatu topic dan bisa saling berbagi mengenai kesehatan mental yang sedang dialami . Forum diskusi ini hanya dapat diakses oleh pengguna yang telah memiliki akun. Lakukan registrasi apabila anda belum memiliki akun."
      />
    </section>
  )
}

export default DetailLayanan;
