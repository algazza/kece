import React from "react";

const titip = () => {
  return (
    <>
      {menu === 1 ? (
        <section>
          {/* Menu pilihan */}
          <section className="pt-10 flex justify-center">
            <div
              onClick={() => updateTabs(1)}
              className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
                tabs === 1 ? "bg-biruMuda-500 text-primary rounded-md" : ""
              }`}
            >
              Syarat
            </div>
            <div
              onClick={() => updateTabs(2)}
              className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
                tabs === 2 ? "bg-biruMuda-500 text-primary rounded-md" : ""
              }`}
            >
              Ketentuan
            </div>
            <div
              onClick={() => updateTabs(3)}
              className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
                tabs === 3 ? "bg-biruMuda-500 text-primary rounded-md" : ""
              }`}
            >
              Tabel
            </div>
            <div
              onClick={() => updateTabs(4)}
              className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
                tabs === 4 ? "bg-biruMuda-500 text-primary rounded-md" : ""
              }`}
            >
              Pengajuan
            </div>
          </section>

          {/* Isi dari Menu */}
          <section className="sm:pb-16 m-8 bg-abuTerang md:p-10 p-4 rounded-lg">
            {/* Syarat */}
            {tabs === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="mx-6 sm:mx-10 sm:px-10 "
              >
                <ul className="text-abuGelap sm:ml-4">
                  <h3 className={`${styles.heading5} text-black my-5`}>
                    A. Syarat Pembukuan rekening
                  </h3>
                  <ul className="list-inside list-disc pl-4 sm:pl-16">
                    <li>
                      Perorangan <br /> - KTP/SIM/Passport asli yang masih
                      berlaku
                    </li>
                    <li>
                      Perusahaan <br /> - KTP/SIM/Passport asli pejabat yang
                      berwenang <br /> - SIUP, NPWP, Akta Pendirian Perusahaan
                      dan Perubahannya
                    </li>
                  </ul>

                  <h3 className={`${styles.heading5} text-black my-5`}>
                    B. Keuntungan
                  </h3>
                  <ul className="list-inside list-disc pl-4 sm:pl-16">
                    <li>
                      Berhak memilih jenis hadiah yang telah disediakan (Umroh,
                      Mobil, Motor Sport, Gadget).
                    </li>
                    <li>
                      Jenis hadiah yang dipilih sesuai dengan jumlah dana dan
                      lama dana ditempatkan.
                    </li>
                    <li>
                      Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.
                    </li>
                  </ul>

                  <h3 className={`${styles.heading5} text-black my-5 `}>
                    C. Fitur
                  </h3>
                  <ul className="list-inside list-disc grid grid-cols-2 pl-4 sm:pl-16">
                    <li>Setoran Awal & Akhir </li>
                    <>: Sesuai nominal penempatan dana </>
                    <li>Biaya Administrasi Bulanan</li>
                    <>: Rp. 1.000,- </>
                    <li>Bunga tabungan</li>
                    <>: 2% pa </>
                  </ul>
                </ul>
              </motion.div>
            ) : null}

            {/* Ketentuan */}
            {tabs === 2 ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="mx-7 md:mx-10 md:px-10"
              >
                <ul className="text-abuGelap sm:ml-4">
                  <h3 className={`${styles.heading5} text-black my-4`}>
                    D. Ketentuan
                  </h3>
                  <ul className="list-inside list-disc pl-4 sm:pl-16">
                    <li className=" p-2">
                      Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
                      ditambahbukukan pada rekening tabungan.
                    </li>
                    <li className=" p-2">
                      Sebagai bukti transaksi tabungan, bank akan menerbitkan
                      sertipikat tabungan berjangka dan menatausahakan rekening
                      atas nama penabung.
                    </li>
                    <li className=" p-2">
                      Jika terjadi penarikan tabungan sebelum jatuh tempo maka
                      penabung akan dikenakan pinalti sebesar hadiah yang
                      diterima di awal (nilai hadiah pada saat diterima).
                    </li>
                    <li className=" p-2">
                      Jika hadiah yang dikehendaki nasabah sudah tidak tersedia
                      di pasaran, maka hadiah akan diganti dengan hadiah lain
                      yang setara atas persetujuan nasabah.
                    </li>
                    <li className=" p-2">
                      Jika penabung meninggal dunia maka saldo tabungan akan
                      dibayarkan kepada ahli warisnya sesuai ketentuan di BPR
                      Arto Moro.
                    </li>
                  </ul>
                </ul>
              </motion.div>
            ) : null}

            {/* Tabel */}
            {tabs === 3 ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="md:mx-10 md:px-10"
              >
                <h3
                  className={`${styles.heading5} text-black my-4 ml-8 sm:ml-4`}
                >
                  D. Tabel Penempatan Dana
                </h3>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="data tabel">
                    <TableHead>
                      <TableRow className="bg-biruMuda-400">
                        <TableCell
                          align="center"
                          style={{ border: "1px solid black" }}
                        >
                          No
                        </TableCell>
                        <TableCell style={{ border: "1px solid black" }}>
                          Nominal Tabungan
                        </TableCell>
                        <TableCell style={{ border: "1px solid black" }}>
                          Jangka Waktu (Tahun)
                        </TableCell>
                        <TableCell style={{ border: "1px solid black" }}>
                          Nominal Hadiah
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {PenempatanDana.map((row, index) => {
                        let shouldRenderAmountCell = false;

                        if (
                          index === 0 ||
                          row.amount !== PenempatanDana[index - 1].amount
                        ) {
                          shouldRenderAmountCell = true;
                        }

                        const amountCell = shouldRenderAmountCell ? (
                          <TableCell
                            rowSpan={rowSpanAmount[amountIndex]}
                            style={{ border: "1px solid black" }}
                          >
                            {row.amount.toLocaleString("id-ID")}
                          </TableCell>
                        ) : null;

                        if (shouldRenderAmountCell) {
                          amountIndex += 1;
                        }

                        return (
                          <TableRow key={index}>
                            <TableCell
                              align="center"
                              style={{ border: "1px solid black" }}
                            >
                              {index + 1}
                            </TableCell>
                            {amountCell}
                            <TableCell style={{ border: "1px solid black" }}>
                              {row.term}
                            </TableCell>
                            <TableCell style={{ border: "1px solid black" }}>
                              {row.reward.toLocaleString("id-ID")}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </motion.div>
            ) : null}

            {/* Form */}
            {tabs === 4 ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="mx-6 sm:mx-10 sm:px-10"
              >
                <div className={`${styles.flexCenter}`}>
                  <FormBank
                    isiPenting={<Kredit />}
                    value={"Kredit"}
                    endpoint={"http://localhost:8000/api/kredit"}
                  />
                </div>
              </motion.div>
            ) : null}
          </section>

          {/* Button next prev */}
          <section className="flex ml-16 gap-4">
            <div
              onClick={() => updateMenu(0)}
              className={`bg-biruMuda-200 text-primary hover:text-biruMuda-500 hover:border-biruMuda-500 hover:bg-primary hover:border-2 duration-500 px-4 py-2 rounded-md font-bold cursor-pointer`}
            >
              Kembali Menu
            </div>
            <div
              onClick={() => prevTab(tabs)}
              className={`${
                tabs === 1 && "hidden"
              } text-biruMuda-500 border-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-4 py-2 rounded-md font-bold cursor-pointer`}
            >
              prev
            </div>
            <div
              onClick={() => nextTab(tabs)}
              className={`${
                tabs === 4 && "hidden"
              } bg-biruMuda-500 text-primary hover:text-biruMuda-500 hover:border-biruMuda-500 hover:bg-primary hover:border-2 duration-500 px-4 py-2 rounded-md font-bold cursor-pointer`}
            >
              next
            </div>
          </section>
        </section>
      ) : null}
    </>
  );
};

export default titip;
