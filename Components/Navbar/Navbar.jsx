import navbar from '../../styles/Navbar/Navbar.module.css';
import Link from 'next/link';
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom border-2">
        <div className="container">
          <div className="d-flex align-items">
            <Link href='/'>
        <img className={`navbar-brand ${navbar.logo}`} src="./img/logo.png" width='150px'/>
        </Link>
        </div>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item active position-relative">
              <Link href='/'>
            <a className={`nav-link fs-5 text-black  ${navbar.line}`}>Home <span className="visually-hidden">(current)</span></a>
            </Link>
            </li>
            <li className="nav-item active position-relative">
              <Link href='/our-story'>
              <a className={`nav-link fs-5 text-black ${navbar.line}`} href="#">OurStory <span className="visually-hidden">(current)</span></a>
              </Link>
            </li>
            <li className="nav-item active position-relative">
              <Link href='/our-recipes'>
              <a className={`nav-link fs-5 text-black ${navbar.line}`} href="#">OurRecipes <span className="visually-hidden">(current)</span></a>
              </Link>
            </li>
            <li className="nav-item active position-relative">
            <Link href='/contact'>
              <a className={`nav-link fs-5 text-black ${navbar.line}`} href="#">ContactUs <span className="visually-hidden">(current)</span></a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
