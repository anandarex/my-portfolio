import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        As a developer, I have always been passionate about creating elegant and efective solutions to complex problems.
                        I have good foundation in application development, with a focus on web technologies such as HTML, CSS, and Javascript.
                    </p>
                    <p>
                        Throughout my career, I have worked on a wide range project, from simple static websites to complex enterprise-level applications.
                    </p>
                    <p>
                        Create something backward that cool
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/static/images/about.png' className="profile-img" width={300} height={500} />
                </div>
            </div>
        </div>
    )
}

export default About;