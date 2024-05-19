import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import './ContactPage.css';
import { useForm } from "react-hook-form";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

function ContactPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    return (
        <div id="contact-page">
            <Navbar />
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
            <Footer />
        </div>
    )
}

export default ContactPage;
