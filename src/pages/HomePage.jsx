import Navbar from '../components/Navbar';
import './HomePage.css';
import heroSectionWallpaper from '../assets/hero-wallpaper.jpg';

// Swiper dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Image imports
import Amblyopia from '../assets/amblyopia.jpeg';
import LazyEye from '../assets/lazy-eye.jpg';
import EyeStrain from '../assets/eye-strain.jpg';
import ScleralLensAdjustment from '../assets/scleral-lens-adjustment.png';
import PostSurgerySupport from '../assets/post-surgery-support.jpg';
import EyeImage from '../assets/eye.webp';

const diseases = [
    {
        image: Amblyopia,
        name: "Amblyopia",
        description: "Amblyopia, commonly known as 'lazy eye', is a vision development disorder where one eye doesn't achieve normal vision even with prescription glasses or contact lenses."
    },
    {
        image: LazyEye,
        name: "Lazy eye",
        description: "Lazy eye, or amblyopia, is a vision disorder where one eye doesn't develop properly, leading to reduced vision."
    },
    {
        image: EyeStrain,
        name: "Eye strain",
        description: "Eye strain is discomfort or fatigue in the eyes caused by prolonged use, often associated with activities like staring at screens or reading for long periods."
    },
    {
        image: ScleralLensAdjustment,
        name: "Scleral lens adjustment",
        description: "Scleral lens adjustment refers to the fine-tuning of large, gas-permeable contact lenses that cover the entire cornea and sclera for optimal fit and comfort."
    },
    {
        image: PostSurgerySupport,
        name: "Post surgery support",
        description: "Post surgery support refers to care and assistance provided to patients following a surgical procedure to aid in their recovery and ensure optimal healing."
    }
];

function HomePage() {
    const heroSectionStyling = {
        backgroundImage: `url(${heroSectionWallpaper})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div id="home-page" style={heroSectionStyling}>
            <Navbar />
            <div id="hero-section">
                <div id="hero-gradient-layer">
                    <h1>HEALTHY EYES, HAPPY YOU</h1>
                    <p>{"Do you ever feel like one of your eyes isn't quite pulling its weight? Does it sometimes drift inward or outward, causing double vision or blurry images? If so, you might be experiencing a lazy eye, a condition where one eye weakens over time. But don't worry, you're not alone! Here at Perfect Vision, we understand the challenges of lazy eye and offer a range of solutions to help you regain clear, comfortable vision. Whether you're seeking natural exercises, vision therapy techniques, or information on potential treatments, we're here to guide you on your path to stronger, balanced vision."}</p>
                </div>
            </div>
            <div id="page2">
                <h1>DISEASES WE DEAL IN</h1>
                <div id="swiper-div">
                    <div id="swiper-div-gradient-layer" />
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {diseases.map((disease, index) => (
                            <SwiperSlide className='mySwiperSlide' key={index} style={{ display: "flex" }}>
                                <div className="slide-left">
                                    <div className="slide-image-container">
                                        <img src={disease.image} alt={disease.name} />
                                    </div>
                                </div>
                                <div className="slide-right">
                                    <h1>{disease.name}</h1>
                                    <p>{disease.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div id="page3">
                <div id="page3-left">
                    <div id="page3-image-container">
                        <img src={EyeImage} alt="Page 3 Image" />
                        <div className="box box1">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nihil corporis veritatis voluptatibus nostrum asperiores.</p>
                        </div>
                        <div className="box box2">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, laudantium accusantium quidem illo libero consequuntur minima aliquid cum magnam facere.</p>
                        </div>
                    </div>
                </div>
                <div id="page3-right">
                    <h4>some descriptor here</h4>
                    <h1>Main heading here</h1>
                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis exercitationem et voluptatem quam doloribus, ab enim incidunt non nam.</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis exercitationem et voluptatem quam doloribus, ab enim incidunt non nam.</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis exercitationem et voluptatem quam doloribus, ab enim incidunt non nam.</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis exercitationem et voluptatem quam doloribus, ab enim incidunt non nam.</li>
                    </ol>
                </div>
            </div>
            <div id="page4">
                <h1>HAPPY CUSTOMERS</h1>
                <div id="grid">
                    <div className="row">
                        <div className="cell"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
