import Kredit from "@/Components/Form/Kredit";
import FormBank from "@/Components/FormBank";
import styles from "@/data/style";
import React from "react";

const KreditPage = () => {
    return (
        <section>
            <div className={`${styles.flexCenter}`}>
                <FormBank
                    isiPenting={<Kredit />}
                    value={"Kredit"}
                    page={"/KreditPage"}
                    endpoint={"http://localhost:8000/api/kredit"}
                />
            </div>
        </section>
    );
};

export default KreditPage;
