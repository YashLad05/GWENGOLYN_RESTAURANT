import React, { useState } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {

  const [counter, setCounter] = useState(0);
  
  return(
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0"}}>
        When it comes to Grand Cuisine and fine dining, everything is considered. The sstemware and the dishes, the chairs and tables, the lighting and music- It all adds up to create a Cullinary Experience.  
      </p>
      <button type="button" className='custom__button'>Expore More</button>
    </div>


    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
    {/* <div className='app__wrapper_info'>
      <p>Click to Increase counter - {counter}</p>
      <button onClick = {() => {
        setCounter(counter + 1 );
      }}>
        Increase Counter</button>
    </div> */}

  </div>
  )
};

export default Header;
