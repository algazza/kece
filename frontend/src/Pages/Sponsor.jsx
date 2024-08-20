import React from 'react'
import IntroBanner from '../Layouts/IntroBanner'
import TitleBlueBanner from '../Layouts/TitleBlueBanner'
import FormBank from '../Components/FormBank'
import { BlueBanner, formUsahaSponsor } from '../data'
import { SponsorForm } from '../Components/Form'
import styles from '../data/style'

const Sponsor = () => {
  return (
    <>
    <section>
      <IntroBanner
        ImageBanner={BlueBanner}
        TitleBanner={"Pick Up Service"}
        DescriptionBanner={`
              Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
              memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
              dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
              menawarkan berbagai produk kredit yang dapat disesuaikan dengan
              keperluan Anda.
            `}
      />
      <TitleBlueBanner title={"Pick Up Service"} />
    </section>

      <FormBank
        isiPenting={<SponsorForm />}
        judulRadio='Bidang Usaha'
        namaRadio='usaha'
        dummyprops={formUsahaSponsor}
        value={"Sponsor"}
        page={"/PickupPage"}
        endpoint={"http://localhost:8000/api/Sponsor"}
      />
</>
  )
}

export default Sponsor