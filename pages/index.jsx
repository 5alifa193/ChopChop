import Head from 'next/head';
import Image from 'next/image';
import home from '../styles/Home/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <>
    <div className='main-bg py-5 min-height'>
      <div className='container text-center'>
        <h2 className={home.header}>OUR PUPLICATIONS</h2>
      <div className='d-flex flex-wrap'>
      <div className='col-md-4 text-center'>
      <img src="./img/1.png" alt="" className={`w-100 ${home.animate}`}/>
      <div>
      <p className='fs-3'>Who We Are..?</p>

      <Link href={'/our-story'}><button className={`p-2 ${home.myButton}`}>
      <i className="fa-solid fa-angle-right"></i>
      </button></Link>
      </div>
      </div>
      <div className='col-md-4 text-center'>
      <img src="./img/2.png" alt="" className={`w-100 ${home.animate}`}/>
      <div>
      <p className='fs-3'>Who We Serve..?</p>
      <Link href={'/our-story'}>
      <button className={`p-2 ${home.myButton}`}>
      <i className="fa-solid fa-angle-right"></i>
      </button></Link>
      </div>
      </div>
      <div className='col-md-4 text-center'>
      <img src="./img/3.png" alt="" className={`w-100 ${home.animate}`}/>
      <div>
      <p className='fs-3'>Cooking Club</p>
      <Link href={'/our-recipes'}>
      <button className={`p-2 ${home.myButton}`}>
      <i className="fa-solid fa-angle-right"></i>
      </button></Link>
      </div>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}
