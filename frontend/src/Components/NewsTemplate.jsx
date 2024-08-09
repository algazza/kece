import { sample } from "../data";
import styles from "../data/style";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

const NewsTemplate = () => {
    return (
        <>
    <Header />
        <main className={`${styles.paddingY}`} >
            <section className={`${styles.paddingY} ${styles.marginX} `}>

                <h5 className={`${styles.heading5} ${styles.marginX}flex justify-center text-center `}>Lorem ipsum dolor sit amet consectetur. Malesuada phasellus malesuada amet congue hac suspendisse. lorem ipsum 2024</h5>

                <img src={sample} alt="" srcset="" />

            <div className={`${styles.fontBody} mx-32 mt-10`}>
                <p>
                Lorem ipsum dolor sit amet consectetur. Libero amet mi turpis phasellus. At nullam in nisl sagittis interdum euismod non feugiat. Arcu vestibulum tempus rhoncus nunc. In arcu nunc viverra eget erat. Duis mauris lacus luctus dui. Cras iaculis mauris orci dapibus.
<br />
<br />
Pellentesque nulla aliquam pellentesque vitae sit morbi risus. Risus tincidunt quisque nullam sem in orci pharetra. Tellus amet vulputate purus nunc sed at. Ac eros augue nulla sem quam. In mauris quam tempus ut. Vitae in proin amet nulla nisi tellus massa vestibulum dui. Id molestie ac euismod eget malesuada. Elit risus dictum ut quisque orci in. Augue augue pellentesque justo fusce at viverra faucibus massa a. Maecenas id ullamcorper id ac interdum scelerisque mattis diam nunc. Sed dui tempus volutpat duis ultricies augue. Placerat vel molestie sodales auctor pellentesque ut. Tincidunt donec augue lacus dictum. Posuere mauris nisi consequat morbi dui.
<br />
<br />
Mollis arcu velit orci pretium ipsum quam porttitor urna. Donec felis morbi sem consequat. Feugiat diam integer ultricies rutrum suspendisse sodales enim. Nibh sociis arcu a augue et lobortis enim. Risus sodales nam sit iaculis sit. Eleifend dignissim commodo pellentesque sit fringilla congue elit. Arcu pretium duis vitae congue semper diam quam. Velit id nullam commodo cras justo. Proin velit neque suspendisse volutpat eros sodales ut scelerisque. Luctus ipsum lacus pellentesque praesent. Quam magna nulla molestie lectus amet ut. Cras diam aenean lobortis commodo enim justo consequat convallis in. Duis et consectetur sodales semper euismod auctor. In sed mi sem felis erat risus.
<br />
<br />
Ut tempus enim mattis in sagittis nisl id turpis ultrices. Non maecenas erat fames et mauris tincidunt ac donec purus. Morbi enim viverra vivamus morbi. Non consequat enim ipsum nibh aenean. Platea amet aliquam gravida ut sit vel. Enim felis nulla vel in. Ipsum tempus enim id aliquam neque magna ac lacus. Aliquam tristique lacus massa quisque blandit mauris diam. Dictum risus sit orci tortor arcu netus a. Ac cras maecenas quis enim. In risus sollicitudin ac odio sed metus amet amet euismod. Sed scelerisque tempus ipsum non amet pellentesque. Cras etiam neque vitae nibh nulla hendrerit rutrum ultrices massa. Convallis mauris amet nibh integer. Dui in dapibus non sed.
                </p>


            </div>

            </section>

        </main>
    <Footer />
        </>
    )
}

export default NewsTemplate;