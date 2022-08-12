import story from '../../styles/OurStory/OurStory.module.css';
import ReactPlayer from 'react-player';
export default function OurStory() {
  return (
    <>
    <section className={`main-bg py-5  ${story.section}`}>
      <div className="container">
        <div className={`text-center py-5`}>
      <h2 className={`${story.header} ${story.font}`}>WHO WE ARE</h2>
      <div>
      <p className={`container mt-5 ${story.text}`}>Founded in 2010 by Sally Sampson, ChopChop Family is a national nonprofit organization. Endorsed by the American Academy of Pediatrics and winner of the prestigious James Beard Foundation Award for Publication of the Year, ChopChop Family includes a diverse and inclusive collection of products for children, parents, and older adults. In addition to magazines and cookbooks, the ChopChop Family brand includes the Eatable Alphabet, digital content, and cooking curricula, reaching over three million families worldwide.</p>
      </div>

      <div className='py-5'>
      <iframe className={`${story.frame}`} width="1080" height="608" src="https://www.youtube.com/embed/DBwPv7ifXKo" title="Who we are - ChopChop Family" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
    </div>

    <div className={`py-5 ${story.mission}`}>
    <div className='container py-5'>
      <h3 className={story.head}>OUR MISSION</h3>
      <p className={story.textt}>TO INSPIRE AND TEACH FAMILIES TO COOK AND EAT REAL FOOD TOGETHER</p>
    </div>
    </div>
    <div className='py-5'>
      <div className={`container`}>
        <div className='container'>
      <h2 className={`${story.team}`}>MEET THE TEAM</h2>
    
    <div className={`${story.list} position-relative`}>
      <ul className='list-unstyled'>
        <div className='d-flex'>
        <i className={`fa-solid fa-minus position-absolute ${story.icon}`}></i>
        <h5 >THE CHOPCHOP TEAM</h5>
        </div>
        <li>
          <h6>
            Adam Ried ,<span className={`${story.listItem}`}> Contributor </span>
          </h6>
          </li>
      </ul>
    </div>
    </div>
    </div>
    </div>
    </section>


    </>
  )
}