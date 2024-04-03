const Footer = () => {
    return (
        <>
            <hr/>
            <div className="footer-container">
                <p>
                    {new Date().getFullYear()} Rizki Anandar Portfolio
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
                </div>
            </div>
        </>
    )
}

export default Footer;