import Container from "@/components/common/container";
import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <Container>
      <div className=" flex flex-col w-full items-center justify-center my-10">
        <div className=" text-center">
          <h1 className=" text-5xl font-semibold leading-relaxed">
            Terms And Conditions
          </h1>
        </div>
        <div className=" w-full lg:max-w-2xl flex flex-col gap-4 mt-10">
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-4 text-justify">
            <p>
              Penggunaan Anda atas Momentus merupakan persetujuan Anda untuk
              terikat oleh ketentuan kami. Harap membaca dengan saksama sebelum
              menggunakan Layanan.
            </p>
            <p>
              Ketentuan-ketentuan penggunaan ini, atau dalam hal ini disebut
              dengan “Ketentuan” mengatur akses dan penggunaan Anda terhadap
              Momentus.com (selanjutnya disebut “Momentus” atau “kami”) yang
              ditawarkan melalui situs web kami atau selanjutnya disebut
              “Layanan”.
            </p>
            <p>
              Anda setuju untuk menggunakan Layanan sesuai dengan Ketentuan ini.
              Anda dapat menggunakan Layanan hanya jika Anda memiliki kewenangan
              untuk menjalin kontrak dengan Momentus dan tidak dilarang oleh
              hukum apapun yang berlaku untuk melakukan hal tersebut. Layanan
              dapat berubah dari waktu ke waktu. Perubahan tersebut, serta
              penangguhan dan modifikasi apapun mengenai Layanan, dapat
              dilakukan kapanpun tanpa pemberitahuan sebelumnya kepada Anda.
              Kami juga dapat menghapus konten apapun dari Layanan kami sesuai
              kebijaksanaan kami.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Berkas dan Privasi Anda</h1>
            <p>
              Dengan menggunakan Layanan kami, Anda dapat memberikan informasi
              pada kami, dan berkas yang Anda serahkan atau unggah melalui
              Layanan secara kolektif untuk selanjutnya disebut “Berkas Anda”.
              Anda mempertahankan kepemilikan penuh atas Berkas Anda. Ketentuan
              ini tidak memberikan kepada kami hak apapun atas Berkas Anda atau
              kekayaan intelektual Anda kecuali untuk hak-hak terbatas yang
              dibutuhkan untuk menjalankan Layanan, seperti yang dijelaskan di
              bawah ini.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Berbagi Berkas Anda</h1>
            <p>
              Layanan menyediakan fitur-fitur yang memperbolehkan Anda untuk
              mengunggah Berkas Anda untuk menyimpan dan membagikannya dengan
              individu-individu tertentu dalam teman dan keluarga Anda. Momentus
              tidak memiliki tanggung jawab apapun untuk kegiatan tersebut.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Pengelolaan Berkas Anda</h1>
            <p>
              Berkas Anda akan dikelola dan berada di bawah naungan Momentus
              dalam jangka waktu satu tahun setelah dilakukan registrasi. Untuk
              selebihnya berkas Anda akan terhapus secara otomatis oleh sistem
              dan kami tidak memiliki tanggung jawab atas kehilangan data.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Kewajiban Anda</h1>
            <p>
              Pihak lain dapat memiliki hak kekayaan intelektual atas Berkas dan
              konten lainnya dalam Layanan. Anda dilarang untuk menyalin,
              menggunggah, mengunduh, dan/atau membagikan Berkas, kecuali Anda
              memiliki hak untuk melakukannya. Anda, bukan Momentus, akan
              bertanggung jawab terhadap apa yang Anda salin, bagikan, unggah,
              unduh, gunakan, dan/atau tindakan lainnya yang Anda lakukan saat
              menggunakan Layanan. Satu akun website undangan Momentus hanya
              bisa digunakan untuk satu pasangan (kategori: pernikahan), diluar
              ketetapan tersebut maka permintaan untuk pengubahan data website
              undangan tidak akan diproses oleh Momentus. Anda tidak boleh
              menggunggah perangkat pengintai atau perangkat lunak hasad lainnya
              pada Layanan.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">Keamanan Akun</h1>
            <p>
              Layanan menyediakan fitur-fitur yang memperbolehkan Anda untuk
              mengunggah Berkas Anda untuk disimpan dan dibagikan dengan
              individu-individu tertentu dalam teman dan keluarga Anda. Momentus
              tidak memiliki kewajiban apapun terhadap tindakan tersebut.
            </p>
          </div>
          <div className=" flex flex-col leading-relaxed text-slate-800 gap-2 text-justify">
            <h1 className=" font-semibold text-lg">
              Kebijakan Pengembalian Dana (Refund Policy)
            </h1>
            <p>
              Momentus tidak memberlakukan pengembalian dana untuk paket yang
              sudah dibeli. Anda boleh mengajukan pengembalian dana jika:
              <ul className=" list-decimal ml-4">
                <li>Anda melakukan pembayaran lebih dari yang seharusnya.</li>
                <li>
                  Anda baru menggunakan momentus dalam waktu 2×24 jam sejak akun
                  diaktifkan oleh kami dan momentus tidak bisa melakukan
                  fungsinya, sebagaimana mestinya.
                </li>
                <li>
                  Salah melakukan transfer dana yang masuk ke rekening momentus.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
