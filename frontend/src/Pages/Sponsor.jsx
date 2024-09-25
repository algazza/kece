import React from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import FormBank from "../Components/FormBank";
import { BlueBanner, formUsahaSponsor } from "../helper";
import { SponsorForm } from "../Components/Form";
import styles from "../helper/style";
import { nomorInduk } from "../helper/nomor";
import { localhostLink } from "../helper/localhost";

const Sponsor = () => {
  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Sponsor"}
          DescriptionBanner={`
              Tugas Aldara
            `}
        />
        <TitleBlueBanner title={"Sponsor"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <FormBank
        isiPenting={<SponsorForm />}
        judulRadio="Bidang Usaha *"
        namaRadio="bidang_usaha"
        dummyprops={formUsahaSponsor}
        value={"Sponsor"}
        nomer={nomorInduk}
        page={"/Sponsor"}
        endpoint={`${localhostLink}/api/sponsor`}
      />
    </>
  );
};

export default Sponsor;
