import FormBank from "../Components/FormBank";
import Tabungan from "../Components/Form/Tabungan";
import styles from "../data/style";

const Home = () => {
    return (
<>
            <main className="bg-primary overflow-hidden font-jakarta">
                <div className={`${styles.flexCenter}`}>
                    <FormBank isiPenting={<Tabungan />} value={""} routes={"{{route}}"}/>

                </div>                          
            </main>
            {/* <Footer/> */}
</>
    ); 
};

export default Home;