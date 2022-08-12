import footer from '../../styles/Footer/Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className={`footer-bg pt-5 pb-5`}>
<div className="container">
      <div className="row">
      <div className="col-md-4">
        <h5 className="mt-5">SIGN UP FOR OUR NEWSLETTER</h5>
        <a href="#" className="mt-3 text-decoration-none text-black subscribe">Click here to subscribe!</a>
        <p className="mt-3 mb-5">© 2021 ChopChop Family. Lovingly crafted by Bear {'&'} Roo.</p>
      </div>
      
      <div className="col-md-4">
        <h5 className="mt-5">FOLLOW US ON SOCIAL MEDIA</h5>
        <div className="d-flex col-md-6 col-sm-6 justify-content-between mt-4">
        <a><i className={`fa-brands fa-facebook fs-3 ${footer.facebook}`}></i></a>
        <a><i className="fa-brands fa-youtube text-danger fs-3"></i></a>
        <a href="https://www.linkedin.com/in/ahmed-khalifa-2a1669246/" target="_blank"><i className={`fa-brands fa-linkedin fs-3 ${footer.linkedIn}`}></i></a>
        <a href="https://github.com/5alifa193" target="_blank"><i className="fa-brands fa-github text-black fs-3"></i></a>
        </div>
      </div>
    
      <div className="col-md-4">
        <h5 className="mt-5">CONTACT ME</h5>
  
        <p className='small-font subscribe'>5alifa193@gmail.com</p>
        <p>+201001467399</p>
        <hr/>
        <p>617.924.3993</p>
        <p>841 WORCESTER ST #332</p>
        <p>NATICK, MA 01760</p>
        
      </div>
      </div>
      </div>
    </footer>
    </>
  )
}
