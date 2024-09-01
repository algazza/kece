import React from 'react'
import IntroBanner from '../Layouts/IntroBanner'
import TitleBlueBanner from '../Layouts/TitleBlueBanner'
import FormBank from '../Components/FormBank'
import { BlueBanner, formUsahaSponsor } from '../helper'
import { SponsorForm } from '../Components/Form'
import styles from '../helper/style'
import { nomorSponsor } from '../helper/nomor'

const Sponsor = () => {
  return (
    <>
    <section>
      <IntroBanner
        ImageBanner={BlueBanner}
        TitleBanner={"Sponsor"}
        DescriptionBanner={`
              Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
              memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
              dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
              menawarkan berbagai produk kredit yang dapat disesuaikan dengan
              keperluan Anda.
            `}
      />
      <TitleBlueBanner title={"Sponsor"} />
    </section>

      <FormBank
        isiPenting={<SponsorForm />}
        judulRadio='Bidang Usaha'
        namaRadio='bidang_usaha'
        dummyprops={formUsahaSponsor}
        value={"Sponsor"}
        nomer={nomorSponsor}
        page={"/Sponsor"}
        endpoint={"http://localhost:8000/api/sponsor"}
      />
</>
  )
}

export default Sponsor