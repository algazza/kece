// =========================== KREDIT =====================
export const IsiKredit = [
  {
    id: 1,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>Foto copy <b>identitas</b> calon debitur dan suami/istrinya serta identitas pemilik jaminan dan suami/istri yang masih berlaku, </li>
                <li>Foto copy <b>kartu keluarga</b> calon debitur dan pemilik agunan, </li>
                <li>Foto copy <b>surat nikah</b>,</li>
                <li>Foto copy bukti kepemilikan agunan berupa <b>BPKB beserta STNK dan atau sertifikat tanah beserta PBB terakhir</b>.</li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
           Proses Cepat, 5 Hari Kerja
           </li> <br />
           <li>
           Syarat Mudah & Fleksibel
           </li> <br />
           <li>
           Aman & Terpecaya
           </li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
            Suku bunga kredit kompetitif <b>dibanding </b>bank lainnya
          </li>
          <li>
          Jangka waktu kredit hingga <b> 1 tahun dan bisa diperpanjang</b>
          </li>
          <li>Pinjaman kredit 500 juta hingga 30 Milyar.</li>
          <li>Presentase pembiayaan hingga <b>60% dari nilai jaminan</b>.</li>
          <li>Jaminan: <br />
            - SHM (Sertifikat Hak Milik) <br />
            - SHGB (Sertifikat Hak Guna Bangunan) untuk rumah, ruko, rukan, atau tanah kosong untuk dibangun <br />
            - BPKB Kendaraan (sebagai agunan tambahan)</li>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
          <li className="p-4">
          Suku bunga 10.25% fix 1 tahun. Bunga floating: tahun berikutnya, Suku bunga LPS BPR + 7%
          </li>
          <li className="p-4">
          Jangka waktu kredit hingga 8 tahun hingga 20 tahun.
          </li>
          <li className="p-4">
          Pembiayaan : Tanah dan Bangunan 80%
          </li>
          <li className="p-4">
          Usia debitur minimal 21 th dan pada saat jatuh tempo kredit / maksimal 1 tahun sebelum pensiun, khusus untuk wiraswasta dan profesional pada saat jatuh tempo kredit usia maksimal 70 th.
          </li>
          <li className="p-4">
          DP mulai 10%
          </li>
          <li className="p-4">
          Bebas biaya provisi untuk take over kredit
          </li>
          <li className="p-4">
          Pelunasan dalam masa fix rate berjalan, dikenakan pinalty
          </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

  {
    id: 2,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Perorangan <br /> - KTP/SIM/Passport asli yang masih berlaku
        </li>
        <li>
          Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang berwenang{" "}
          <br /> - SIUP, NPWP, Akta Pendirian Perusahaan dan Perubahannya
        </li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Berhak memilih jenis hadiah yang telah disediakan (Umroh, Mobil, Motor
          Sport, Gadget).
        </li>
        <li>
          Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama dana
          ditempatkan.
        </li>
        <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
        <li>Setoran Awal & Akhir </li>
        <>: Sesuai nominal penempatan dana </>
        <li>Biaya Administrasi Bulanan</li>
        <>: Rp. 1.000,- </>
        <li>Bunga tabungan</li>
        <>: 2% pa </>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li className=" p-2">
          Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
          ditambahbukukan pada rekening tabungan.
        </li>
        <li className=" p-2">
          Sebagai bukti transaksi tabungan, bank akan menerbitkan sertipikat
          tabungan berjangka dan menatausahakan rekening atas nama penabung.
        </li>
        <li className=" p-2">
          Jika terjadi penarikan tabungan sebelum jatuh tempo maka penabung akan
          dikenakan pinalti sebesar hadiah yang diterima di awal (nilai hadiah
          pada saat diterima).
        </li>
        <li className=" p-2">
          Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di pasaran,
          maka hadiah akan diganti dengan hadiah lain yang setara atas
          persetujuan nasabah.
        </li>
        <li className=" p-2">
          Jika penabung meninggal dunia maka saldo tabungan akan dibayarkan
          kepada ahli warisnya sesuai ketentuan di BPR Arto Moro.
        </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

  {
    id: 3,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Perorangan <br /> - KTP/SIM/Passport asli yang masih berlaku
        </li>
        <li>
          Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang berwenang{" "}
          <br /> - SIUP, NPWP, Akta Pendirian Perusahaan dan Perubahannya
        </li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Berhak memilih jenis hadiah yang telah disediakan (Umroh, Mobil, Motor
          Sport, Gadget).
        </li>
        <li>
          Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama dana
          ditempatkan.
        </li>
        <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
        <li>Setoran Awal & Akhir </li>
        <>: Sesuai nominal penempatan dana </>
        <li>Biaya Administrasi Bulanan</li>
        <>: Rp. 1.000,- </>
        <li>Bunga tabungan</li>
        <>: 2% pa </>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li className=" p-2">
          Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
          ditambahbukukan pada rekening tabungan.
        </li>
        <li className=" p-2">
          Sebagai bukti transaksi tabungan, bank akan menerbitkan sertipikat
          tabungan berjangka dan menatausahakan rekening atas nama penabung.
        </li>
        <li className=" p-2">
          Jika terjadi penarikan tabungan sebelum jatuh tempo maka penabung akan
          dikenakan pinalti sebesar hadiah yang diterima di awal (nilai hadiah
          pada saat diterima).
        </li>
        <li className=" p-2">
          Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di pasaran,
          maka hadiah akan diganti dengan hadiah lain yang setara atas
          persetujuan nasabah.
        </li>
        <li className=" p-2">
          Jika penabung meninggal dunia maka saldo tabungan akan dibayarkan
          kepada ahli warisnya sesuai ketentuan di BPR Arto Moro.
        </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

  {
    id: 4,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Perorangan <br /> - KTP/SIM/Passport asli yang masih berlaku
        </li>
        <li>
          Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang berwenang{" "}
          <br /> - SIUP, NPWP, Akta Pendirian Perusahaan dan Perubahannya
        </li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Berhak memilih jenis hadiah yang telah disediakan (Umroh, Mobil, Motor
          Sport, Gadget).
        </li>
        <li>
          Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama dana
          ditempatkan.
        </li>
        <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
        <li>Setoran Awal & Akhir </li>
        <>: Sesuai nominal penempatan dana </>
        <li>Biaya Administrasi Bulanan</li>
        <>: Rp. 1.000,- </>
        <li>Bunga tabungan</li>
        <>: 2% pa </>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li className=" p-2">
          Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
          ditambahbukukan pada rekening tabungan.
        </li>
        <li className=" p-2">
          Sebagai bukti transaksi tabungan, bank akan menerbitkan sertipikat
          tabungan berjangka dan menatausahakan rekening atas nama penabung.
        </li>
        <li className=" p-2">
          Jika terjadi penarikan tabungan sebelum jatuh tempo maka penabung akan
          dikenakan pinalti sebesar hadiah yang diterima di awal (nilai hadiah
          pada saat diterima).
        </li>
        <li className=" p-2">
          Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di pasaran,
          maka hadiah akan diganti dengan hadiah lain yang setara atas
          persetujuan nasabah.
        </li>
        <li className=" p-2">
          Jika penabung meninggal dunia maka saldo tabungan akan dibayarkan
          kepada ahli warisnya sesuai ketentuan di BPR Arto Moro.
        </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

  {
    id: 5,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Perorangan <br /> - KTP/SIM/Passport asli yang masih berlaku
        </li>
        <li>
          Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang berwenang{" "}
          <br /> - SIUP, NPWP, Akta Pendirian Perusahaan dan Perubahannya
        </li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Berhak memilih jenis hadiah yang telah disediakan (Umroh, Mobil, Motor
          Sport, Gadget).
        </li>
        <li>
          Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama dana
          ditempatkan.
        </li>
        <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
        <li>Setoran Awal & Akhir </li>
        <>: Sesuai nominal penempatan dana </>
        <li>Biaya Administrasi Bulanan</li>
        <>: Rp. 1.000,- </>
        <li>Bunga tabungan</li>
        <>: 2% pa </>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li className=" p-2">
          Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
          ditambahbukukan pada rekening tabungan.
        </li>
        <li className=" p-2">
          Sebagai bukti transaksi tabungan, bank akan menerbitkan sertipikat
          tabungan berjangka dan menatausahakan rekening atas nama penabung.
        </li>
        <li className=" p-2">
          Jika terjadi penarikan tabungan sebelum jatuh tempo maka penabung akan
          dikenakan pinalti sebesar hadiah yang diterima di awal (nilai hadiah
          pada saat diterima).
        </li>
        <li className=" p-2">
          Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di pasaran,
          maka hadiah akan diganti dengan hadiah lain yang setara atas
          persetujuan nasabah.
        </li>
        <li className=" p-2">
          Jika penabung meninggal dunia maka saldo tabungan akan dibayarkan
          kepada ahli warisnya sesuai ketentuan di BPR Arto Moro.
        </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

  {
    id: 6,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Perorangan <br /> - KTP/SIM/Passport asli yang masih berlaku
        </li>
        <li>
          Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang berwenang{" "}
          <br /> - SIUP, NPWP, Akta Pendirian Perusahaan dan Perubahannya
        </li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Berhak memilih jenis hadiah yang telah disediakan (Umroh, Mobil, Motor
          Sport, Gadget).
        </li>
        <li>
          Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama dana
          ditempatkan.
        </li>
        <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
        <li>Setoran Awal & Akhir </li>
        <>: Sesuai nominal penempatan dana </>
        <li>Biaya Administrasi Bulanan</li>
        <>: Rp. 1.000,- </>
        <li>Bunga tabungan</li>
        <>: 2% pa </>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li className=" p-2">
          Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
          ditambahbukukan pada rekening tabungan.
        </li>
        <li className=" p-2">
          Sebagai bukti transaksi tabungan, bank akan menerbitkan sertipikat
          tabungan berjangka dan menatausahakan rekening atas nama penabung.
        </li>
        <li className=" p-2">
          Jika terjadi penarikan tabungan sebelum jatuh tempo maka penabung akan
          dikenakan pinalti sebesar hadiah yang diterima di awal (nilai hadiah
          pada saat diterima).
        </li>
        <li className=" p-2">
          Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di pasaran,
          maka hadiah akan diganti dengan hadiah lain yang setara atas
          persetujuan nasabah.
        </li>
        <li className=" p-2">
          Jika penabung meninggal dunia maka saldo tabungan akan dibayarkan
          kepada ahli warisnya sesuai ketentuan di BPR Arto Moro.
        </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

  {
    id: 7,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Perorangan <br /> - KTP/SIM/Passport asli yang masih berlaku
        </li>
        <li>
          Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang berwenang{" "}
          <br /> - SIUP, NPWP, Akta Pendirian Perusahaan dan Perubahannya
        </li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Berhak memilih jenis hadiah yang telah disediakan (Umroh, Mobil, Motor
          Sport, Gadget).
        </li>
        <li>
          Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama dana
          ditempatkan.
        </li>
        <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
        <li>Setoran Awal & Akhir </li>
        <>: Sesuai nominal penempatan dana </>
        <li>Biaya Administrasi Bulanan</li>
        <>: Rp. 1.000,- </>
        <li>Bunga tabungan</li>
        <>: 2% pa </>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li className=" p-2">
          Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
          ditambahbukukan pada rekening tabungan.
        </li>
        <li className=" p-2">
          Sebagai bukti transaksi tabungan, bank akan menerbitkan sertipikat
          tabungan berjangka dan menatausahakan rekening atas nama penabung.
        </li>
        <li className=" p-2">
          Jika terjadi penarikan tabungan sebelum jatuh tempo maka penabung akan
          dikenakan pinalti sebesar hadiah yang diterima di awal (nilai hadiah
          pada saat diterima).
        </li>
        <li className=" p-2">
          Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di pasaran,
          maka hadiah akan diganti dengan hadiah lain yang setara atas
          persetujuan nasabah.
        </li>
        <li className=" p-2">
          Jika penabung meninggal dunia maka saldo tabungan akan dibayarkan
          kepada ahli warisnya sesuai ketentuan di BPR Arto Moro.
        </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

  {
    id: 8,
    Syarat: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Perorangan <br /> - KTP/SIM/Passport asli yang masih berlaku
        </li>
        <li>
          Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang berwenang{" "}
          <br /> - SIUP, NPWP, Akta Pendirian Perusahaan dan Perubahannya
        </li>
      </ul>
    ),
    Keuntungan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li>
          Berhak memilih jenis hadiah yang telah disediakan (Umroh, Mobil, Motor
          Sport, Gadget).
        </li>
        <li>
          Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama dana
          ditempatkan.
        </li>
        <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
      </ul>
    ),
    Fitur: (
      <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
        <li>Setoran Awal & Akhir </li>
        <>: Sesuai nominal penempatan dana </>
        <li>Biaya Administrasi Bulanan</li>
        <>: Rp. 1.000,- </>
        <li>Bunga tabungan</li>
        <>: 2% pa </>
      </ul>
    ),
    Ketentuan: (
      <ul className="list-inside list-disc pl-4 sm:pl-16">
        <li className=" p-2">
          Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
          ditambahbukukan pada rekening tabungan.
        </li>
        <li className=" p-2">
          Sebagai bukti transaksi tabungan, bank akan menerbitkan sertipikat
          tabungan berjangka dan menatausahakan rekening atas nama penabung.
        </li>
        <li className=" p-2">
          Jika terjadi penarikan tabungan sebelum jatuh tempo maka penabung akan
          dikenakan pinalti sebesar hadiah yang diterima di awal (nilai hadiah
          pada saat diterima).
        </li>
        <li className=" p-2">
          Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di pasaran,
          maka hadiah akan diganti dengan hadiah lain yang setara atas
          persetujuan nasabah.
        </li>
        <li className=" p-2">
          Jika penabung meninggal dunia maka saldo tabungan akan dibayarkan
          kepada ahli warisnya sesuai ketentuan di BPR Arto Moro.
        </li>
      </ul>
    ),
    Tabel: [
      { amount: 100000000, term: "1 tahun", reward: 4000000 },
      { amount: 100000000, term: "2 tahun", reward: 8000000 },
      { amount: 100000000, term: "3 tahun", reward: 12000000 },
      { amount: 200000000, term: "1 tahun", reward: 8000000 },
      { amount: 200000000, term: "2 tahun", reward: 16000000 },
      { amount: 200000000, term: "3 tahun", reward: 24000000 },
      { amount: 300000000, term: "1 tahun", reward: 12000000 },
      { amount: 300000000, term: "2 tahun", reward: 24000000 },
      { amount: 300000000, term: "3 tahun", reward: 36000000 },
      { amount: 400000000, term: "1 tahun", reward: 16000000 },
      { amount: 400000000, term: "2 tahun", reward: 32000000 },
      { amount: 400000000, term: "3 tahun", reward: 48000000 },
      { amount: 500000000, term: "1 tahun", reward: 20000000 },
      { amount: 500000000, term: "2 tahun", reward: 40000000 },
      { amount: 500000000, term: "3 tahun", reward: 60000000 },
    ],
  },

];
