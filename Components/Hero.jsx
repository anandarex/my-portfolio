import Image from "next/image";

const Hero = () => {

    return(
        <div className="hero-container">
            <Image src='static/images/profile.png' className="profile-img" width={300} height={300} alt="Rizki Personal headshot"/>
            <div className="hero-text">
                <h1>Hey, I'm Rizki</h1>
                <p>
                    I'm a programmer and business analyst from Bintaro, South Jakarta, Indonesia. I Specialize building web interface with React and React Native
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
                    href="https://www.linkedin.com/in/ranandars"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero;