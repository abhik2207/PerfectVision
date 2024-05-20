/* eslint-disable no-useless-escape */
import Navbar from '../components/Navbar';
import './HomePage.css';
import heroSectionWallpaper from '../assets/hero_wallpaper.png';

// Swiper dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Image imports
import Amblyopia from '../assets/3.png';
import EyeTrackingProblem from '../assets/4.png';
import EyeStrain from '../assets/5.png';
import ScleralLensAdjustment from '../assets/6.png';
import PostSurgerySupport from '../assets/7.png';
import EyeImage from '../assets/eye.webp';
import Footer from '../components/Footer';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Game1 from '../assets/game1.jpg';
import { useForm } from 'react-hook-form';

import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const diseases = [
    {
        image: Amblyopia,
        name: "Amblyopia / Lazy Eyes",
        imagePosition: 'center',
        description: "Amblyopia, often called lazy eye, is a condition where one eye doesn't develop proper vision during childhood. This happens when the brain favors the stronger eye, causing the weaker eye to become blurry. It's most common in children under 7 and can lead to permanent vision loss if untreated. Causes include eye misalignment (strabismus), unequal eye strength, or blocked vision in one eye (cataract). Early diagnosis and treatment, often with patching the stronger eye, can strengthen the weaker eye's vision."
    },
    {
        image: EyeTrackingProblem,
        name: "Eye-Tracking Problems",
        imagePosition: 'top',
        description: "Lazy eye, also known as amblyopia, occurs when one eye develops weaker vision due to abnormal connections between the brain and that eye in early childhood. This can happen because the eye is misaligned (wanders), has uncorrected blurry vision, or experiences other vision problems. The brain favors the stronger eye, further weakening the 'lazy' eye's vision. Early diagnosis and treatment with patching or special lenses are crucial to prevent permanent vision loss."
    },
    {
        image: EyeStrain,
        name: "Eye Strain",
        imagePosition: 'center',
        description: "Eye strain is a temporary discomfort caused by focusing intensely for long periods, often on digital screens. It leads to tired, burning, or itchy eyes, blurred vision, headaches, and light sensitivity. While not serious, it can disrupt daily activities. Resting your eyes, blinking frequently, and taking breaks from screens can help prevent and ease symptoms."
    },
    {
        image: ScleralLensAdjustment,
        name: "Scleral Lens Adjustment",
        imagePosition: 'top',
        description: "Scleral lens adjustment is a meticulous process performed by an eye specialist to ensure a perfect fit. It involves fine-tuning the lens diameter, base curve, and edge design to comfortably vault over the cornea and rest on the sclera. This creates a tear reservoir for optimal vision correction while ensuring proper clearance to avoid irritation or blood flow blockage on the eye's surface. The goal is to achieve a secure, comfortable lens that provides clear vision and long-term eye health benefits."
    },
    {
        image: PostSurgerySupport,
        name: "Post Surgery Support",
        imagePosition: 'top',
        description: "Post-surgery support encompasses all the care a patient receives after surgery to ensure a smooth recovery. This includes meticulous wound care, pain management through medication and strategies, physical therapy for regaining strength and mobility, and emotional support from healthcare professionals, family, or home care services, depending on the surgery's complexity and the patient's individual needs. This comprehensive support system plays a crucial role in maximizing healing, preventing complications, and facilitating a successful return to daily life."
    }
];

const games = [
    {
        name: '',
        image: Game1
    },
    {
        name: '',
        image: Game1
    },
    {
        name: '',
        image: Game1
    },
    {
        name: '',
        image: Game1
    },
    {
        name: '',
        image: Game1
    }
];

const reviews1 = [
    {
        name: "Mrs. Gemma Hunnam",
        remark: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo officia dolorem commodi sunt? Quod dolores magnam illum eius facere quibusdam nam. Quam culpa veniam placeat provident voluptatem delectus officiis consequuntur minima sit tempore dolorem, praesentium eveniet odit corporis distinctio incidunt cupiditate sapiente nobis, quidem voluptate repellendus, suscipit consequatur! Deleniti excepturi fuga tempore velit sed autem sequi est voluptates porro doloremque.",
        age: 32,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJbgNAVSz72oPiG0qTNpeofPICQ7-geF3Ja3vBl_qYQ&s"
    },
    {
        name: "Mr. Jax Teller",
        remark: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente non aperiam voluptatibus odit qui placeat nisi veritatis molestiae ducimus sed ad officia architecto perspiciatis blanditiis amet quia tempore, quibusdam vero odio iusto aliquid voluptas hic totam. Similique provident, quos, ab, optio maiores at temporibus labore numquam fugiat dolores sequi perferendis quisquam sunt consectetur! Voluptatibus accusamus necessitatibus minima beatae? Recusandae voluptatem aperiam ipsum maxime alias at voluptatum earum cum! Iste!",
        age: 26,
        image: "https://www.hollywoodreporter.com/wp-content/uploads/2019/03/charlie_hunnam-getty-h_2019.jpg"
    }
];

const reviews2 = [
    {
        name: "Mr. Bobby Munson",
        remark: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, earum soluta. Voluptates accusamus quo, vel magnam, rem tenetur dolore inventore molestiae nulla quasi minima consectetur itaque in exercitationem fugit ea perferendis quae reiciendis unde? Deleniti adipisci earum reprehenderit repudiandae iste necessitatibus dolorem fuga commodi excepturi, deserunt, maiores, esse voluptatem consequuntur nostrum nulla. Reiciendis possimus error maiores eos? Exercitationem praesentium blanditiis repellat, ipsam quo earum quisquam modi facilis voluptatibus aperiam illum!",
        age: 60,
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:good:444,e_sharpen:60/mpx/2704722219/2022_11/charlie-8d36e9.jpg"
    },
    {
        name: "Mr. Nero Padilla",
        remark: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ad, dignissimos nobis cumque ex, sunt dolorem quidem asperiores odit possimus porro quam hic ipsa eos omnis vero rerum soluta repudiandae recusandae officiis quibusdam nemo vel. Architecto inventore fugit molestias repellat iure facilis neque distinctio ducimus cum magnam et aliquam soluta, aspernatur perspiciatis nesciunt, explicabo quibusdam expedita rerum provident perferendis.",
        age: 41,
        image: "https://c4.wallpaperflare.com/wallpaper/385/407/665/charlie-hunnam-long-haired-guy-actor-wallpaper-preview.jpg"
    }
];

const heroSectionStyling = {
    backgroundImage: `url(${heroSectionWallpaper})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
};


function HomePage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    return (
        <div id="home-page" style={heroSectionStyling}>
            <Navbar />
            <div id="hero-section">
                <div id="hero-gradient-layer">
                    <h1>HEALTHY EYES, HAPPY YOU</h1>
                    <h2>See the Difference with Simple Vision Training</h2>
                    <Link className='link' to={'/how-it-works'}><button><p>Your Path to Perfect Vision <FaArrowRight /></p></button></Link>
                    {/* <p>Innovative solutions for clear vision.</p> */}
                </div>
            </div>
            <div id="page1">
                <h1><span>Revitalize</span> Your Vision<br />with Perfect Vision Innovative Home-Based Therapy</h1>
                <div id="cards-container">
                    {diseases.map((disease, index) => (
                        <div key={index} className="page2-card">
                            <div className="page2-card-masker"></div>
                            <h1>{disease.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div id="page2">
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
                        {games.map((game, index) => (
                            <SwiperSlide className='mySwiperSlide' style={{ backgroundImage: `url(${game.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex' }} key={index}>
                                <div className="swiperSlideMasker">
                                    <h1>{game.name}</h1>
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
                            <div className="box-up">
                                <p>Globally</p>
                            </div>
                            <div className="box-down">
                                <div className="box-left">
                                    <h1>1.36%</h1>
                                </div>
                                <div className="box-right">
                                    <p>of children have lazy eye globally.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="box-up">
                                <p>Roughly</p>
                            </div>
                            <div className="box-down">
                                <div className="box-left">
                                    <h1>3%</h1>
                                </div>
                                <div className="box-right">
                                    <p>of population is affected by Amblyopia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page3-right">
                    <h4>Innovative Solutions for Clear Vision</h4>
                    <h1>Tired of Blurry Vision Holding you Back?</h1>
                    <ol>
                        <li>Ditch the eye doctor visits and strengthen your vision from the comfort of your couch! Perfect Vision uses fun and interactive games to tackle common vision problems like lazy eye, crossed eyes, and double vision. Just a few minutes a day playing these games at home can help you see better, just like thousands of others who have trusted Perfect Vision to improve their sight.</li>
                    </ol>
                </div>
            </div>
            <div id="page4">
                <h1>HAPPY CUSTOMERS</h1>
                <div id="review-grid">
                    <div className="review-row">
                        {reviews1.map((review, index) => (
                            <div className="review-cell" key={index}>
                                <img src={review.image} alt="Review image" />
                                <div className="reviewer">
                                    <h1>{review.name} ({review.age})</h1>
                                </div>
                                <div className="review">
                                    <p>{review.remark}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="review-row">
                        {reviews2.map((review, index) => (
                            <div className="review-cell" key={index}>
                                <img src={review.image} alt="Review image" />
                                <div className="reviewer">
                                    <h1>{review.name} ({review.age})</h1>
                                </div>
                                <div className="review">
                                    <p>{review.remark}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="page5">
                <div id="contact-section">
                    <div id="contact-body">
                        <div id="contact-form">
                            <h1>Get in touch</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, sint?</p>
                            <form method="POST" noValidate onSubmit={handleSubmit((formData) => {
                                console.log({ formData });
                                reset();
                            })}>
                                <div className="contact-row">
                                    <input type="text" id="name" {...register('name', { required: "Enter your name please" })} placeholder="Enter your name here" />
                                    {errors.name && <p className="error-msg">{errors.name.message}</p>}
                                </div>
                                <div className="contact-row">
                                    <input type="text" id="email" {...register('email', { required: "Enter your email please", pattern: { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: 'Please enter a valid email address' } })} placeholder="Enter your email here" />
                                    {errors.email && <p className="error-msg">{errors.email.message}</p>}
                                </div>
                                <div className="contact-row">
                                    <textarea type="text" id="query" {...register('query', { required: "Enter your query please" })} rows={4} placeholder="Enter your query here" />
                                    {errors.query && <p className="error-msg">{errors.query.message}</p>}
                                </div>
                                <div className="submitSection">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div id="contact-cover">
                            <h1>Contact us</h1>
                            <div className="touch-row">
                                <div className="touch-icon">
                                    <FaMapMarkerAlt className="icon" />
                                </div>
                                <div className="touch-content">Building 11, Madini,<br /> New Delhi - 110046</div>
                            </div>
                            <div className="touch-row">
                                <div className="touch-icon">
                                    <IoCall className="icon" />
                                </div>
                                <div className="touch-content">+91 81278 81938</div>
                            </div>
                            <div className="touch-row">
                                <div className="touch-icon">
                                    <IoIosMail className="icon" />
                                </div>
                                <div className="touch-content">perfectvision@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;
