const Footer = () => {
    return (
        <>
            <hr/>
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Made by Rizki Anandar Saputra
                </p>
                <div className="social_icons">
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
                    href="https://linkedin.com/in/ranandars"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;