import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper app__padding'>

    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
            I train my chefs completely different to anyone else.
          </p>
        </div>
        <p className='p__opensans'>
          My young girls and guys, when they come to the kitchen, the first thing they get is a blindfold. They get blindfolded and they get sat down at the chef’s table… Unless they can identify what they’re tasting, they don’t get to cook it.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt="chef-Sign" />
      </div>

    </div>
  </div>
);

export default Chef;
