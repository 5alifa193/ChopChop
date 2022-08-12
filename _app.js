import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
