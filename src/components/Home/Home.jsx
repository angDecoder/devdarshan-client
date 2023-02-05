import React, { useRef, useState, useEffect } from 'react';
import temples from '../../assets/OnboardedTemples';

import './Home.css';
import right from '../../assets/right.svg';
import left from '../../assets/left.svg';

function Home() {

  const [cardNo, setCardNo] = useState(0);

  const scrollToNext = () => {
    setCardNo((cardNo + 1) % temples.length)
  }

  const scrollToPrev = () => {
    setCardNo((cardNo - 1 + temples.length) % temples.length);
  }

  useEffect(() => {
    const slider = document.getElementById('Home__slide');
    slider.style.transform = `translateX(-${cardNo}00%)`;

  }, [cardNo]);

  return (
    <div id='Home'>
      <section id='Home__vision'>
        {/* our vision */}
        <h2>Our Vision</h2>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius repellat rerum fugit delectus vero sint, animi beatae soluta eveniet consectetur adipisci nihil iure possimus labore ullam et, quidem aperiam?</p>
      </section>
      <section id='Home__gallery'>
        {/* gallery section */}
        <h2>Gallery</h2>
        <div id='Home__gallery'>
          <div id="Home__slide">
            {
              temples.map(t => {
                return <GalleryImg key={t.name} temple={t} />
              })
            }
          </div>
          <img id='slider-right' onClick={scrollToNext} src={right} alt="" className='slider-img' />
          <img id='slider-left' onClick={scrollToPrev} src={left} alt="" className='slider-img' />
          {/* <button onClick={scrollToNext}>Next</button> */}
        </div>
        <p>{cardNo + 1}/{temples.length}</p>
      </section>
    </div>
  )
}

function GalleryImg({ temple }) {
  return (
    <div className='slide-component'>
      <img className='slide-img' src={temple.src} alt={temple.name} />
      <div className='slide-info'>
        <h3>{temple.name}</h3>
        <p id='slide-info__p'>{temple.location}</p>
      </div>
    </div>
  )
}

export default Home