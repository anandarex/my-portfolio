import Image from "next/image";
import React from "react";
import { ReactDOM } from "react-dom";


function FadeinSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
            {props.children}
        </div>
    );  
}

const Hero = () => {

    return(

        <FadeinSection>
        <div className="hero-container">
            <Image src='/static/images/profile.png' className="profile-img" width={300} height={300} alt="Rizki Personal headshot"/>
            <div className="hero-text">
                <h1>Hey, I'm Rizki</h1>
                <p>
                    I'm a programmer and business analyst from Bintaro, South Jakarta, Indonesia.<br/> I Specialize building web interface with React and React Native
                </p>
                <div className="social-icons">
                    <a
                    href="https://instagram.com/anandarec"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                    href="https://github.com/anandarex"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/ranandars?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </div>
        </FadeinSection>
    );
}

export default Hero;