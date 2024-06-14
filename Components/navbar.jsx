import Link from "next/link";
import Greetings from "./greetings";


const downloadFile = () => {
  window.location.href = "https://drive.google.com/file/d/1IXEpFSwjwUb081NcZ_lw44K-_L4VxaW1/view"
}

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          <Greetings/>
        </Link>
      </div>
      <a onClick={downloadFile} target="_blank" rel="noopener noreferrer" className="cta-btn">My Resume</a>
    </div>
  )
}

export default Navbar;