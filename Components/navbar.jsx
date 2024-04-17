import Link from "next/link";
import Greetings from "./greetings";


const downloadFile = () => {
  window.location.href = "https://drive.google.com/file/d/1n-zdPlSurdx24RNs4egc0C5iOCw1B_n1/view?usp=drive_link"
}

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          <Greetings/>
        </Link>
      </div>
      <a onClick={downloadFile} className="cta-btn">My Resume</a>
    </div>
  )
}

export default Navbar;