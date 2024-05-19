import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import './AboutPage.css';

function AboutPage() {
    return (
        <div id="about-page">
            <Navbar />

            <div id="about-section">
                <div id="about-left">
                    <div className="about-top">
                        <h2>Lorem ipsum</h2>
                        <h1>Who we are?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse hic consequuntur. Eveniet accusantium sint eligendi in ipsum voluptate alias sit, ullam minus ad id consequuntur fugit delectus incidunt omnis repudiandae, autem hic tempora? Facere sed doloremque tempora provident incidunt illo dolorem enim voluptatibus voluptatem architecto voluptas molestiae, nisi earum?</p>
                        <div className="image-container">
                            <img src="https://images.unsplash.com/photo-1715645973101-f07bc6951c03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
                        </div>
                    </div>
                    <div className="about-bottom">
                        <h1>Our mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eaque accusamus. Animi iusto beatae eos dolores similique voluptatibus, laborum atque inventore ipsam recusandae quo aperiam, eaque voluptates non, exercitationem obcaecati in. Eveniet accusantium voluptatum nihil, numquam quaerat, quidem vel ratione beatae deleniti enim fugiat ab aut animi eum architecto nesciunt neque pariatur earum consequatur repudiandae ullam exercitationem? Non sit consequatur minus sint corrupti cum, fugiat autem consequuntur fuga sunt eaque doloribus voluptatum delectus, numquam fugit ducimus commodi! Quae, qui dolore!</p>
                    </div>
                </div>
                <div id="about-right">
                    <div className="about-bottom">
                        <h1>Our vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, qui. Officia odio amet praesentium, mollitia quisquam commodi aperiam fugiat labore vel ex, reiciendis inventore reprehenderit omnis nulla saepe fuga, veniam architecto iure! Totam veritatis eius fugiat iure. Illum pariatur tenetur harum doloremque, dicta, ipsam a totam, non quod nisi maxime ad placeat laudantium aut! Unde laudantium reprehenderit laborum nemo iure obcaecati odio beatae error, repellendus ut, vero harum placeat saepe mollitia voluptas veniam impedit modi nam recusandae. Laboriosam, asperiores eligendi?</p>
                    </div>
                    <div className="about-top">
                        <h2>Lorem ipsum</h2>
                        <h1>Who we are?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa soluta earum quas neque, inventore facere consectetur, mollitia excepturi, accusamus rerum voluptatum sit iste deleniti impedit officiis perferendis corrupti laborum dolore aliquam! Exercitationem sed in repellendus minus ex temporibus eaque voluptate a dolorum, sapiente, maxime sequi recusandae quis! Doloremque, nostrum!</p>
                        <div className="image-container">
                            <img src="https://images.unsplash.com/photo-1715645973101-f07bc6951c03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutPage;
