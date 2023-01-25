import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        {/* This will have left side content (About Us) */}
        <h1 className='headtext__cormorant'>about us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
          The Gwendolyn is a heritage, five-star, luxury Restaurant in Centeral Business District of San Antonio, TX, situated next to St. Luke Catholic Church. Built in the Saracenic Revival style, it opened in 1903 as the Gwendolyn and has historically often been known simply as "Gwen".
        </p>
        <button type='button' className='custom__button'>know more</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife_img" />
      </div>

      <div className='app__aboutus-content_history'>
         {/* This will have right side content (History) */}
        <h1 className='headtext__cormorant'>our history</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
          At one time, Gwendolyn was meant to be a revolution, and in the most classical sense. The whole reason it ever started was because, as a reasonably educated and strong young cook, was grossed out by the industry and food system. All those things you saw on TV about the concentrated animal feeding operations was upvoted everytime fire was cranked on saute pan.
        </p>
        <button type='button' className='custom__button'>know more</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
